import React, { ChangeEvent } from 'react'

export type ValidationTypes = 'email' | undefined | false

const Validations = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Please enter a valid email',
  },
}

export type UseFormType = {
  value: string
  setValue: (val: string) => void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  error: string | null
  validate: () => boolean
  onBlur: () => void
}

export const useFormField = (type?: ValidationTypes): UseFormType => {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState<string | null>(null)

  const validate = (value: string): boolean => {
    if (type === false) return true

    if (value.length === 0) {
      setError('This field is required')
      return false
    }

    if (type && Validations[type] && !Validations[type].regex.test(value)) {
      setError(Validations[type].message)
      return false
    }

    setError(null)
    return true
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (error) validate(event.target.value)
    setValue(event.target.value)
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  }
}
