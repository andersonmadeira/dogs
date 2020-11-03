import React from 'react'
import { Container } from '../../styles'
import { ReactComponent as DogIcon } from '../../assets/dog.svg'
import { HeaderStyled, MenuItemLogin, MenuItemLogo, Nav } from './styles'

const Header: React.FC = () => (
  <HeaderStyled>
    <Container>
      <Nav>
        <MenuItemLogo to="/" aria-label="Pets - Home">
          <DogIcon />
        </MenuItemLogo>
        <MenuItemLogin to="/login">Login / Create</MenuItemLogin>
      </Nav>
    </Container>
  </HeaderStyled>
)

export default Header
