<h1 align="center">Vue3-Vant-demo</h1>

<p align="center">
  一个基于 Vue 3 生态系统的移动 web 应用模板
</p>

## Features

- 🗂 [基于文件的路由](./src/router)

- 📦 [组件自动化加载](./src/components)

- 🍍 [使用 Pinia 的状态管理](https://pinia.vuejs.org)

- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)

- 💪 TypeScript

- 🌓 支持深色模式

- 🌈 Git [hooks](./.husky) - 提交代码 eslint 检测 和 提交规范检测

- 🪶 [Vant](https://github.com/youzan/vant) - 移动端 Vue 组件库

- ⚙️ 使用 [Vitest](https://github.com/vitest-dev/vitest) 进行单元测试

## UI 框架

- [Vant](https://github.com/youzan/vant) - 移动端 Vue 组件库
  - [`vant-use`](https://github.com/youzan/vant/tree/main/packages/vant-use) - Vant 内置的组合式 API

## 插件

- [Vue Router](https://github.com/vuejs/router)
  - [`unplugin-vue-router`](https://github.com/posva/unplugin-vue-router) - 以文件系统为基础的路由
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - 页面布局系统
- [Pinia](https://pinia.vuejs.org) - 直接的, 类型安全的, 使用 Composition API 的轻便灵活的 Vue 状态管理库
  - [`pinia-plugin-persistedstate`](https://github.com/prazdevs/pinia-plugin-persistedstate) -  适用于 Pinia 的持久化存储插件
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - 自动加载组件
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等，无需导入
- [vueuse](https://github.com/antfu/vueuse) - 实用的 Composition API 工具合集
- [vite-plugin-sitemap](https://github.com/jbaubree/vite-plugin-sitemap) - sitemap 和 robots 生成器

### 开发工具

- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://github.com/vitest-dev/vitest) - 基于 Vite 的单元测试框架
- [pnpm](https://pnpm.js.org/) - 快, 节省磁盘空间的包管理器
- [VS Code Extensions](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - 自动启动 Vite 服务器
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE 支持
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - 图标内联显示和自动补全
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
