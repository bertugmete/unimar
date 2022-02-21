import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import { useTranslation } from 'react-i18next'

const NavLinks = ({ wrapperClassName }) => {
  const { t } = useTranslation()

  return (
    <ul className={classnames('nav-links', wrapperClassName)}>
      <Link to="/daily-tours" className="nav-links__item">
        {t('header.DailyTours')}
      </Link>
      <Link to="/boats" className="nav-links__item">
        {t('header.Boats')}
      </Link>
      <Link to="/transfer" className="nav-links__item">
        {t('header.Transfer')}
      </Link>
      <Link to="/rent-a-car" className="nav-links__item">
        {t('header.RentACar')}
      </Link>
      <Link to="/about" className="nav-links__item">
        {t('header.AboutUs')}
      </Link>
      <Link to="/contact" className="nav-links__item">
        {t('header.Contact')}
      </Link>
    </ul>
  )
}

export default NavLinks
