# Aeris / Luna Character v0.1

这是 Aeris 项目的 v0.1 版本首页，用于 Luna 角色的项目说明、进度管理和下一步决策。

Luna 是当前版本中面向宝宝成长陪伴场景的智能陪伴助手形象。她的定位是温柔、可靠、有亲和力的小姐姐，会陪宝宝聊天、回应情绪、鼓励表达。

## 命名约定

- `Aeris`：长期项目/体系名称，后续可以承载多个角色、多个版本或多个具体产品。
- `Luna`：当前 v0.1 版本的具体角色名称，也是当前自用 App 原型的角色名。
- 当前目录仍保留在 `Aeris_Character` 下，但文档中具体角色统一称为 `Luna`。

## 当前结论

当前短期主路线已经确定：**先做 Android 自用混合 App，再在 App 的 WebView 中使用视频 loop 素材库 + 状态机 + TTS + 伪口型/说话状态。**

暂时不直接做 Live2D，也不要求拆 PSD、绑定模型或精准口型。现有图片和视频素材继续作为 Luna 的视觉与动态资产。Live2D 保留为长期可选升级。

## 当前状态

- 项目阶段：`v0.1 形象与方向沉淀`
- 当前重点：进入 `v0.2 Android 混合 App 原型`
- 主实现路线：`Capacitor / Ionic + React + WebView + 视频 loop 状态机`
- 动态角色路线：预生成视频 loop 素材库优先
- 说话表现路线：TTS 播放时切换 `speaking` 视频池，必要时叠加伪口型/轻微说话动效
- 首要平台：Android 手机自用
- 后续平台：iOS 自用、树莓派屏幕

## 下一步任务

1. 整理当前已有视频素材。
2. 定义第一版状态机：`idle`、`listening`、`thinking`、`speaking`、`happy`、`comforting`。
3. 为每个状态准备至少 1 条视频 loop。
4. 初始化 Android 混合 App 原型。
5. 在 Android 手机上跑出一个空 App 页面。
6. 在 WebView 中跑通视频播放和状态切换。
7. 准备一段本地音频，测试 TTS 播放时切换到 `speaking` 状态。

## 阶段看板

### v0.1 形象与方向沉淀

状态：进行中，基本完成。

已完成：

- 建立角色定位。
- 生成主形象方向。
- 生成 4 个基础表情。
- 确定视频 loop + 状态机 + App/WebView 为短期主路线。
- 建立 `plan.md`、`live2d-plan.md`、`web-validation.md`。

剩余：

- 整理当前已有视频素材。
- 补齐每个状态的视频 loop。
- 整理现有图片资产命名和格式。
- 后续补一张独立的安抚关心表情。

### v0.2 Android 混合 App 原型

状态：未开始。

要做：

- 初始化 React + Capacitor 项目。
- 创建竖屏移动端界面。
- 配置 Android 打包。
- 在 Android 手机上安装 APK。
- 验证页面启动、触摸和布局。

验收：

- Android 手机上能打开 Luna App。
- 页面适合竖屏。
- 有角色区域、对话区域和测试按钮。

### v0.3 视频 loop 素材库

状态：未开始。

要做：

- 设计第一批状态：`idle`、`listening`、`thinking`、`speaking`、`happy`、`comforting`。
- 每个状态准备 1 到 3 条短视频 loop。
- 统一视频比例、背景、构图和角色大小。
- 将视频放入 App 资源目录或 `assets/video-references/`。

验收：

- 至少有 4 类可播放视频：`idle`、`listening`、`thinking`、`speaking`。
- App 中可以播放视频 loop。
- 不同状态切换时观感自然。
- 安卓手机上播放流畅。

### v0.4 状态机调度

状态：未开始。

要做：

- 建立状态枚举。
- 为每个状态建立视频池。
- 相同状态下随机选择视频。
- 处理视频结束后的续播。
- 先用按钮手动触发状态切换。

验收：

- 点击按钮能切换不同状态。
- 每个状态能从对应视频池随机播放。
- 状态切换不卡顿。
- 角色表现有基础陪伴感。

### v0.5 TTS 播放与伪口型/说话状态

状态：未开始。

要做：

- 准备本地测试音频。
- 播放音频时切换到 `speaking` 视频池。
- 音频结束后回到 `idle` 或 `listening`。
- 可选：用音频音量控制轻微缩放、嘴部贴片或说话动效强度。

验收：

- 点击按钮后能播放语音。
- 播放时角色进入说话状态。
- 语音结束后能自然回到待机或倾听状态。

### v0.6 麦克风录音与语音识别

状态：未开始。

要做：

- 申请 Android 麦克风权限。
- 实现点击录音或按住说话。
- 接入语音识别。
- 将识别文本送入聊天流程。

验收：

- 手机可以录音。
- 录音可以转文字。
- 识别结果能进入聊天流程。

### v0.7 对话模型、人设和记忆

状态：未开始。

要做：

- 将 `character.md` 转成系统提示词。
- 接入对话模型。
- 接入 TTS。
- 建立简单记忆。
- 让回复类型映射到视频状态。

验收：

- Luna 能按人设回复。
- 回复语气温柔、简短、有陪伴感。
- 视频状态、语音和伪口型能配合对话流程。

### v0.8 iOS 自用版本

状态：未开始。

要做：

- 配置 iOS Capacitor 项目。
- 使用 Xcode 真机运行。
- 测试麦克风、音频和视频 loop 性能。

注意：

- iOS 自用安装比 Android 麻烦。
- 长期自用可能需要 Apple Developer 账号或 TestFlight。

### v0.9 树莓派屏幕版本

状态：未开始。

要做：

- 用 Chromium 全屏运行 Web 版本。
- 测试视频 loop 播放性能。
- 接入麦克风和扬声器。
- 配置开机自启动。

验收：

- 树莓派开机后自动显示 Luna。
- 能播放语音并切换说话状态。
- 基础交互稳定。

## 资产状态

### 当前图片资产

- 主形象：`assets/avatar/主形象_半身像_01.png`
- 默认微笑：`assets/expressions/smile.png`
- 开心鼓励：`assets/expressions/happy.png`
- 温柔倾听：`assets/expressions/listening.jpeg`
- 思考好奇：`assets/expressions/thinking.jpeg`

### 表情映射

表情映射记录在 `assets/expressions/manifest.json`。

- `default` -> `smile.png`
- `happy` -> `happy.png`
- `listening` -> `listening.jpeg`
- `thinking` -> `thinking.jpeg`
- `comforting` -> 暂时复用 `listening`

### 后续资产任务

- 统一表情图片格式，优先 `png` 或 `webp`。
- 统一表情图片比例和角色位置。
- 补充 `comforting` 安抚关心表情。
- 整理当前已有视频素材。
- 为 `idle`、`listening`、`thinking`、`speaking`、`happy`、`comforting` 建立视频池。
- 后续再评估是否需要 Live2D。

## 关键决策记录

- `2026-05-04`：建立 Aeris v0.1 形象设计文档。
- `2026-05-05`：生成主形象和 4 个基础表情。
- `2026-05-05`：确认图生视频不作为主路线，只作为动效参考。
- `2026-05-05`：确认主路线改为现成 Live2D 模型 + 音频驱动口型。
- `2026-05-05`：确认优先做 Android 自用混合 App，而不是纯网页或纯原生 App。
- `2026-05-05`：确认长期体系名保留为 Aeris，当前角色名改为 Luna。
- `2026-05-06`：短期主路线调整为视频 loop 素材库 + 状态机 + TTS + 伪口型/说话状态，Live2D 降级为长期可选升级。

## 项目文档

- [实现计划](./plan.md)：项目阶段、任务和验收标准。
- [Live2D 实现路线](./live2d-plan.md)：长期可选升级参考，不作为当前短期主路线。
- [网页验证方案](./web-validation.md)：WebView / 网页验证目标和树莓派迁移方向。
- [角色设定](./character.md)：Luna 的身份、性格、视觉气质、说话风格。
- [AI 提示词](./prompts.md)：主形象、表情和视频参考提示词。
- [图片评审记录](./notes/image-review.md)：每轮图片生成结果和评价。
- [资产说明](./assets/README.md)：图片、表情、视频参考素材目录说明。

## 待确认问题

- 每个状态第一批需要几条视频 loop？
- 视频比例先按 `9:16` 竖屏，还是按 App 角色区域比例？
- Android App 是否先只做本地测试，不接云端服务？
- TTS 先用本地音频测试，还是直接接入真实 TTS？
- 语音识别优先使用云端，还是后续再研究本地方案？
- iOS 是否放到 Android 原型稳定之后再做？
- 树莓派屏幕预计是横屏还是竖屏？

## 今日/最近可执行

最小下一步：

1. 整理 `assets/video-references/` 下已有视频。
2. 新建视频状态清单，定义 `idle`、`listening`、`thinking`、`speaking`、`happy`、`comforting`。
3. 创建 `dev_0.2`，开始 Android 混合 App 原型。

