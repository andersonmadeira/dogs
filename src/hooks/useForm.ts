import React from 'react'

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
  onChange: (e: ChangeEvent<HTMLElement>) => void
  error: string
  validate: () => boolean
  onBlur: () => void
}

export const useFormField = (type?: ValidationTypes): UseFormType => {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState<string | null>(null)

  const validate = (value: string): boolean => {
    if (type === false) return true
    if (value.length === 0) {
      setError('Preencha um valor.')
      return false
    } else if (type && Validations[type] && !Validations[type].regex.test(value)) {
      setError(Validations[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  const onChange = (event: ChangeEvent<HTMLElement>) => {
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
