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
  base: '/to_do_list_app/', // <--- 請將這裡改成你的 Git Repository 名稱，前後都要有斜線
})
```

> **注意**：如果你之後在 GitHub 建立的 Repository 名稱不是 `to-do-list`，請務必回來這裡修改成對應的名稱。

## 2. 建立 GitHub Actions Workflow

因為您已經將專案移動到根目錄，我已經更新了 `.github/workflows/deploy.yml` 檔案，移除了之前的子目錄設定。

**您需要執行以下指令來更新檔案變更：**

```bash
# 確保在根目錄
cd /home/c95cpw/antigravity/antigravity_container/to_do_list_app

# 加入變更並推送
git add .github/workflows/deploy.yml
git commit -m "Fix: Update workflow for root directory structure"
git push
```

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
    - **Source**: 請改選 **`GitHub Actions`** (非常重要！)。
    - (不需要選擇 Branch，因為 Workflow 會自動處理)。


(有時候 GitHub Actions @v4 會自動幫你設定好 Pages，如果這一 步已經是正確的就不需變更)。

## 5. 完成！

你的網站將會在 `https://你的帳號.github.io/to-do-list/` 上線。
