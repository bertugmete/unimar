import React from 'react'
import NavLinks from './NavLinks'
import Language from '../../components/language/Language'

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLinks />
      <Language />
    </nav>
  )
}

export default Navigation
