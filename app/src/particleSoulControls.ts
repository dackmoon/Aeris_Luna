type Rgb = {
  r: number
  g: number
  b: number
}

export const soulConfig = {
  breathCycleSeconds: 4.8,
  wobbleStrength: 0.28,
  energyColor: '#48d8ff',
}

export const soulRuntime = {
  agitation: 0,
  targetAgitation: 0,
  color: hexToRgb(soulConfig.energyColor),
  targetColor: hexToRgb(soulConfig.energyColor),
}

export function agitate(intensity = 0.65) {
  soulRuntime.targetAgitation = clamp(intensity, 0, 1.4)
}

export function calmDown() {
  soulRuntime.targetAgitation = 0
}

export function changeMood(color: string) {
  soulConfig.energyColor = color
  soulRuntime.targetColor = hexToRgb(color)
}

export function hexToRgb(hex: string): Rgb {
  const normalized = hex.replace('#', '')
  const value = Number.parseInt(
    normalized.length === 3
      ? normalized
          .split('')
          .map((char) => char + char)
          .join('')
      : normalized,
    16,
  )

  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  }
}

export function mixColor(current: Rgb, target: Rgb, amount: number): Rgb {
  return {
    r: current.r + (target.r - current.r) * amount,
    g: current.g + (target.g - current.g) * amount,
    b: current.b + (target.b - current.b) * amount,
  }
}

export function colorString(color: Rgb, alpha: number) {
  return `rgba(${Math.round(color.r)}, ${Math.round(color.g)}, ${Math.round(color.b)}, ${alpha})`
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

