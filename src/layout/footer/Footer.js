import React from 'react'
import PhoneSvg from './assets/images/phone.svg'
import FacebookSvg from './assets/images/facebook.svg'
import LocationSvg from './assets/images/location.svg'
import MailSvg from './assets/images/mail.svg'
import TwitterSvg from './assets/images/twitter.svg'
import YoutubeSvg from './assets/images/youtube.svg'
import { Link } from 'react-router-dom'
import NavLinks from '../navbar/NavLinks'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__information">
        <div className="footer__information__title">
          <span>UNIMAR TURİZM</span>
        </div>
        <ul className="footer__information__list">
          <li className="footer__information__list__item">
            <span className="footer__information__list__item__image">
              <img width={24} height={24} src={PhoneSvg} alt="phone" />
            </span>
            <a href="tel:+905553509384" className="footer__information__list__item__text">
              +905553509384
            </a>
          </li>
          <li className="footer__information__list__item">
            <span className="footer__information__list__item__image">
              <img width={24} height={24} src={MailSvg} alt="mail" />
            </span>
            <a
              href="mailto:info@unimartravel.com"
              className="footer__information__list__item__text"
            >
              info@unimartravel.com
            </a>
          </li>
          <li className="footer__information__list__item">
            <span className="footer__information__list__item__image">
              <img width={24} height={24} src={LocationSvg} alt="location" />
            </span>
            <span className="footer__information__list__item__text">
              Tepe, Ulusal Egemenlik Cd. No:4, 48700 Marmaris/Muğla
            </span>
          </li>
          <li className="footer__information__social-media">
            <ul className="footer__information__social-media__items">
              <li className="footer__information__social-media__items__item">
                <span>
                  <img width={36} height={36} src={YoutubeSvg} alt="youtube" />
                </span>
              </li>
              <li className="footer__information__social-media__items__item">
                <span>
                  <img width={36} height={36} src={TwitterSvg} alt="twitter" />
                </span>
              </li>
              <li className="footer__information__social-media__items__item">
                <span>
                  <img width={36} height={36} src={FacebookSvg} alt="facebook" />
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <NavLinks wrapperClassName="footer__navigation" />
    </footer>
  )
}

export default Footer
