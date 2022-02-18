import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Header from './layout/header/Header'
import JeepSafari from './pages/JeepSafari'
import Whatsapp from "./components/whatsapp/Whatsapp";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Whatsapp />
        <Switch>
          <Route exact path="/" render={HomePage} />
          <Route to="/jeep-safari" render={JeepSafari} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  )
}

export default App
