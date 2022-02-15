import React from 'react'
import EnglishPng from './images/england.png'
import TurkishPng from './images/turkey.png'
import RussianPng from './images/russia.png'

const Language = () => {
  return (
    <div className="languages">
      <div className="languages__item">
        <img width={18} height={18} src={TurkishPng} alt="turkish" />
      </div>
      <div className="languages__item">
        <img width={18} height={18} src={EnglishPng} alt="english" />
      </div>
      <div className="languages__item">
        <img width={18} height={18} src={RussianPng} alt="russian" />
      </div>
    </div>
  )
}

export default Language
