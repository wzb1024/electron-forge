// 预加载脚本，用于在渲染进程中安全地暴露主进程功能
const { contextBridge, ipcRenderer } = require('electron')

// 暴露安全的 API 到渲染进程
contextBridge.exposeInMainWorld('electron', {
  // 版本信息
  versions: {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron
  },
  
  // 系统信息
  system: {
    platform: process.platform,
    arch: process.arch
  }
}) 