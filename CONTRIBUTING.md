# 貢獻指南

感謝您考慮為 Google Patents to EndNote 做出貢獻！

## 如何貢獻

### 回報 Bug

如果您發現 bug，請在 GitHub Issues 中回報，並包含：
- 瀏覽器版本
- 專利頁面的 URL
- 錯誤描述和重現步驟
- 如果可能的話，附上螢幕截圖或控制台錯誤訊息

### 建議新功能

我們歡迎新功能建議！請在 GitHub Issues 中說明：
- 功能描述
- 使用情境
- 為什麼這個功能有幫助

### 提交程式碼

1. **Fork 專案**
   ```bash
   git clone https://github.com/你的帳號/gp2endnote.git
   cd gp2endnote
   ```

2. **建立功能分支**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **進行修改**
   - 保持程式碼風格一致
   - 加入適當的註解
   - 測試您的修改

4. **測試**
   - 在 Chrome/Edge 載入擴充功能
   - 測試不同國家的專利（US, EP, JP, TW, CN 等）
   - 確認 RIS 和 ENW 格式都正確

5. **提交變更**
   ```bash
   git add .
   git commit -m "✨ Add amazing feature"
   ```

   Commit 訊息格式：
   - ✨ `:sparkles:` 新功能
   - 🐛 `:bug:` Bug 修復
   - 📝 `:memo:` 文件更新
   - 🎨 `:art:` 程式碼格式/結構改善
   - ⚡️ `:zap:` 效能改善
   - 🔧 `:wrench:` 設定檔修改

6. **推送到 GitHub**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **建立 Pull Request**
   - 前往 GitHub 開啟 Pull Request
   - 描述您的變更
   - 等待審核

## 開發指南

### 設定開發環境

1. 安裝 Chrome 或 Edge 瀏覽器
2. Clone 專案
3. 在瀏覽器啟用開發者模式載入擴充功能

### 程式碼規範

- 使用 2 空格縮排
- 使用有意義的變數和函數名稱
- 對複雜邏輯加入註解
- 保持函數簡短和單一職責

### 測試檢查清單

- [ ] 在不同專利頁面測試
- [ ] 測試各種語言的專利
- [ ] 確認檔名正確生成
- [ ] 驗證 RIS 格式可被 EndNote/Zotero 讀取
- [ ] 驗證 ENW 格式可被 EndNote 讀取
- [ ] 檢查所有欄位都正確擷取
- [ ] 測試特殊字符處理

### 優先改善項目

歡迎協助改善以下功能：
- [ ] 支援批量匯出
- [ ] 增加更多專利資料庫支援
- [ ] 優化 UI/UX
- [ ] 增加單元測試
- [ ] 支援更多文獻格式（BibTeX、CSV 等）
- [ ] 多語言介面支援

## 授權

提交程式碼即表示您同意以 MIT 授權條款釋出您的貢獻。

## 問題？

如有任何問題，請在 GitHub Issues 中提問，我們會盡快回覆！
