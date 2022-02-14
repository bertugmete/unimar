import React from 'react'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'

const Navbar = () => {
  return (
    <div className="nav-bar">
      <MobileNavigation />
      <Navigation />
    </div>
  )
}

export default Navbar
