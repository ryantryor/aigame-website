
# 游戏网站项目说明

## 项目介绍

本项目为一个响应式现代游戏聚合网站，基于 React + Vite + TailwindCSS + shadcn/ui 组件库开发。首页展示丰富的各类小游戏，可支持分类、搜索和分页。适用场景如小型游戏平台入口、H5游戏推广、兴趣站点等。

## 主要功能

1. 首页支持展示大量不同类型的游戏画面，点击缩略图可跳转至对应游戏页面（仅部分已开通）。
2. 支持分类聚合，按“Action”, “Puzzle”, “Casual”, “Board”, “Racing”, “Education”等类别快速筛选游戏。
3. 支持游戏分页，每页显示设定数量，提升大数据下的用户体验。
4. 项目页面文本全部英文，适合国际化场景。
5. 支持可扩展的游戏明细页，可通过 `iframe` 插入具体游戏。
6. 结构清晰，易于未来新增游戏或类型。

## 使用方法

1. 通过 Lovable 或本地 `npm install && npm run dev` 启动开发环境。
2. 可在 `src/pages/Index.tsx` 中补充游戏数据，或进行相关UI自定义。
3. 路由及页面入口已设置好，如需增加新游戏，添加数据并完善路由跳转及对应页面即可。

## 扩展建议

- 可整合 Supabase 实现排行、用户管理和数据交互。
- 可拆分 Index 页面为多个子组件以提升可维护性。
- 可对接第三方 SDK 实现广告或激励机制。

## 技术栈

- React 18
- Vite 5
- shadcn/ui
- Tailwind CSS
- TypeScript

## 部署方式

支持 Lovable 在线一键部署，或自定义托管至 GitHub Pages/Vercel/Netlify。

---

本项目由 Lovable + AI 自动生成，欢迎自由拓展！

