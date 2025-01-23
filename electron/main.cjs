const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  // 创建浏览器窗口
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: true,
      preload: path.join(__dirname, 'preload.cjs')
    }
  })

  // 加载应用
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
    // 开发环境下打开开发者工具
    win.webContents.openDevTools()
  } else {
    // 生产环境
    win.loadFile(path.join(__dirname, '../renderer/index.html'))
  }

  // 监听加载错误
  win.webContents.on('did-fail-load', (_, errorCode, errorDescription) => {
    console.error(`Failed to load: ${errorCode} - ${errorDescription}`)
  })

  // 监听渲染进程错误
  win.webContents.on('render-process-gone', (event, details) => {
    console.error('Render process gone:', details)
  })

  // 监听崩溃
  win.webContents.on('crashed', (event) => {
    console.error('Window crashed:', event)
  })

  return win
}

// 应用程序生命周期
app.whenReady()
  .then(createWindow)
  .catch(e => console.error('Failed to create window:', e))

// 激活时重新创建窗口（macOS）
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// 关闭所有窗口时退出应用（Windows & Linux）
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
}) 