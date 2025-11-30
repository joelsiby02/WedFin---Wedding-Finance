@echo off
echo ========================================
echo Instant Wedding Loan - Setup Script
echo ========================================
echo.

echo Step 1: Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo Step 2: Starting development server...
echo.
echo Your website will open at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.
call npm run dev

pause
