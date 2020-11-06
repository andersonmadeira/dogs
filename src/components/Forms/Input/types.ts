import { ChangeEvent } from 'react'

export type InputProps = {
  label: string
  name: string
  type: string
  value: string
  error: string | null
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur: () => void
}
