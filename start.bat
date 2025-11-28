@echo off
echo Starting Safestories AI Agent...
echo.

echo Installing dependencies...
call npm install

echo.
echo Starting React development server...
echo The application will be available at: http://localhost:5173
echo.

call npm run dev

pause