// 擷取專利頁面資料
function extractPatentData() {
    // 專利號碼
    const patentID = document.querySelector('dd[itemprop="publicationNumber"]')?.innerText?.trim()
        || document.querySelector('span[itemprop="publicationNumber"]')?.innerText?.trim()
        || "Unknown_ID";

    // 標題 - 嘗試多種選擇器
    const title = document.querySelector('span[itemprop="title"]')?.innerText?.trim()
        || document.querySelector('meta[name="DC.title"]')?.content?.trim()
        || document.title.split(' - ')[1]?.trim()
        || "No Title";

    // 公開/公告日期
    const publicationDate = document.querySelector('time[itemprop="publicationDate"]')?.getAttribute('datetime')
        || document.querySelector('meta[name="DC.date"][scheme="issue"]')?.content
        || "";
    const publicationYear = publicationDate.split('-')[0] || "";

    // 申請日期
    const filingDate = document.querySelector('time[itemprop="filingDate"]')?.getAttribute('datetime') || "";

    // 優先權日期
    const priorityDate = document.querySelector('time[itemprop="priorityDate"]')?.getAttribute('datetime') || "";

    // 申請號
    const applicationNumber = document.querySelector('dd[itemprop="applicationNumber"]')?.innerText?.trim()
        || document.querySelector('meta[name="citation_patent_application_number"]')?.content?.replace(/:/g, '')
        || "";

    // 國家代碼
    const countryCode = document.querySelector('dd[itemprop="countryCode"]')?.innerText?.trim() || "";

    // 種類代碼 (kindCode)
    const kindCode = document.querySelector('meta[itemprop="kindCode"]')?.content || "";

    // 發明人
    const inventors = Array.from(document.querySelectorAll('dd[itemprop="inventor"]'))
        .map(el => el.innerText.trim())
        .filter(name => name.length > 0);
    // 備用：從 meta 標籤擷取
    if (inventors.length === 0) {
        document.querySelectorAll('meta[name="DC.contributor"][scheme="inventor"]').forEach(el => {
            inventors.push(el.content.trim());
        });
    }

    // 專利權人 (Assignee)
    const assignees = Array.from(document.querySelectorAll('dd[itemprop="assigneeOriginal"]'))
        .map(el => el.innerText.trim())
        .filter(name => name.length > 0);
    // 備用：從 meta 標籤擷取
    if (assignees.length === 0) {
        document.querySelectorAll('meta[name="DC.contributor"][scheme="assignee"]').forEach(el => {
            assignees.push(el.content.trim());
        });
    }

    // 摘要
    const abstractEl = document.querySelector('section[itemprop="abstract"] div.abstract')
        || document.querySelector('div.abstract')
        || document.querySelector('meta[name="description"]');
    let abstract = "";
    if (abstractEl) {
        abstract = abstractEl.innerText?.trim() || abstractEl.content?.trim() || "";
    }

    // 關鍵詞
    const keywords = Array.from(document.querySelectorAll('dd[itemprop="priorArtKeywords"]'))
        .map(el => el.innerText.trim())
        .filter(kw => kw.length > 0);

    // PDF 連結
    const pdfLink = document.querySelector('a[itemprop="pdfLink"]')?.href
        || document.querySelector('meta[name="citation_pdf_url"]')?.content
        || "";

    // 引用文獻
    const citations = Array.from(document.querySelectorAll('tr[itemprop="backwardReferences"] span[itemprop="publicationNumber"]'))
        .map(el => el.innerText.trim())
        .filter(c => c.length > 0);

    // 當前頁面 URL
    const url = window.location.href;

    return {
        patentID,
        title,
        publicationDate,
        publicationYear,
        filingDate,
        priorityDate,
        applicationNumber,
        countryCode,
        kindCode,
        inventors,
        assignees,
        abstract,
        keywords,
        pdfLink,
        citations,
        url
    };
}

// 生成 RIS 格式內容
function generateRIS(data) {
    let ris = [];

    // 類型：專利
    ris.push(`TY  - PAT`);

    // 標題
    ris.push(`TI  - ${data.title}`);

    // 發明人 (每個發明人一行)
    data.inventors.forEach(inv => {
        ris.push(`AU  - ${inv}`);
    });

    // 專利權人 (每個一行，使用 A2 作為次要作者/機構)
    data.assignees.forEach(assignee => {
        ris.push(`A2  - ${assignee}`);
    });

    // 發布年份
    if (data.publicationYear) {
        ris.push(`PY  - ${data.publicationYear}`);
    }

    // 發布日期
    if (data.publicationDate) {
        ris.push(`DA  - ${data.publicationDate}`);
    }

    // 專利號碼
    ris.push(`M1  - ${data.patentID}`);

    // 申請號
    if (data.applicationNumber) {
        ris.push(`M2  - ${data.applicationNumber}`);
    }

    // 國家/發行機構
    if (data.countryCode) {
        ris.push(`CY  - ${data.countryCode}`);
    }

    // 專利種類代碼
    if (data.kindCode) {
        ris.push(`M3  - ${data.kindCode}`);
    }

    // 申請日期 (使用 Y2 次要日期)
    if (data.filingDate) {
        ris.push(`Y2  - ${data.filingDate}`);
    }

    // 摘要
    if (data.abstract) {
        // 處理摘要中的換行符
        const cleanAbstract = data.abstract.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
        ris.push(`AB  - ${cleanAbstract}`);
    }

    // 關鍵詞 (每個關鍵詞一行)
    data.keywords.forEach(kw => {
        ris.push(`KW  - ${kw}`);
    });

    // PDF 連結
    if (data.pdfLink) {
        ris.push(`L1  - ${data.pdfLink}`);
    }

    // 網頁連結
    ris.push(`UR  - ${data.url}`);

    // 資料庫來源
    ris.push(`DB  - Google Patents`);

    // 結束標記
    ris.push(`ER  - `);
    ris.push('');

    return ris.join('\n');
}

// 生成 EndNote XML (ENW) 格式內容
function generateENW(data) {
    let enw = [];

    // ENW 格式：使用 EndNote 的標籤格式
    enw.push(`%0 Patent`);

    // 標題
    enw.push(`%T ${data.title}`);

    // 發明人
    data.inventors.forEach(inv => {
        enw.push(`%A ${inv}`);
    });

    // 專利權人
    data.assignees.forEach(assignee => {
        enw.push(`%+ ${assignee}`);
    });

    // 發布年份
    if (data.publicationYear) {
        enw.push(`%D ${data.publicationYear}`);
    }

    // 專利號碼
    enw.push(`%M ${data.patentID}`);

    // 申請號
    if (data.applicationNumber) {
        enw.push(`%9 ${data.applicationNumber}`);
    }

    // 國家
    if (data.countryCode) {
        enw.push(`%C ${data.countryCode}`);
    }

    // 發布日期 (完整日期)
    if (data.publicationDate) {
        enw.push(`%8 ${data.publicationDate}`);
    }

    // 摘要
    if (data.abstract) {
        const cleanAbstract = data.abstract.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
        enw.push(`%X ${cleanAbstract}`);
    }

    // 關鍵詞
    if (data.keywords.length > 0) {
        enw.push(`%K ${data.keywords.join('; ')}`);
    }

    // PDF 連結
    if (data.pdfLink) {
        enw.push(`%> ${data.pdfLink}`);
    }

    // 網頁連結
    enw.push(`%U ${data.url}`);

    // 空行結束
    enw.push('');
    enw.push('');

    return enw.join('\n');
}

// 生成安全的檔名
function generateSafeFilename(data, extension) {
    let filename = '';
    
    // 優先使用專利號碼（如果不是 Unknown_ID）
    if (data.patentID && data.patentID !== 'Unknown_ID') {
        filename = data.patentID;
    }
    // 其次使用標題（清理特殊字符）
    else if (data.title && data.title !== 'No Title') {
        filename = data.title
            .replace(/[\\/:*?"<>|]/g, '_')  // 移除不合法的檔名字符
            .replace(/\s+/g, '_')             // 空格替換為底線
            .substring(0, 100);                // 限制長度
    }
    // 最後使用 patent 加時間戳
    else {
        const timestamp = new Date().getTime();
        filename = `patent_${timestamp}`;
    }
    
    return `${filename}.${extension}`;
}

// 下載檔案
function downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const downloadUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(downloadUrl);
}

// 匯出為 RIS 格式
function exportToRIS() {
    const data = extractPatentData();
    const risContent = generateRIS(data);
    const filename = generateSafeFilename(data, 'ris');
    downloadFile(risContent, filename, 'application/x-research-info-systems');
}

// 匯出為 ENW 格式
function exportToENW() {
    const data = extractPatentData();
    const enwContent = generateENW(data);
    const filename = generateSafeFilename(data, 'enw');
    downloadFile(enwContent, filename, 'application/x-endnote-refer');
}

// 在頁面插入按鈕
function injectButton() {
    // 建立按鈕容器
    const container = document.createElement('div');
    container.id = 'gp2endnote-container';
    container.style.cssText = `
        position: fixed; 
        top: 100px; 
        right: 20px; 
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 8px;
    `;

    // RIS 匯出按鈕
    const btnRIS = document.createElement('button');
    btnRIS.innerText = '📤 Export RIS';
    btnRIS.title = 'Export to RIS format (EndNote, Zotero, Mendeley compatible)';
    btnRIS.style.cssText = `
        padding: 10px 15px; 
        background: #4285f4; 
        color: white;
        border: none; 
        border-radius: 4px; 
        cursor: pointer; 
        font-weight: bold;
        font-size: 13px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        transition: background 0.2s;
    `;
    btnRIS.onmouseenter = () => btnRIS.style.background = '#3367d6';
    btnRIS.onmouseleave = () => btnRIS.style.background = '#4285f4';
    btnRIS.onclick = exportToRIS;

    // ENW 匯出按鈕
    const btnENW = document.createElement('button');
    btnENW.innerText = '📤 Export ENW';
    btnENW.title = 'Export to EndNote tagged format';
    btnENW.style.cssText = `
        padding: 10px 15px; 
        background: #34a853; 
        color: white;
        border: none; 
        border-radius: 4px; 
        cursor: pointer; 
        font-weight: bold;
        font-size: 13px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        transition: background 0.2s;
    `;
    btnENW.onmouseenter = () => btnENW.style.background = '#2d8e47';
    btnENW.onmouseleave = () => btnENW.style.background = '#34a853';
    btnENW.onclick = exportToENW;

    container.appendChild(btnRIS);
    container.appendChild(btnENW);
    document.body.appendChild(container);
}

// 執行插入
injectButton();