# Google Patents to EndNote - 快速匯出插件

> 一鍵將 Google Patents 專利資訊匯出為 EndNote 相容格式 (RIS/ENW)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-brightgreen)](https://patents.google.com)

## 📋 功能特色

- 🚀 **一鍵匯出**：在 Google Patents 頁面直接匯出專利資訊
- 📚 **雙格式支援**：同時支援 RIS 和 ENW 格式
- 🔍 **完整資訊**：擷取包含標題、發明人、專利權人、摘要、關鍵詞等完整專利資訊
- 💾 **智慧命名**：自動以專利號碼或標題命名檔案
- 🌍 **多國支援**：支援各國專利（美國、台灣、日本、歐洲等）
- 🎯 **即時使用**：無需額外設定，安裝後即可使用

## 🎯 支援的文獻管理軟體

- EndNote
- Zotero
- Mendeley
- RefWorks
- 其他支援 RIS/ENW 格式的文獻管理軟體

## 📦 安裝方法

### Chrome / Edge 瀏覽器

1. 下載本專案：
   ```bash
   git clone https://github.com/calebweixun/gp2endnote.git
   ```

2. 開啟瀏覽器的擴充功能頁面：
   - Chrome: 輸入 `chrome://extensions/`
   - Edge: 輸入 `edge://extensions/`

3. 啟用「開發人員模式」（右上角開關）

4. 點擊「載入未封裝項目」

5. 選擇本專案的資料夾 `gp2endnote`

6. 安裝完成！圖示會出現在瀏覽器工具列

## 🚀 使用方法

1. 前往 [Google Patents](https://patents.google.com) 搜尋並開啟任一專利頁面

2. 頁面右上角會自動出現兩個匯出按鈕：
   - 🔵 **Export RIS** - 匯出為 RIS 格式（通用格式）
   - 🟢 **Export ENW** - 匯出為 ENW 格式（EndNote 專用）

3. 點擊對應按鈕即可下載檔案

4. 將下載的檔案匯入您的文獻管理軟體

## 📊 擷取的專利欄位

插件會自動擷取以下專利資訊：

| 欄位 | RIS 標籤 | ENW 標籤 | 說明 |
|------|----------|----------|------|
| 專利類型 | TY | %0 | Patent |
| 標題 | TI | %T | 專利名稱 |
| 發明人 | AU | %A | 所有發明人 |
| 專利權人 | A2 | %+ | 專利申請人/受讓人 |
| 發布年份 | PY | %D | 公告年份 |
| 發布日期 | DA | %8 | 完整公告日期 |
| 專利號碼 | M1 | %M | 公告號 |
| 申請號 | M2 | %9 | 申請號 |
| 國家代碼 | CY | %C | 專利國家 |
| 種類代碼 | M3 | - | Kind Code |
| 申請日期 | Y2 | - | 申請日期 |
| 摘要 | AB | %X | 專利摘要 |
| 關鍵詞 | KW | %K | 技術關鍵詞 |
| PDF 連結 | L1 | %> | 原文 PDF |
| 網頁連結 | UR | %U | Google Patents 連結 |
| 資料來源 | DB | - | Google Patents |

## 📝 匯出格式說明

### RIS 格式 (.ris)
RIS（Research Information Systems）是最通用的文獻匯出格式，幾乎所有文獻管理軟體都支援：
- 適用於 EndNote、Zotero、Mendeley、Papers 等
- 使用純文字格式，可直接編輯
- 每個欄位獨立一行，便於解析

### ENW 格式 (.enw)
ENW 是 EndNote 的標籤格式：
- 專為 EndNote 設計
- 可直接在 EndNote 開啟
- 支援完整的欄位對應

## 🛠️ 技術架構

- **Manifest Version**: 3
- **內容腳本**: content.js
- **適用網域**: patents.google.com
- **權限**: activeTab

## 📁 專案結構

```
gp2endnote/
├── manifest.json       # 瀏覽器擴充功能設定檔
├── content.js          # 主要功能腳本
├── googlepatents.html  # 測試用 HTML 範例
└── README.md           # 本說明檔案
```

## 🔧 開發

### 本地測試

1. 修改 `content.js` 後，到擴充功能頁面點擊「重新載入」
2. 重新整理 Google Patents 頁面即可測試

### 偵錯

1. 在 Google Patents 頁面按 `F12` 開啟開發者工具
2. 切換到 Console 標籤查看錯誤訊息
3. 在 Sources 標籤可以設定中斷點

## 🤝 貢獻

歡迎提交 Issue 或 Pull Request！

1. Fork 本專案
2. 建立您的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的變更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 📝 授權

本專案採用 MIT 授權條款 - 詳見 [LICENSE](LICENSE) 檔案

## 🐛 問題回報

如果您遇到任何問題或有功能建議，請在 [GitHub Issues](https://github.com/calebweixun/gp2endnote/issues) 提出。

## 📧 聯絡方式

- GitHub: [@calebweixun](https://github.com/calebweixun)

## 🙏 致謝

- 感謝 Google Patents 提供的開放專利資料
- 靈感來自研究人員對文獻管理的需求

## 📜 更新日誌

### v1.1 (2026-02-09)
- ✨ 新增 ENW 格式支援
- 🎨 改善按鈕介面設計
- 📝 擴充擷取欄位（摘要、關鍵詞、PDF 連結等）
- 🐛 修正檔名命名邏輯，避免 Unknown_ID
- 📚 新增完整 README 文件

### v1.0 (初始版本)
- 🎉 基本 RIS 格式匯出功能
- 📋 擷取專利號碼、標題、發明人、日期等基本資訊

---

**如果這個專案對您有幫助，請給個 ⭐️ Star！**
