# 人形视频 Loop 实验归档

本文档封存 Luna 早期“人形角色 + 预生成视频 loop”的实验路线。

## 原始目标

使用 AI 生图和图生视频生成 Luna 的人形小姐姐形象，再通过状态机随机播放不同视频 loop：

- `idle`
- `listening`
- `thinking`
- `speaking`
- `happy`
- `comforting`

## 当前资产

相关资产仍保留在：

```text
assets/avatar/
assets/expressions/
assets/video-references/
app/public/videos/
```

其中 `app/public/videos/` 是当前 App 曾经直接使用的视频素材副本。

## 主要问题

该路线在真机验证中暴露出几个问题：

- 切换不同 mp4 时会出现短暂黑屏。
- Android WebView 中可能出现中心播放按钮。
- 不同动作之间缺少连续性。
- 人形角色一致性难保证。
- 继续生成更多视频会增加资产维护成本。
- 口型和文字/语音对应仍然很难自然。

## 归档结论

该路线不再作为短期主路线。

保留价值：

- 作为 Luna 早期视觉气质参考。
- 作为未来宣传图、头像或角色形象方向参考。
- 如果后续重新评估人形角色，可以从这些资产继续。

新的短期主路线见：

- [月光陪伴体计划](../moonlight-plan.md)
- [实现计划](../plan.md)

