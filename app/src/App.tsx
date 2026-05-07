import { useMemo, useState } from 'react'
import './App.css'

type LunaState = 'idle' | 'listening' | 'thinking' | 'speaking' | 'happy' | 'comforting'

const stateLabels: Record<LunaState, string> = {
  idle: '待机',
  listening: '倾听',
  thinking: '思考',
  speaking: '说话',
  happy: '开心',
  comforting: '安抚',
}

const stateDescriptions: Record<LunaState, string> = {
  idle: 'Luna 正在安静陪伴，等待下一次互动。',
  listening: '用户说话时进入倾听状态。',
  thinking: '等待模型回复时进入思考状态。',
  speaking: '播放 TTS 时进入说话状态。',
  happy: '积极反馈或鼓励宝宝时使用。',
  comforting: '宝宝难过或需要陪伴时使用。',
}

const stateVideos: Record<LunaState, string> = {
  idle: '/videos/idle/idle_01.mp4',
  listening: '/videos/listening/listening_01.mp4',
  thinking: '/videos/thinking/thinking_01.mp4',
  speaking: '/videos/speaking/speaking_01.mp4',
  happy: '/videos/happy/happy_01.mp4',
  comforting: '/videos/comforting/comforting_01.mp4',
}

const demoMessages = [
  { role: 'luna', text: '你好呀，我是 Luna。今天我会先陪你测试这个小 App。' },
  { role: 'user', text: '我们先看看状态切换。' },
  { role: 'luna', text: '好呀，点下面的按钮，我会切换到不同的陪伴状态。' },
]

function App() {
  const [currentState, setCurrentState] = useState<LunaState>('idle')

  const statusText = useMemo(() => stateDescriptions[currentState], [currentState])

  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Aeris / Luna v0.2</p>
          <h1>Luna</h1>
        </div>
        <span className="status-pill">{stateLabels[currentState]}</span>
      </header>

      <section className="stage-card" aria-label="Luna 角色展示区域">
        <div className={`luna-stage luna-stage--${currentState}`}>
          <div className="halo" />
          <video
            key={currentState}
            className="luna-video"
            src={stateVideos[currentState]}
            aria-label={`Luna ${stateLabels[currentState]}状态视频`}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div className="stage-copy">
          <h2>{stateLabels[currentState]}状态</h2>
          <p>{statusText}</p>
        </div>
      </section>

      <section className="controls-card" aria-label="状态测试按钮">
        <p className="section-title">状态机测试</p>
        <div className="state-grid">
          {(Object.keys(stateLabels) as LunaState[]).map((state) => (
            <button
              key={state}
              type="button"
              className={state === currentState ? 'active' : ''}
              onClick={() => setCurrentState(state)}
            >
              {stateLabels[state]}
            </button>
          ))}
        </div>
      </section>

      <section className="chat-card" aria-label="基础聊天区域">
        <p className="section-title">对话预览</p>
        <div className="messages">
          {demoMessages.map((message, index) => (
            <div key={`${message.role}-${index}`} className={`message ${message.role}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="input-row">
          <input value="先做 App 原型" readOnly aria-label="测试输入框" />
          <button type="button" onClick={() => setCurrentState('thinking')}>
            发送
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
