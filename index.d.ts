// Type definitions for github-reserved-names 1.1.7
// Project: https://github.com/Mottie/github-reserved-names
// Definitions by: Kid <https://github.com/kidonng>

interface oddball {
  reserved: boolean
  taken: boolean
  typical: boolean
  included: boolean
  redirect?: string
}

export const all: string[]
export function check(name: string): boolean
export function oddballs(): string[]
export function oddballs(name: string): oddball | string[]
