import React from 'react'
import PropTypes from 'prop-types'
import MinusSvg from './assets/images/minus.svg'
import PlusSvg from './assets/images/plus.svg'
import { Col, Row } from 'react-bootstrap'

const Count = ({ decrement, increment, value, title, description }) => {
  return (
    <Row>
      <Col>
        <div className="count">
          <div className="count__information">
            <span className="count__information__title">{title}</span>
            <span className="count__information__description">{description}</span>
          </div>
          <div className="count__change">
            <div className="count__change__button" onClick={decrement}>
              <img height={18} width={18} src={MinusSvg} alt="minus" />
            </div>
            <div className="count__change__value">{value}</div>
            <div className="count__change__button" onClick={increment}>
              <img height={18} width={18} src={PlusSvg} alt="minus" />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  )
}

Count.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  value: PropTypes.number
}

Count.defaultProps = {
  title: 'Yetişkin',
  description: 'Yaş 18+',
  value: 0
}

export default Count
