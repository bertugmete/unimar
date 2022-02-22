import React from 'react'
import { Link } from 'react-router-dom'
import GearSvg from './styles/images/gear.svg'
import FuelSvg from './styles/images/fuel.svg'
import UsersSvg from './styles/images/users.svg'
import CarPng from './styles/images/car.png'

const RentCar = ({ price }) => {
  return (
    <Link className="rent-car">
      <div className="rent-car__price">
        <span>{price}</span>
      </div>
      <div className="rent-car__image__wrapper">
        <img src={CarPng} alt="car" />
      </div>
      <div className="rent-car__information">
        <div className="rent-car__information__detail">
          <div className="rent-car__information__detail__fuel">
            <img width={18} height={18} src={FuelSvg} alt="fuel" />
            <span>Benzin</span>
          </div>
          <div className="rent-car__information__detail__people">
            <img width={18} height={18} src={UsersSvg} alt="users" />
            <span>5</span>
          </div>
          <div className="rent-car__information__detail__gear">
            <img width={18} height={18} src={GearSvg} alt="gear" />
            <span>Vites</span>
          </div>
        </div>

        <div className="rent-car__information__name">
          <span>Citroen C-Elysee (Dizel)</span>
        </div>
        <div className="rent-car__information__type">
          <span>Binek Araç</span>
        </div>
      </div>
    </Link>
  )
}

export default RentCar
