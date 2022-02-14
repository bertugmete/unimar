import React from 'react'
import NavLinks from './NavLinks'
import Language from '../../components/language/Language'
import './assets/styles/Navigation.scss'

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLinks />
      <Language />
    </nav>
  )
}

export default Navigation
