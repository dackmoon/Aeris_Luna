# 版本历史

记录 Aeris / Luna 的版本里程碑。每一版对应一个 git tag。

格式参考 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/)，但不严格遵循 SemVer——v0.X 是阶段里程碑而不是发布版本。

---

## [v0.2] — 2026-05-07

### 新增

- React 19 + Vite + Capacitor 8 + Android 工程脚手架。
- Luna 主界面：标题区 + 角色展示区 + 状态测试按钮区 + 对话预览区。
- 六个状态视频 loop：`idle / listening / thinking / speaking / happy / comforting`，按钮切换可触发视频换池。
- 视频清单 `app/public/videos/manifest.json`，标记当前临时映射（`speaking` 复用 `happy`，`comforting` 复用 `listening`）。
- CSS 呼吸动画，`speaking` 状态加快节奏，`happy`/`comforting` 状态使用差异化光晕。

### 已知限制

- 视频路径仍是硬编码，没有从 manifest 读取。
- 聊天输入框是 `readOnly`，发送按钮只切到 `thinking` 状态，没有真实对话流程。
- 未集成 TTS、麦克风、对话模型，这些是后续版本的工作。

### 验收

- [x] Android 手机上能打开 Luna App。
- [x] 页面布局适合手机竖屏。
- [x] 角色区域和基础聊天区域能显示。
- [x] 点击按钮能切换状态。

---

## [v0.1] — 2026-05-06

### 新增

- 项目命名约定：`Aeris` 体系 / `Luna` 当前角色。
- 角色设定文档：定位、性格、视觉气质、说话风格、5 个核心表情。
- AI 生图提示词：主形象、头像、5 个表情、视频参考。
- 第一批视觉资产：主形象半身像 1 张、4 张表情图（默认微笑、开心鼓励、温柔倾听、思考好奇）。
- 表情映射清单 `assets/expressions/manifest.json`。
- 短期路线决策：视频 loop + 状态机 + Android 混合 App 为主线，Live2D 降级为长期可选。

### 已知限制

- 缺少独立的 `comforting` 安抚关心表情（暂时复用 `listening`）。
- 表情图片格式混用 `png` 和 `jpeg`，未统一。
- 视频素材仍为参考级，不是统一规格的最终素材。

---

[v0.2]: https://github.com/dackmoon/Aeris_Luna/releases/tag/v0.2
[v0.1]: https://github.com/dackmoon/Aeris_Luna/releases/tag/v0.1
