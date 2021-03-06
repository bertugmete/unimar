import React, { useRef, useEffect } from 'react'
import NavLinks from './NavLinks'
import HamburgerSvg from './assets/images/hamburger.svg'
import CloseSvg from './assets/images/close.svg'
import { useState } from 'react'
import classnames from 'classnames'
import Language from '../../components/language/Language'
import Logo from '../../components/logo/Logo'

const MobileNavigation = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])
  return (
    <nav
      ref={ref}
      className={classnames('mobile-navigation', {
        'mobile-navigation--open': open
      })}
      onBlur={() => setOpen(false)}
    >
      {open ? (
        <img
          src={CloseSvg}
          width={32}
          height={32}
          alt="close"
          className="mobile-navigation__close"
          onClick={() => setOpen(!open)}
        />
      ) : (
        <img
          width={32}
          height={32}
          src={HamburgerSvg}
          alt="Hamburger"
          className="mobile-navigation__hamburger"
          onClick={() => setOpen(!open)}
        />
      )}

      {open && <NavLinks />}
      {open && <Language />}
      {open && <Logo />}
    </nav>
  )
}

export default MobileNavigation
