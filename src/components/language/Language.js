import React from 'react'
import EnglishPng from './images/england.png'
import TurkishPng from './images/turkey.png'
import RussianPng from './images/russia.png'

const Language = () => {
  return (
    <div className="languages">
      <div className="languages__item icon__wrapper">
        <img width={24} height={24} src={TurkishPng} alt="turkish" />
      </div>
      <div className="languages__item icon__wrapper">
        <img width={24} height={24} src={EnglishPng} alt="english" />
      </div>
      <div className="languages__item icon__wrapper">
        <img width={24} height={24} src={RussianPng} alt="russian" />
      </div>
    </div>
  )
}

export default Language
