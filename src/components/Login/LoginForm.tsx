import React, { useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { useFormField } from '../../hooks'
import { isAuthenticated } from '../../services/auth'
import { getUser, login } from '../../services/pets'
import { Button, Input } from '../Forms'

const LoginForm: React.FC = () => {
  const { url } = useRouteMatch()
  const username = useFormField()
  const password = useFormField()

  const userIsAuthenticated = isAuthenticated()

  useEffect(() => {
    if (userIsAuthenticated) {
      getUser().then((response) => {
        console.log('User:', response.data)
      })
    }
  }, [userIsAuthenticated])

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      login(username.value, password.value).then((res) => console.log(res.data))
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="User" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to={`${url}/register`}>Register</Link>
    </section>
  )
}

export default LoginForm
