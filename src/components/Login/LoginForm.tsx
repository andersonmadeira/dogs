import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { login } from '../../services/pets'
import Button from '../Forms/Button/Button'
import Input from '../Forms/Input/Input'

const LoginForm: React.FC = () => {
  const { url } = useRouteMatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    login(username, password).then((res) => console.log(res.data))
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="User" type="text" name="username" />
        <Input label="Password" type="password" name="password" />
        <Button disabled>Entrar</Button>
      </form>
      <Link to={`${url}/register`}>Register</Link>
    </section>
  )
}

export default LoginForm
