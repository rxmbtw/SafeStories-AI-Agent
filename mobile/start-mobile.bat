@echo off
echo Starting SafeStories Mobile Version...
echo.

cd mobile

echo Installing dependencies...
call npm install

echo.
echo Starting mobile development server...
echo The mobile app will be available at: http://localhost:3001
echo.

call npm run dev

pause