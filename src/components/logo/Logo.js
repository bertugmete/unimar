import React from 'react'
import LogoPng from './assets/images/logo.png'
import { Link } from 'react-router-dom'

const Logo = ({ className }) => {
  return (
    <Link to="/" className={className}>
      <img src={LogoPng} alt="logo" />
    </Link>
  )
}

export default Logo
