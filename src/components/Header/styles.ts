import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import userIcon from '../../assets/user.svg'

export const HeaderStyled = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 2;
  background-color: white;
  top: 0;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`

export const MenuItemLogo = styled(Link)`
  padding: 0.5rem 0;
`

export const MenuItemLogin = styled(Link)`
  color: #333;
  display: flex;
  align-items: center;

  &::after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 17px;
    background: url(${userIcon}) no-repeat center center;
    margin-left: 0.5rem;
    position: relative;
    top: -1px;
  }
`
