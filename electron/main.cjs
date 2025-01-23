const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  console.log('当前工作目录:', process.cwd())
  console.log('__dirname:', __dirname)
  console.log('环境变量:', process.env)

  // 添加调试信息
  console.log('VITE_DEV_SERVER_URL:', process.env.VITE_DEV_SERVER_URL)

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
  const rendererURL = process.env.VITE_DEV_SERVER_URL || process.env.ELECTRON_RENDERER_URL
  if (rendererURL) {
    console.log('正在加载开发服务器URL:', rendererURL)
    win.loadURL(rendererURL)
    win.webContents.openDevTools()
  } else {
    console.log('未找到开发服务器URL，尝试加载本地文件')
    const indexPath = path.join(__dirname, '../renderer/index.html')
    console.log('尝试加载路径:', indexPath)
    win.loadFile(indexPath)
  }

  // 监听加载错误
  win.webContents.on('did-fail-load', (_, errorCode, errorDescription) => {
    console.log('加载失败:', errorCode, errorDescription)
    // 如果加载失败，尝试重新加载
    if (process.env.VITE_DEV_SERVER_URL) {
      setTimeout(() => {
        win.loadURL(process.env.VITE_DEV_SERVER_URL)
      }, 1000)
    }
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