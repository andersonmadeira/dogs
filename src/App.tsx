import { ThemeProvider } from 'emotion-theming'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import { GlobalStyles, defaultTheme } from './styles'

const App: React.FC = () => (
  <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  </ThemeProvider>
)

export default App
