import React from 'react'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'
import './assets/styles/Navbar.scss'

const Navbar = () => {
  return (
    <div className="nav-bar">
      <MobileNavigation />
      <Navigation />
    </div>
  )
}

export default Navbar
