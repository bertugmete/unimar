import React from 'react'
import { Link } from 'react-router-dom'
import YachtCardImage from './assets/images/yacht.jpeg'
import PinSvg from './assets/images/pin.svg'
import BedSvg from './assets/images/bed.svg'
import DateSvg from './assets/images/date.svg'
import StarSvg from './assets/images/star.svg'

const YachtCard = () => {
  return (
    <Link className="yacht-card">
      <div className="yacht-card__image">
        <img src={YachtCardImage} alt="yacht" />
      </div>
      <div className="yacht-card__information">
        <div className="yacht-card__information--left">
          <div className="yacht-card__information--left__location">
            <img src={PinSvg} width={18} height={18} alt="pin" />
            <span>Marmaris Marina</span>
          </div>
          <div className="yacht-card__information--left__capacity">
            <img src={BedSvg} width={18} height={18} alt="bed" />
            <span>1 Kabin 2 kişi</span>
          </div>
          <div className="yacht-card__information--left__min-day">
            <img width={18} height={18} src={DateSvg} alt="date" />
            <span>Min. gün: 1</span>
          </div>
        </div>
        <div className="yacht-card__information--right">
          <div className="yacht-card__information--right__name">ELAN 1923 IMPRESSION</div>
          <div className="yacht-card__information--right__stars">
            <img src={StarSvg} width={18} height={18} alt="star" />
            <img src={StarSvg} width={18} height={18} alt="star" />
            <img src={StarSvg} width={18} height={18} alt="star" />
          </div>
          <div className="yacht-card__information--right__price">200 ₺</div>
        </div>
      </div>
    </Link>
  )
}

export default YachtCard
