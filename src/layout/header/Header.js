import React from 'react'
import { Link } from 'react-router-dom'
import TurkishPng from './assets/images/turkey.png'
import RussiaPng from './assets/images/russia.png'
import England from './assets/images/england.png'
import './assets/Header.scss'

const Header = () => {
  return (
    <div className="header">
      <nav className="header__container">
        <ul className="header__items">
          <Link to="/daily-tours" className="header__items__item">
            GÜNLÜK TURLAR
          </Link>
          <Link to="/boats" className="header__items__item">
            TEKNELER
          </Link>
          <Link to="/transfer" className="header__items__item">
            TRANSFER
          </Link>
          <Link to="/rent-a-car" className="header__items__item">
            KİRALIK ARAÇ
          </Link>
          <Link to="/about" className="header__items__item">
            HAKKIMIZDA
          </Link>
          <Link to="/contact" className="header__items__item">
            İLETİŞİM
          </Link>
        </ul>
        <div className="header__languages">
          <div className="header__languages__item">
            <img width={24} height={24} src={TurkishPng} alt="turkish" />
          </div>
          <div className="header__languages__item">
            <img width={24} height={24} src={England} alt="turkish" />
          </div>
          <div className="header__languages__item">
            <img width={24} height={24} src={RussiaPng} alt="turkish" />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
