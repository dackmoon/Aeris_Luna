# Aeris / Luna

`Aeris` 是长期项目/体系名称。`Luna` 是当前体系下的角色名，定位是面向宝宝成长场景的温柔陪伴助手。

当前版本：**v0.2** — 第一个能跑的 Android 混合 App 原型。

## 它是什么

Luna 是一个本地优先的智能陪伴角色：

- **形象**：轻量二次元小姐姐，预生成视频 loop 表达不同状态。
- **状态机**：`idle / listening / thinking / speaking / happy / comforting`。
- **运行形态**：Capacitor 混合 App，WebView 内承载 React 前端；首要平台 Android，后续扩展 iOS 和树莓派屏幕。
- **长期可选**：等视频 loop 路线验证后，再评估是否升级到 Live2D。

## 目录结构

```
.
├── README.md           顶层项目概览（本文件）
├── CHANGELOG.md        版本历史
├── docs/               规划与设计文档
│   ├── plan.md         长期路线图
│   ├── character.md    Luna 角色设定
│   ├── prompts.md      AI 生图/生视频提示词
│   ├── versioning.md   版本约定 + 命名说明
│   └── notes/          评审记录
├── assets/             角色视觉资产（图片、参考视频）
└── app/                当前代码工程（React + Capacitor + Android）
```

## 快速开始

跑起来 Luna App：

```bash
cd app
npm install
npm run dev          # 浏览器预览
npm run build        # 构建
npm run cap:sync     # 同步到 Android 工程
npm run android      # 打开 Android Studio
```

详细环境要求和真机运行步骤见 [`app/README.md`](./app/README.md)。

## 版本约定

- `v0.1`、`v0.2`、`v0.3` 等小版本号代表实现阶段的里程碑，不是 SemVer。
- 每个版本对应一个 git tag，可以通过 `git checkout v0.1` 回到当时的状态。
- 版本号含义和发布约定见 [`docs/versioning.md`](./docs/versioning.md)。

## 文档导航

- [实现计划](./docs/plan.md)
- [版本历史](./CHANGELOG.md)
- [角色设定](./docs/character.md)
- [AI 提示词](./docs/prompts.md)
- [版本约定](./docs/versioning.md)
- [资产说明](./assets/README.md)
- [图片评审记录](./docs/notes/image-review.md)
