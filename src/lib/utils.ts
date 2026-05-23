import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const easing = {
  outExpo: [0.16, 1, 0.3, 1] as [number, number, number, number],
  inOutExpo: [0.87, 0, 0.13, 1] as [number, number, number, number],
  spring: { type: 'spring', stiffness: 100, damping: 20 } as const,
}
