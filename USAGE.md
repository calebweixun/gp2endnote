# 使用說明

## 快速開始

### 1. 安裝擴充功能

請參考 [README.md](README.md) 的安裝步驟。

### 2. 前往 Google Patents

開啟 [Google Patents](https://patents.google.com) 並搜尋專利。

例如：
- 搜尋 "TWI718793"（台灣專利）
- 搜尋 "US10000000"（美國專利）
- 搜尋 "EP3000000"（歐洲專利）

### 3. 匯出專利資訊

在專利詳細頁面，您會在右上角看到兩個按鈕：

```
┌─────────────────┐
│ 📤 Export RIS  │  ← 通用格式
└─────────────────┘

┌─────────────────┐
│ 📤 Export ENW  │  ← EndNote 專用
└─────────────────┘
```

點擊任一按鈕即可下載檔案。

## 檔案命名規則

下載的檔案會依照以下優先順序命名：

1. **專利號碼**（例如：`TWI718793B.ris`）
   - 最常見的情況
   - 檔名清楚明確

2. **專利標題**（例如：`扣件成形過程的感測監控方法.ris`）
   - 當專利號碼無法取得時
   - 特殊字符會被替換為底線
   - 長度限制在 100 字元

3. **時間戳記**（例如：`patent_1707456789123.ris`）
   - 當以上資訊都無法取得時的備案
   - 確保檔案不會重複

## 匯入文獻管理軟體

### EndNote

#### 方法 1：直接開啟 ENW 檔案
1. 下載 `.enw` 檔案
2. 雙擊檔案，EndNote 會自動開啟並匯入

#### 方法 2：匯入 RIS 檔案
1. 開啟 EndNote
2. 選擇 **File → Import → File**
3. 選擇下載的 `.ris` 檔案
4. Import Option 選擇 **RefMan (RIS)**
5. 點擊 **Import**

### Zotero

1. 開啟 Zotero
2. 選擇 **檔案 → 匯入**
3. 選擇下載的 `.ris` 檔案
4. 點擊 **開啟**

### Mendeley

1. 開啟 Mendeley Desktop
2. 選擇 **File → Import → RIS**
3. 選擇下載的 `.ris` 檔案
4. 點擊 **Import**

## 匯出格式比較

### RIS 格式範例

```
TY  - PAT
TI  - 扣件成形過程的感測監控方法
AU  - 林恆勝
AU  - 張婉琪
AU  - 溫志群
A2  - 財團法人金屬工業研究發展中心
PY  - 2021
DA  - 2021-02-11
M1  - TWI718793B
M2  - TW108144117A
CY  - TW
M3  - B
Y2  - 2019-12-03
AB  - 本發明係有關於一種扣件成形過程的感測監控方法...
KW  - load
KW  - sensing
KW  - fastener
L1  - https://patentimages.storage.googleapis.com/.../TWI718793B.pdf
UR  - https://patents.google.com/patent/TWI718793B/zh
DB  - Google Patents
ER  - 
```

### ENW 格式範例

```
%0 Patent
%T 扣件成形過程的感測監控方法
%A 林恆勝
%A 張婉琪
%A 溫志群
%+ 財團法人金屬工業研究發展中心
%D 2021
%M TWI718793B
%9 TW108144117A
%C TW
%8 2021-02-11
%X 本發明係有關於一種扣件成形過程的感測監控方法...
%K load; sensing; fastener; monitoring method; item
%> https://patentimages.storage.googleapis.com/.../TWI718793B.pdf
%U https://patents.google.com/patent/TWI718793B/zh


```

## 欄位對應表

| 專利資訊 | RIS | ENW | 說明 |
|---------|-----|-----|------|
| 文獻類型 | TY  | %0  | 固定為 "PAT" 或 "Patent" |
| 標題 | TI  | %T  | 專利名稱 |
| 發明人 | AU  | %A  | 可以有多個 |
| 專利權人 | A2  | %+  | 申請人/受讓人 |
| 年份 | PY  | %D  | 公告年份 |
| 完整日期 | DA  | %8  | YYYY-MM-DD |
| 專利號 | M1  | %M  | 公告號 |
| 申請號 | M2  | %9  | 申請號碼 |
| 國家 | CY  | %C  | 國家代碼 |
| 種類碼 | M3  | -   | A1, B1, B2 等 |
| 申請日 | Y2  | -   | 優先權日期 |
| 摘要 | AB  | %X  | 專利摘要 |
| 關鍵詞 | KW  | %K  | 技術關鍵字 |
| PDF | L1  | %>  | 原文連結 |
| URL | UR  | %U  | 網頁連結 |
| 資料庫 | DB  | -   | 來源標記 |

## 常見問題

### Q: 下載的檔案是空的？
A: 請確認您在專利的**詳細頁面**（URL 格式：`https://patents.google.com/patent/專利號碼`），而不是搜尋結果頁面。

### Q: EndNote 無法識別檔案？
A: 
1. 確認副檔名是 `.enw` 或 `.ris`
2. 嘗試使用 **File → Import** 而不是直接開啟
3. 檢查 Import Option 是否選擇正確

### Q: 某些欄位是空的？
A: 部分專利頁面可能缺少某些資訊（如摘要、關鍵詞），插件只能擷取頁面上存在的資料。

### Q: 支援哪些國家的專利？
A: 支援 Google Patents 上所有的專利，包括：
- 🇺🇸 美國 (US)
- 🇪🇺 歐洲 (EP)
- 🇯🇵 日本 (JP)
- 🇹🇼 台灣 (TW)
- 🇨🇳 中國 (CN)
- 🇰🇷 韓國 (KR)
- 以及其他所有國家

### Q: 可以批量匯出嗎？
A: 目前版本不支援批量匯出，每次只能匯出一個專利。這個功能在我們的待開發清單中。

### Q: 按鈕沒有出現？
A: 請檢查：
1. 擴充功能是否已啟用
2. 是否在專利詳細頁面（而非搜尋頁面）
3. 嘗試重新整理頁面
4. 檢查瀏覽器控制台是否有錯誤訊息（F12）

## 技巧與建議

### 1. 選擇合適的格式

- **RIS**：如果您使用 Zotero、Mendeley 或不確定用什麼，選擇 RIS
- **ENW**：如果您只使用 EndNote，ENW 可能更方便

### 2. 檢查匯入結果

匯入後建議檢查：
- 發明人順序是否正確
- 摘要是否完整
- PDF 連結是否有效
- 專利號格式是否正確

### 3. 後續編輯

匯入後您可以在文獻管理軟體中：
- 手動補充缺失的資訊
- 調整欄位格式
- 添加筆記和標籤
- 下載並附加 PDF 全文

## 更多資源

- [EndNote 官方文件](https://endnote.com/support/)
- [Zotero 使用指南](https://www.zotero.org/support/)
- [RIS 格式規範](https://en.wikipedia.org/wiki/RIS_(file_format))
- [Google Patents 搜尋技巧](https://patents.google.com/advanced)

---

如有其他問題，請在 [GitHub Issues](https://github.com/你的帳號/gp2endnote/issues) 提出。
