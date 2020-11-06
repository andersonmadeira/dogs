import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { useFormField } from '../../hooks'
import { login } from '../../services/pets'
import Button from '../Forms/Button/Button'
import Input from '../Forms/Input/Input'

const LoginForm: React.FC = () => {
  const { url } = useRouteMatch()
  const username = useFormField()
  const password = useFormField()

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
