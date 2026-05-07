# Luna dev_0.2

这是 Luna 的阶段 1 Android 混合 App 原型。

目标是先跑通一个最小 App：竖屏移动端界面、角色展示区域、基础聊天区域和状态切换按钮。当前阶段不接真实对话模型、语音识别、长期记忆或精准口型。

## 技术栈

- React
- TypeScript
- Vite
- Capacitor
- Android WebView

## 依赖环境

建议新电脑准备这些环境：

- Node.js：建议 `20 LTS` 或更新的 LTS 版本。
- npm：随 Node.js 安装即可。
- Git：用于拉取项目。
- Android Studio：用于打开、编译和安装 Android 工程。
- Android SDK：通过 Android Studio 安装。
- JDK：建议使用 Android Studio 自带 JDK，或安装 `JDK 17`。

检查命令：

```bash
node -v
npm -v
git --version
java -version
```

Android Studio 里建议确认：

- 已安装 Android SDK。
- 已安装 Android SDK Platform-Tools。
- 已安装 Android SDK Build-Tools。
- 已开启手机开发者模式和 USB 调试。

## 当前功能

- Luna 角色占位展示区域。
- `idle`、`listening`、`thinking`、`speaking`、`happy`、`comforting` 六个状态按钮。
- 基础对话预览区域。
- 点击发送按钮会切换到 `thinking` 状态。

## 视频素材

第一批视频 loop 已放在：

```text
public/videos/
  idle/idle_01.mp4
  listening/listening_01.mp4
  thinking/thinking_01.mp4
  speaking/speaking_01.mp4
  happy/happy_01.mp4
  comforting/comforting_01.mp4
  manifest.json
```

当前临时映射：

- `idle` 使用原 `smile.mp4`。
- `listening` 使用原 `listening.mp4`。
- `thinking` 使用原 `thinking.mp4`。
- `happy` 使用原 `happy.mp4`。
- `speaking` 暂时复用 `happy.mp4`。
- `comforting` 暂时复用 `listening.mp4`。

## 命令

首次拉取项目后：

```bash
git clone git@github.com:dackmoon/Aeris_Luna.git
cd Aeris_Luna/dev_0.2
npm install
```

本地网页预览：

```bash
npm run dev
```

构建和检查：

```bash
npm run build
npm run lint
```

同步 Web 构建产物到 Android 工程：

```bash
npm run cap:sync
```

打开 Android Studio：

```bash
npm run android
```

如果修改了前端代码，准备重新安装到手机时，通常执行：

```bash
npm run build
npm run cap:sync
npm run android
```

然后在 Android Studio 里选择设备并点击 Run。

## Android 真机运行

1. 用 USB 连接 Android 手机。
2. 打开手机开发者模式。
3. 开启 USB 调试。
4. 执行 `npm run android` 打开 Android Studio。
5. 在 Android Studio 顶部选择手机设备。
6. 点击 Run 安装并启动 App。

如果 Android Studio 提示 Gradle 或 SDK 版本缺失，按提示安装即可。

## 常见问题

- 如果 `npm install` 失败，先确认 Node.js 版本是否为 LTS。
- 如果 Android Studio 找不到手机，检查 USB 调试和数据线模式。
- 如果前端改动没有出现在 App 中，重新执行 `npm run build` 和 `npm run cap:sync`。
- 如果 Android 工程异常，可以尝试重新打开 Android Studio，或执行 `npm run cap:sync` 后再打开。

## 阶段验收

- Android 手机上可以打开 Luna App。
- 页面布局适合手机竖屏。
- 可以显示角色区域和基础聊天区域。
- 可以点击按钮触发测试事件。

## 下一阶段

`dev_0.3` 会开始引入视频 loop 素材库，把当前占位角色区域替换成状态驱动的视频播放区域。

