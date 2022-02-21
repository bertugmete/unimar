import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

const NavLinks = ({ wrapperClassName }) => {
  return (
    <ul className={classnames('nav-links', wrapperClassName)}>
      <Link to="/daily-tours" className="nav-links__item">
        GÜNLÜK TURLAR
      </Link>
      <Link to="/boats" className="nav-links__item">
        TEKNELER
      </Link>
      <Link to="/transfer" className="nav-links__item">
        TRANSFER
      </Link>
      <Link to="/rent-a-car" className="nav-links__item">
        KİRALIK ARAÇ
      </Link>
      <Link to="/about" className="nav-links__item">
        HAKKIMIZDA
      </Link>
      <Link to="/contact" className="nav-links__item">
        İLETİŞİM
      </Link>
    </ul>
  )
}

export default NavLinks
