# Electron Forge

一个现代化的桌面应用程序模板，结合了 Electron 和 Vue 3 的强大功能。轻松构建精美的跨平台应用程序。

[English](./README.md) | 中文说明

## 特性

- ⚡️ [Vite](https://vitejs.dev/) - 闪电般快速的前端工具
- 🖥️ [Electron](https://www.electronjs.org/) - 使用 JavaScript 构建跨平台桌面应用
- 🎨 [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- 🎯 [TypeScript](https://www.typescriptlang.org/) - 带类型语法的 JavaScript
- 🎉 [Element Plus](https://element-plus.org/) - 基于 Vue 3 的组件库
- 📦 热重载 - 支持渲染进程和主进程
- 🚀 生产就绪 - 内置构建和打包功能
- 🎨 SCSS 支持 - 包含变量和现代 CSS 特性
- 🔍 ESLint + Prettier - 代码检查和格式化

## 快速开始

### 环境要求

- Node.js (>= 16)
- npm 或 yarn 或 pnpm

### 安装

```bash
# 克隆仓库
git clone https://github.com/yourusername/electron-forge.git

# 进入项目目录
cd electron-forge

# 安装依赖
npm install
```

### 开发

```bash
# 以开发模式启动应用（支持热重载）
npm run dev:electron

# 以网页模式启动（用于网页开发）
npm run dev:web
```

### 构建

```bash
# 构建生产版本应用
npm run build:electron

# 仅构建网页版本
npm run build:web
```

构建后的应用将位于 `release` 目录中。

## 项目结构

```
├── electron/               # Electron 主进程文件
│   ├── main.cjs           # 主进程入口
│   └── preload.cjs        # 预加载脚本
├── src/                   # 渲染进程文件（Vue 应用）
│   ├── assets/           # 静态资源
│   ├── components/       # Vue 组件
│   ├── styles/          # 全局样式
│   ├── App.vue          # 根组件
│   └── main.ts          # 渲染进程入口
├── electron.vite.config.ts # Electron 专用 Vite 配置
├── vite.config.ts        # Web 版本的 Vite 配置
├── tsconfig.json         # TypeScript 配置
└── package.json          # 项目配置文件
```

## 脚本命令

- `dev:electron` - 以开发模式启动应用（支持热重载）
- `dev:web` - 以网页开发模式启动
- `build:electron` - 构建生产版本应用
- `build:web` - 仅构建网页版本
- `preview` - 本地预览网页构建结果
- `lint` - 使用 ESLint 检查代码
- `format` - 使用 Prettier 格式化代码

## 配置说明

### Electron

Electron 配置位于 `electron.vite.config.ts`，包括：
- 主进程构建配置
- 预加载脚本配置
- 渲染进程配置

### Vite

Vite 配置位于 `vite.config.ts`，包括：
- Vue 插件配置
- 路径别名
- 构建选项

### TypeScript

TypeScript 配置分为：
- `tsconfig.json` - 主要 TypeScript 配置
- `tsconfig.node.json` - Node 专用配置

## 参与贡献

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m '添加某个特性'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 提交 Pull Request

## 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件。 