import React from 'react'
import EnglishPng from './images/england.png'
import TurkishPng from './images/turkey.png'
import RussianPng from './images/russia.png'
import { useTranslation } from 'react-i18next'

const Language = () => {
  const { i18n } = useTranslation()
  const handleOnChangeLanguage = (language) => {
    i18n.changeLanguage(language)
  }
  return (
    <div className="languages">
      <div className="languages__item icon__wrapper" onClick={() => handleOnChangeLanguage('tr')}>
        <img width={24} height={24} src={TurkishPng} alt="turkish" />
      </div>
      <div className="languages__item icon__wrapper" onClick={() => handleOnChangeLanguage('en')}>
        <img width={24} height={24} src={EnglishPng} alt="english" />
      </div>
      <div className="languages__item icon__wrapper" onClick={() => handleOnChangeLanguage('ru')}>
        <img width={24} height={24} src={RussianPng} alt="russian" />
      </div>
    </div>
  )
}

export default Language
