import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { login } from '../../services/pets'

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
        <input type="text" value={username} onChange={({ target }) => setUsername(target.value)} />
        <input type="password" value={password} onChange={({ target }) => setPassword(target.value)} />
        <button>Entrar</button>
      </form>
      <Link to={`${url}/register`}>Register</Link>
    </section>
  )
}

export default LoginForm
