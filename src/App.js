import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Header from './layout/header/Header'

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={HomePage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  )
}

export default App
