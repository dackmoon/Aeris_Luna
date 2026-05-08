import { useMemo, useState } from 'react'
import './App.css'
import { ParticleSoul } from './ParticleSoul'
import type { LunaState } from './lunaState'
import { stateDescriptions, stateLabels } from './lunaState'

const demoMessages = [
  { role: 'luna', text: '你好呀，我是 Luna。今天我会先陪你测试这个小 App。' },
  { role: 'user', text: '我们先看看状态切换。' },
  { role: 'luna', text: '好呀，点下面的按钮，我会切换到不同的陪伴状态。' },
]

function App() {
  const [currentState, setCurrentState] = useState<LunaState>('idle')
  const [isRecording, setIsRecording] = useState(false)
  const [isTranscriptOpen, setIsTranscriptOpen] = useState(false)

  const statusText = useMemo(() => stateDescriptions[currentState], [currentState])

  const handleMicClick = () => {
    setIsRecording((recording) => {
      const nextRecording = !recording
      setCurrentState(nextRecording ? 'listening' : 'thinking')
      return nextRecording
    })
  }

  return (
    <main className={`app-shell app-shell--${currentState}`}>
      <ParticleSoul state={currentState} isRecording={isRecording} />

      <div className="screen-vignette" />

      <header className="top-overlay">
        <div className="conversation-anchor">
          <button
            type="button"
            className="icon-button transcript-toggle"
            aria-expanded={isTranscriptOpen}
            aria-controls="transcript-panel"
            onClick={() => setIsTranscriptOpen((open) => !open)}
          >
            对话
          </button>

          {isTranscriptOpen && (
            <section id="transcript-panel" className="transcript-panel" aria-label="对话文字内容">
              <div className="transcript-header">
                <span>Luna</span>
                <small>{stateLabels[currentState]}中</small>
              </div>
              <div className="messages">
                {demoMessages.map((message, index) => (
                  <div key={`${message.role}-${index}`} className={`message ${message.role}`}>
                    {message.text}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <label className="state-select-label">
          <span>状态</span>
          <select
            value={currentState}
            className="state-select"
            onChange={(event) => {
              setIsRecording(false)
              setCurrentState(event.target.value as LunaState)
            }}
          >
            {(Object.keys(stateLabels) as LunaState[]).map((state) => (
              <option key={state} value={state}>
                {stateLabels[state]}
              </option>
            ))}
          </select>
        </label>
      </header>

      <section className="bottom-overlay" aria-label="语音输入区域">
        <div className={`waveform ${isRecording ? 'active' : ''}`} aria-hidden="true">
          {Array.from({ length: 18 }).map((_, index) => (
            <span key={index} style={{ animationDelay: `${index * 70}ms` }} />
          ))}
        </div>

        <p className="state-copy">{isRecording ? '正在听你说话...' : statusText}</p>

        <button
          type="button"
          className={`mic-button ${isRecording ? 'recording' : ''}`}
          aria-pressed={isRecording}
          onClick={handleMicClick}
        >
          <span className="mic-shape" />
          <strong>{isRecording ? '停止' : '按住说话'}</strong>
        </button>
      </section>
    </main>
  )
}

export default App
