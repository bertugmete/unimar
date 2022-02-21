import React from 'react'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import Logo from '../../components/logo/Logo'

const Header = () => {
  return (
    <div className="header">
      <Logo className="header__logo" />
      <Navbar />
    </div>
  )
}

export default Header
