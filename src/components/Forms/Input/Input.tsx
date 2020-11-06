import React from 'react'
import { InputProps } from './types'
import { InputError, InputStyled, InputWrapper, InputLabel } from './styles'

const Input: React.FC<InputProps> = ({ label, type, name, value, onChange, error, onBlur }: InputProps) => {
  return (
    <InputWrapper>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <InputStyled id={name} type={type} name={name} value={value} onChange={onChange} onBlur={onBlur} />
      {error && <InputError>{error}</InputError>}
    </InputWrapper>
  )
}

export default Input
