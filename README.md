# Electron Forge

A modern desktop application template that combines the power of Electron with Vue 3. Build beautiful cross-platform apps with ease.

[English](./README.md) | [中文说明](./README.zh-CN.md)

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Lightning fast frontend tooling
- 🖥️ [Electron](https://www.electronjs.org/) - Cross platform desktop apps with JavaScript
- 🎨 [Vue 3](https://vuejs.org/) - The Progressive JavaScript Framework
- 🎯 [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- 🎉 [Element Plus](https://element-plus.org/) - A Vue 3 based component library
- 📦 Hot Reloading - For both renderer and main process
- 🚀 Production Ready - Built-in building and packaging
- 🎨 SCSS Support - With variables and modern CSS features
- 🔍 ESLint + Prettier - Code linting and formatting

## Getting Started

### Prerequisites

- Node.js (>= 16)
- npm or yarn or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/electron-forge.git

# Enter the project directory
cd electron-forge

# Install dependencies
npm install
```

### Development

```bash
# Start the app in development mode (with hot reloading)
npm run dev:electron

# Start the app in web mode (for web development)
npm run dev:web
```

### Building

```bash
# Build the app for production
npm run build:electron

# Build for web only
npm run build:web
```

The built app will be in the `release` directory.

## Project Structure

```
├── electron/               # Electron main process files
│   ├── main.cjs           # Main process entry
│   └── preload.cjs        # Preload scripts
├── src/                   # Renderer process files (Vue app)
│   ├── assets/           # Static assets
│   ├── components/       # Vue components
│   ├── styles/          # Global styles
│   ├── App.vue          # Root component
│   └── main.ts          # Renderer entry
├── electron.vite.config.ts # Electron-specific Vite config
├── vite.config.ts        # Vite config for web
├── tsconfig.json         # TypeScript config
└── package.json          # Project manifest
```

## Scripts

- `dev:electron` - Start the app in development mode with hot reload
- `dev:web` - Start the app in web development mode
- `build:electron` - Build the app for production
- `build:web` - Build for web only
- `preview` - Preview the web build locally
- `lint` - Lint the code with ESLint
- `format` - Format the code with Prettier

## Configuration

### Electron

The Electron configuration is in `electron.vite.config.ts`. It includes settings for:
- Main process building
- Preload scripts
- Renderer process

### Vite

The Vite configuration is in `vite.config.ts`. It includes:
- Vue plugin
- Path aliases
- Build options

### TypeScript

TypeScript configuration is split into:
- `tsconfig.json` - Main TypeScript configuration
- `tsconfig.node.json` - Node-specific configuration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
