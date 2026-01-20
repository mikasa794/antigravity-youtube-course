@echo off
cd /d "%~dp0"
echo ==================================================
echo      ANTIGRAVITY DAILY CONTENT AUTOMATION
echo ==================================================
echo.
echo [1/4] Configuring Environment...
set PYTHONUTF8=1
set PYTHONPATH=%CD%

echo [2/4] Fetching New Content from YouTube (VPN Required)...
python src/orchestrator.py --batch --auto-approve

echo.
echo [3/4] Syncing Feishu Data to Local Web DB...
python src/sync_feishu_to_static.py

echo.
echo [4/4] Deploying to Vercel (via Git)...
:: 1. Add and Commit Local Changes (Safe)
git add .
git commit -m "chore: daily content update (via One-Click)"

:: 2. Pull Remote Changes (Rebase to keep history clean)
git pull --rebase origin main

:: 3. Push to Vercel
git push origin main
echo ✅ Changes pushed to Vercel!

echo.
echo ==================================================
echo ✅ MISSION ACCOMPLISHED.
echo ==================================================
pause
