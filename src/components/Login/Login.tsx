import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import { Container } from '../../global-styles'
import LoginForm from './LoginForm'
import LoginRegister from './LoginRegister'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'

const Login: React.FC = () => {
  const { path } = useRouteMatch()

  return (
    <Container>
      <Switch>
        <Route path={`${path}/register`}>
          <LoginRegister />
        </Route>
        <Route path={`${path}/password-lost`}>
          <LoginPasswordLost />
        </Route>
        <Route path={`${path}/password-reset`}>
          <LoginPasswordReset />
        </Route>
        <Route path={`${path}`}>
          <LoginForm />
        </Route>
      </Switch>
    </Container>
  )
}

export default Login
