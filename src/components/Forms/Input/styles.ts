import { styled } from '../../../styles'

export const InputWrapper = styled.div`
  margin-bottom: 1rem;
`

export const InputStyled = styled.input`
  border: 1px solid #eee;
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background-color: #eee;
  transition: 0.2s;

  &:hover,
  &:focus {
    outline: none;
    border-color: #fb1;
    background-color: white;
    box-shadow: 0 0 0 3px #fea;
  }
`

export const InputLabel = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: 0.5rem;
`

export const InputError = styled.p`
  color: #f31;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`
