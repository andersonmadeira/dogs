import React from 'react'
import { InputProps } from './types'
import { InputError, InputStyled, InputWrapper, InputLabel } from './styles'

const Input: React.FC<InputProps> = ({ label, type, name }: InputProps) => {
  return (
    <InputWrapper>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <InputStyled id={name} type={type} name={name} />
      <InputError>something went wrong</InputError>
    </InputWrapper>
  )
}

export default Input
