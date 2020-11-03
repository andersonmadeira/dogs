import React from 'react'
import { ButtonProps } from './types'
import { ButtonStyled } from './styles'

const Button: React.FC<ButtonProps> = ({ children, disabled }: ButtonProps) => {
  return (
    <div>
      <ButtonStyled disabled={disabled}>{children}</ButtonStyled>
    </div>
  )
}

export default Button
