# GitHub Actions 部署指南 (React + Vite)

這份指南將協助你將此 `to-do-list` 專案部署到 **GitHub Pages**。

## 1. 準備工作

### 修改 `vite.config.js`
為了讓應用程式能在 GitHub Pages (通常路徑為 `/你的專案名稱/`) 正確運作，需要設定基礎路徑 (base path)。

打開 `vite.config.js` 並修改如下：

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/to-do-list/', // <--- 請將這裡改成你的 Git Repository 名稱，前後都要有斜線
})
```

> **注意**：如果你之後在 GitHub 建立的 Repository 名稱不是 `to-do-list`，請務必回來這裡修改成對應的名稱。

## 2. 建立 GitHub Actions Workflow

我都幫你準備好了！我已經在專案中建立了 `.github/workflows/deploy.yml` 檔案。
這個檔案會告訴 GitHub 當你 Push 程式碼時，自動執行以下步驟：
1. 安裝環境 (Node.js)
2. 安裝套件 (npm ci)
3. 建置專案 (npm run build)
4. 將 `dist` 資料夾部署到 `gh-pages` 分支

你不需要做任何額外設定，只要確保 `.github/workflows/deploy.yml` 存在即可。

## 3. 推送到 GitHub

請依照以下指令，將專案推送到你的 GitHub Repository：

1. **在 GitHub 上建立一個新的 Repository** (例如命名為 `to-do-list`)。
2. **在終端機執行** (請確保你在 `to-do-list` 資料夾內)：

```bash
# 初始化 git (如果還沒做過)
git init

# 加入所有檔案
git add .

# 提交第一次變更
git commit -m "Initial commit"

# 設定你的 GitHub Repository 網址 (將 URL 換成你剛剛建立的)
git remote add origin https://github.com/你的帳號/to-do-list.git

# 推送上去
git branch -M main
git push -u origin main
```

## 4. 設定 GitHub Pages

當你推送上去後，GitHub Actions 會自動開始執行 (你可以到 GitHub 專案頁面的 `Actions` 分頁查看進度)。
等到出現綠勾勾 ✅ (Deploy 成功) 後：

1. 進入 GitHub Repository 的 **Settings** (設定)。
2. 左側選單點選 **Pages**。
3. 在 **Build and deployment** 區塊：
    - **Source**: 選擇 `Deploy from a branch`。
    - **Branch**: 選擇 `gh-pages` 分支 (這是 Actions 自動建立的)，並選擇 `/ (root)`。
    - 按下 **Save**。

(有時候 GitHub Actions @v4 會自動幫你設定好 Pages，如果這一 步已經是正確的就不需變更)。

## 5. 完成！

你的網站將會在 `https://你的帳號.github.io/to-do-list/` 上線。
