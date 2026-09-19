![工作坊完成徽章](https://img.shields.io/badge/GitHub_Copilot_實戰工作坊-已完成-1F883D?style=for-the-badge&logo=githubcopilot&logoColor=white)

# 我的待辦清單 Web App

![工作坊完成徽章](https://img.shields.io/badge/GitHub_Copilot_實戰工作坊-已完成-1F883D?style=for-the-badge&logo=githubcopilot&logoColor=white)
這是一個在 GitHub Copilot 實戰工作坊中完成的待辦清單 Web App。專案以簡潔的介面協助使用者新增、整理與追蹤日常待辦事項，並透過瀏覽器儲存功能保留使用者的資料與偏好設定。

## 線上展示

[GitHub Pages](https://wesleywu55.github.io/my-copilot-workshop/)

> 請將上方網址中的 `<你的帳號>` 與 `<你的repo名稱>` 替換成實際的 GitHub 帳號和 repository 名稱。

## 功能

- 新增待辦事項，會忽略只有空白的輸入內容。
- 勾選待辦事項為已完成，文字會顯示刪除線並淡化。
- 取消已完成狀態，待辦事項會回到未完成清單。
- 刪除單筆待辦事項。
- 顯示所有待辦事項中的未完成數量，不受目前篩選條件影響。
- 清單沒有資料時顯示空狀態提示。
- 依照「全部」、「未完成」或「已完成」篩選待辦事項。
- 記住上次選擇的篩選條件；無效的篩選值會安全回到「全部」。
- 在已完成篩選中取消勾選時，顯示「已移至未完成清單。」的操作回饋。
- 支援淺色模式與深色模式切換。
- 使用者尚未手動選擇主題時，會依照作業系統的深淺色設定初始化。
- 記住使用者選擇的主題偏好。
- 支援手機螢幕的響應式版面。

## 技術

- 使用純 HTML、CSS 與原生 JavaScript。
- 不使用任何前端框架或第三方套件。
- 不引用外部 CDN，可直接離線開啟。
- 使用 CSS 變數集中管理淺色與深色配色。
- 使用 `localStorage` 保存待辦事項、篩選條件與主題偏好。
- 使用 DOM API、`textContent` 與 `createElement` 產生清單內容。

## 開發方式

- 使用 GitHub Copilot Agent Mode，從需求描述開始建立待辦清單的介面與互動功能。
- 使用 Microsoft Learn MCP Server 查詢 `prefers-color-scheme` 與深色模式無障礙對比的官方文件，作為主題功能與色彩檢查的參考。
- 使用 GitHub MCP Server 讀取 issue、整理問題、建立修復分支並開立 Pull Request。
- 使用 `.github/prompts` 中的 `fix-issue.prompt.md` 定義 agentic workflow，依序執行讀取 issue、提出計畫、修改、驗證、提交、推送與建立 PR。
- 透過瀏覽器互動測試與 JavaScript 語法檢查驗證功能，並以 Git commit 管理開發歷程。

## 我學到什麼

- 如何用原生 JavaScript 管理表單事件、DOM 更新與事件委派。
- 如何使用 `localStorage` 保存使用者資料，並對儲存內容進行安全驗證與預設回退。
- 如何使用 `prefers-color-scheme` 建立會跟隨作業系統設定的深色模式。
- 如何從使用者體驗角度處理篩選後項目消失的情況，加入清楚且具無障礙性的操作回饋。
- 如何結合 Agent Mode、MCP 與 prompt 定義的工作流程，完成 issue 到 Pull Request 的開發循環。
