import React from 'react'
import NavLinks from './NavLinks'
import Language from '../../components/language/Language'
import Logo from '../../components/logo/Logo'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLinks />
      <Language />
    </nav>
  )
}

export default Navigation
