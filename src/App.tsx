import { Global } from '@emotion/core'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import { globalStyles } from './global-styles'

const App: React.FC = () => (
  <BrowserRouter>
    <Global styles={globalStyles} />
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
    <Footer />
  </BrowserRouter>
)

export default App
