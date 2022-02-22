import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'react-bootstrap'
import PaymentSvg from '../../pages/assets/images/payment.svg'
import CarSvg from '../../pages/assets/images/car.svg'
import GuideSvg from '../../pages/assets/images/guide.svg'
import TimeSvg from '../../pages/assets/images/time.svg'
import DateSvg from '../../pages/assets/images/date.svg'
import MealSvg from '../../pages/assets/images/meal.svg'

const TourGeneralInformation = ({ items }) => {
  return (
    <div className="tour">
      <div className="tour__title">
        <h1 className="tour__title__text">Tekne Turu - Her Şey Dahil</h1>
      </div>
      <div className="tour-general-information">
        <Row>
          {items.map((item) => {
            return (
              <Col xs="6" md="4" lg="4">
                <div className="tour-general-information__item">
                  <span className="icon__wrapper">
                    <img width={18} height={18} src={item.icon} alt="payment" />
                  </span>
                  <div className="tour-general-information__item__list">
                    <span className="tour-general-information__item__list__title">
                      {item.title}
                    </span>
                    <span className="tour-general-information__item__list__description">
                      {item.description}
                    </span>
                  </div>
                </div>
              </Col>
            )
          })}
        </Row>
      </div>
    </div>
  )
}

TourGeneralInformation.propTypes = {
  items: [
    {
      icon: PropTypes.element,
      title: PropTypes.string,
      description: PropTypes.string
    }
  ]
}

TourGeneralInformation.defaultProps = {
  items: [
    {
      icon: PaymentSvg,
      title: 'Ödeme',
      description: 'Havale & Gelince Öde'
    },
    {
      icon: CarSvg,
      title: 'Transfer',
      description: 'Var'
    },
    {
      icon: GuideSvg,
      title: 'Rehber',
      description: 'Var'
    },
    {
      icon: TimeSvg,
      title: 'Tur Saati',
      description: '09.30 - 16.30'
    },
    {
      icon: DateSvg,
      title: 'Tur Zamanları',
      description: 'Her Gün'
    },
    {
      icon: MealSvg,
      title: 'Yemek',
      description: 'Öğle Yemeği'
    }
  ]
}

export default TourGeneralInformation
