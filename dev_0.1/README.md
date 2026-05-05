# Aeris / Luna Character v0.1

这是 Aeris 项目的 v0.1 版本首页，用于 Luna 角色的项目说明、进度管理和下一步决策。

Luna 是当前版本中面向宝宝成长陪伴场景的智能陪伴助手形象。她的定位是温柔、可靠、有亲和力的小姐姐，会陪宝宝聊天、回应情绪、鼓励表达。

## 命名约定

- `Aeris`：长期项目/体系名称，后续可以承载多个角色、多个版本或多个具体产品。
- `Luna`：当前 v0.1 版本的具体角色名称，也是当前自用 App 原型的角色名。
- 当前目录仍保留在 `Aeris_Character` 下，但文档中具体角色统一称为 `Luna`。

## 当前结论

当前主路线已经确定：**先做 Android 自用混合 App，再在 App 的 WebView 中加载现成 Live2D 模型，用 TTS 音频驱动口型同步。**

暂时不直接把现有 Luna 静态图拆成 Live2D 模型。现有图片继续作为未来专属模型的视觉参考。图生视频只作为动效参考，不作为主实现路线。

## 当前状态

- 项目阶段：`v0.1 形象与方向沉淀`
- 当前重点：进入 `v0.2 Android 混合 App 原型`
- 主实现路线：`Capacitor / Ionic + React + WebView + Live2D`
- 动态角色路线：现成已绑定 Live2D 模型优先
- 口型路线：Web Audio API 分析 TTS 音量，驱动 `ParamMouthOpenY`
- 首要平台：Android 手机自用
- 后续平台：iOS 自用、树莓派屏幕

## 下一步任务

1. 找一个现成已绑定 Live2D 模型。
2. 确认模型授权、文件结构和参数名。
3. 初始化 Android 混合 App 原型。
4. 在 Android 手机上跑出一个空 App 页面。
5. 在 WebView 中加载 Live2D 模型。
6. 准备一段本地音频，测试播放。
7. 用音频音量驱动 `ParamMouthOpenY`。

## 阶段看板

### v0.1 形象与方向沉淀

状态：进行中，基本完成。

已完成：

- 建立角色定位。
- 生成主形象方向。
- 生成 4 个基础表情。
- 确定 Live2D + App/WebView 为主路线。
- 建立 `plan.md`、`live2d-plan.md`、`web-validation.md`。

剩余：

- 补充模型选择记录。
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

### v0.3 Live2D 模型加载

状态：未开始。

要做：

- 准备现成 Live2D 模型。
- 确认 `model3.json` 和模型资源。
- 加载模型到 WebView。
- 测试待机、眨眼、表情切换。

验收：

- App 中能稳定显示 Live2D 模型。
- 可以切换至少 2 个状态或表情。
- 安卓手机上性能可接受。

### v0.4 TTS 播放与口型同步

状态：未开始。

要做：

- 准备本地测试音频。
- 播放音频。
- 用 Web Audio API 获取音量。
- 将音量映射到 `ParamMouthOpenY`。
- 增加平滑，让嘴巴开合更自然。

验收：

- 播放音频时嘴巴随声音开合。
- 静音时嘴巴闭合。
- 效果适合实时陪伴对话。

### v0.5 麦克风录音与语音识别

状态：未开始。

要做：

- 申请 Android 麦克风权限。
- 实现点击录音或按住说话。
- 接入语音识别。
- 将识别文本送入对话流程。

验收：

- 手机可以录音。
- 录音可以转文字。
- 识别结果能进入聊天流程。

### v0.6 对话模型、人设和记忆

状态：未开始。

要做：

- 将 `character.md` 转成系统提示词。
- 接入对话模型。
- 接入 TTS。
- 建立简单记忆。
- 让回复类型映射到 Live2D 状态。

验收：

- Luna 能按人设回复。
- 回复语气温柔、简短、有陪伴感。
- 语音、口型、表情能配合对话状态。

### v0.7 iOS 自用版本

状态：未开始。

要做：

- 配置 iOS Capacitor 项目。
- 使用 Xcode 真机运行。
- 测试麦克风、音频和 Live2D 性能。

注意：

- iOS 自用安装比 Android 麻烦。
- 长期自用可能需要 Apple Developer 账号或 TestFlight。

### v0.8 树莓派屏幕版本

状态：未开始。

要做：

- 用 Chromium 全屏运行 Web 版本。
- 测试 Live2D 性能。
- 接入麦克风和扬声器。
- 配置开机自启动。

验收：

- 树莓派开机后自动显示 Luna。
- 能播放语音并驱动口型。
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
- 找一个可测试的现成 Live2D 模型。
- 记录模型授权和参数。

## 关键决策记录

- `2026-05-04`：建立 Aeris v0.1 形象设计文档。
- `2026-05-05`：生成主形象和 4 个基础表情。
- `2026-05-05`：确认图生视频不作为主路线，只作为动效参考。
- `2026-05-05`：确认主路线改为现成 Live2D 模型 + 音频驱动口型。
- `2026-05-05`：确认优先做 Android 自用混合 App，而不是纯网页或纯原生 App。
- `2026-05-05`：确认长期体系名保留为 Aeris，当前角色名改为 Luna。

## 项目文档

- [实现计划](./plan.md)：项目阶段、任务和验收标准。
- [Live2D 实现路线](./live2d-plan.md)：现成模型、Web Audio API 和自动口型同步方案。
- [网页验证方案](./web-validation.md)：WebView / 网页验证目标和树莓派迁移方向。
- [角色设定](./character.md)：Luna 的身份、性格、视觉气质、说话风格。
- [AI 提示词](./prompts.md)：主形象、表情和视频参考提示词。
- [图片评审记录](./notes/image-review.md)：每轮图片生成结果和评价。
- [资产说明](./assets/README.md)：图片、表情、视频参考素材目录说明。

## 待确认问题

- 现成 Live2D 模型从哪里获取：淘宝、免费开源，还是 SDK 示例模型？
- 模型授权是否允许自用、网页展示、二次开发和未来商业化？
- Android App 是否先只做本地测试，不接云端服务？
- TTS 先用本地音频测试，还是直接接入真实 TTS？
- 语音识别优先使用云端，还是后续再研究本地方案？
- iOS 是否放到 Android 原型稳定之后再做？
- 树莓派屏幕预计是横屏还是竖屏？

## 今日/最近可执行

最小下一步：

1. 找 1 个可测试的 Live2D 模型。
2. 记录模型来源、授权、文件结构。
3. 创建 `dev_0.2`，开始 Android 混合 App 原型。

