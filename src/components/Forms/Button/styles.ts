import { styled } from '../../../styles'

export const ButtonStyled = styled.button`
  font-size: 1rem;
  font-family: ${(props) => props.theme.typography.primary};
  border-radius: 0.4rem;
  border: none;
  cursor: pointer;
  background-color: #fb1;
  color: #764701;
  min-width: 8rem;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`
