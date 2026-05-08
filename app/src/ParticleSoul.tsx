import { useEffect, useRef } from 'react'
import type { LunaState } from './lunaState'
import {
  agitate,
  calmDown,
  changeMood,
  clamp,
  colorString,
  mixColor,
  soulConfig,
  soulRuntime,
} from './particleSoulControls'

type ParticleSoulProps = {
  state: LunaState
  isRecording: boolean
}

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  energy: number
  angleSeed: number
  homeAngle: number
  homeDistance: number
}

const stateMood: Record<LunaState, string> = {
  idle: '#46d7ff',
  listening: '#74f1ff',
  thinking: '#6f9dff',
  speaking: '#9eefff',
  happy: '#ffd28f',
  comforting: '#7fa2ff',
}

function smoothstep(value: number) {
  return value * value * (3 - 2 * value)
}

function hash2(x: number, y: number, seed: number) {
  const value = Math.sin(x * 127.1 + y * 311.7 + seed * 74.7) * 43758.5453123
  return value - Math.floor(value)
}

function valueNoise(x: number, y: number, seed: number) {
  const x0 = Math.floor(x)
  const y0 = Math.floor(y)
  const xf = x - x0
  const yf = y - y0
  const u = smoothstep(xf)
  const v = smoothstep(yf)

  const a = hash2(x0, y0, seed)
  const b = hash2(x0 + 1, y0, seed)
  const c = hash2(x0, y0 + 1, seed)
  const d = hash2(x0 + 1, y0 + 1, seed)
  const x1 = a + (b - a) * u
  const x2 = c + (d - c) * u

  return x1 + (x2 - x1) * v
}

function fieldDirection(x: number, y: number, time: number, seed: number) {
  const scale = 0.00145
  const flowA = valueNoise(x * scale + time * 0.018, y * scale - time * 0.012, seed)
  const flowB = valueNoise(x * scale * 1.35 - time * 0.01, y * scale * 1.35 + time * 0.016, seed + 19)
  const angle = flowA * Math.PI * 2 + flowB * Math.PI * 0.55

  return {
    x: Math.cos(angle),
    y: Math.sin(angle),
  }
}

function createParticles(count: number, width: number, height: number) {
  const particles: Particle[] = []
  const centerX = width / 2
  const centerY = height / 2
  const maxRadius = Math.min(width, height) * 0.28

  for (let index = 0; index < count; index += 1) {
    const angle = Math.random() * Math.PI * 2
    const distance = Math.pow(Math.random(), 0.72) * maxRadius
    particles.push({
      x: centerX + Math.cos(angle) * distance,
      y: centerY + Math.sin(angle) * distance,
      vx: 0,
      vy: 0,
      radius: 0.18 + Math.random() * 0.48,
      energy: 0.25 + Math.random() * 0.62,
      angleSeed: Math.random() * 1000,
      homeAngle: angle,
      homeDistance: distance,
    })
  }

  return particles
}

function resizeCanvas(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
  const ratio = Math.min(window.devicePixelRatio || 1, 2)
  const width = window.innerWidth
  const height = window.innerHeight

  canvas.width = Math.floor(width * ratio)
  canvas.height = Math.floor(height * ratio)
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`
  context.setTransform(ratio, 0, 0, ratio, 0, 0)

  return { width, height }
}

export function ParticleSoul({ state, isRecording }: ParticleSoulProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const stateRef = useRef(state)
  const recordingRef = useRef(isRecording)

  useEffect(() => {
    stateRef.current = state
    changeMood(stateMood[state])

    if (state === 'speaking') {
      agitate(0.72)
    } else if (!recordingRef.current) {
      calmDown()
    }
  }, [state])

  useEffect(() => {
    recordingRef.current = isRecording
    if (isRecording) {
      agitate(0.52)
      changeMood(stateMood.listening)
    } else if (stateRef.current !== 'speaking') {
      calmDown()
    }
  }, [isRecording])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }

    const context = canvas.getContext('2d')
    if (!context) {
      return
    }

    let { width, height } = resizeCanvas(canvas, context)
    let particles = createParticles(Math.round(Math.min(2600, Math.max(1500, (width * height) / 430))), width, height)
    let animationFrame = 0
    let lastTime = performance.now()

    const handleResize = () => {
      ;({ width, height } = resizeCanvas(canvas, context))
      particles = createParticles(Math.round(Math.min(2600, Math.max(1500, (width * height) / 430))), width, height)
    }

    window.addEventListener('resize', handleResize)

    const draw = (now: number) => {
      const delta = Math.min(32, now - lastTime) / 16.67
      lastTime = now

      const time = now * 0.001
      const centerX = width / 2
      const centerY = height / 2
      const breathPhase = Math.sin((time / soulConfig.breathCycleSeconds) * Math.PI * 2)
      const inhale = (1 - breathPhase) * 0.5
      const exhale = (1 + breathPhase) * 0.5
      const activeState = stateRef.current

      soulRuntime.agitation += (soulRuntime.targetAgitation - soulRuntime.agitation) * 0.032
      soulRuntime.color = mixColor(soulRuntime.color, soulRuntime.targetColor, 0.035)

      context.globalCompositeOperation = 'source-over'
      context.fillStyle = 'rgba(1, 4, 14, 0.18)'
      context.fillRect(0, 0, width, height)

      const backgroundGradient = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, Math.max(width, height) * 0.72)
      backgroundGradient.addColorStop(0, 'rgba(18, 31, 58, 0.1)')
      backgroundGradient.addColorStop(0.42, 'rgba(6, 11, 28, 0.035)')
      backgroundGradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
      context.fillStyle = backgroundGradient
      context.fillRect(0, 0, width, height)

      context.globalCompositeOperation = 'lighter'

      const fieldStrength = soulConfig.wobbleStrength * (0.3 + soulRuntime.agitation * 0.34)
      const breathingPull = (inhale - 0.5) * 0.012
      const outwardPulse = (exhale - 0.5) * 0.008
      const stateGravity = activeState === 'listening' ? 0.012 : activeState === 'comforting' ? 0.008 : 0.004
      const rotationBias = activeState === 'thinking' ? 0.009 : 0.003

      particles.forEach((particle) => {
        const dx = particle.x - centerX
        const dy = particle.y - centerY
        const distance = Math.hypot(dx, dy) || 1
        const normalizedX = dx / distance
        const normalizedY = dy / distance
        const field = fieldDirection(particle.x, particle.y, time, particle.angleSeed)
        const tangentX = -normalizedY
        const tangentY = normalizedX
        const homeDistance = particle.homeDistance * (0.9 + exhale * 0.05)
        const homeX = centerX + Math.cos(particle.homeAngle + time * 0.014) * homeDistance
        const homeY = centerY + Math.sin(particle.homeAngle + time * 0.014) * homeDistance

        particle.vx += field.x * fieldStrength * delta
        particle.vy += field.y * fieldStrength * delta
        particle.vx += (homeX - particle.x) * 0.00135 * delta
        particle.vy += (homeY - particle.y) * 0.00135 * delta
        particle.vx += -normalizedX * (stateGravity + breathingPull) * delta
        particle.vy += -normalizedY * (stateGravity + breathingPull) * delta
        particle.vx += normalizedX * outwardPulse * delta
        particle.vy += normalizedY * outwardPulse * delta
        particle.vx += tangentX * rotationBias * delta
        particle.vy += tangentY * rotationBias * delta

        if (activeState === 'speaking' || recordingRef.current) {
          const tremor = valueNoise(time * 2.2, particle.angleSeed * 0.01, 42) - 0.5
          particle.vx += normalizedX * tremor * soulRuntime.agitation * 0.07
          particle.vy += normalizedY * tremor * soulRuntime.agitation * 0.07
        }

        particle.vx *= 0.88
        particle.vy *= 0.88
        particle.x += particle.vx * delta
        particle.y += particle.vy * delta

        if (distance > Math.min(width, height) * 0.48) {
          particle.vx -= normalizedX * 0.16
          particle.vy -= normalizedY * 0.16
        }

        const alpha = clamp(0.045 + particle.energy * 0.18 + exhale * 0.1 - inhale * 0.04 + soulRuntime.agitation * 0.06, 0.025, 0.46)
        const radius = particle.radius * (0.85 + exhale * 0.26 + soulRuntime.agitation * 0.08)
        const cyanShift = mixColor(soulRuntime.color, { r: 128, g: 240, b: 255 }, 0.34 + particle.energy * 0.22)
        const gradientRadius = radius * 3.8
        const gradient = context.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, gradientRadius)
        gradient.addColorStop(0, colorString({ r: 245, g: 252, b: 255 }, alpha))
        gradient.addColorStop(0.32, colorString(cyanShift, alpha * 0.62))
        gradient.addColorStop(1, colorString({ r: 12, g: 35, b: 96 }, 0))

        context.fillStyle = gradient
        context.beginPath()
        context.arc(particle.x, particle.y, gradientRadius, 0, Math.PI * 2)
        context.fill()
      })

      const coreRadius = Math.min(width, height) * (0.16 + exhale * 0.018 + soulRuntime.agitation * 0.012)
      const coreGradient = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, coreRadius)
      coreGradient.addColorStop(0, colorString({ r: 248, g: 253, b: 255 }, 0.28 + exhale * 0.18))
      coreGradient.addColorStop(0.34, colorString(soulRuntime.color, 0.18 + exhale * 0.18))
      coreGradient.addColorStop(1, colorString(soulRuntime.color, 0))
      context.fillStyle = coreGradient
      context.beginPath()
      context.arc(centerX, centerY, coreRadius, 0, Math.PI * 2)
      context.fill()

      animationFrame = window.requestAnimationFrame(draw)
    }

    context.fillStyle = '#01040e'
    context.fillRect(0, 0, width, height)
    animationFrame = window.requestAnimationFrame(draw)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="particle-soul-canvas" aria-label="Luna AI 灵魂粒子能量体" />
}

