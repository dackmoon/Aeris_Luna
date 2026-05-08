export type LunaState = 'idle' | 'listening' | 'thinking' | 'speaking' | 'happy' | 'comforting'

export const stateLabels: Record<LunaState, string> = {
  idle: '待机',
  listening: '倾听',
  thinking: '思考',
  speaking: '说话',
  happy: '开心',
  comforting: '安抚',
}

export const stateDescriptions: Record<LunaState, string> = {
  idle: 'Luna 正在安静陪伴，等待下一次互动。',
  listening: '用户说话时进入倾听状态。',
  thinking: '等待模型回复时进入思考状态。',
  speaking: '播放 TTS 时进入说话状态。',
  happy: '积极反馈或鼓励宝宝时使用。',
  comforting: '宝宝难过或需要陪伴时使用。',
}

