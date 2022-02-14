import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const TourCard = ({ image, name, price }) => {
  return (
    <Link className="tour-card">
      <img src={image} alt={image} className="tour-card__image" />
      <div className="tour-card__information">
        <p className="tour-card__information__name">{name}</p>
        <p className="tour-card__information__price">{price}</p>
      </div>
    </Link>
  )
}

TourCard.propTypes = {
  image: PropTypes.element,
  name: PropTypes.string,
  price: PropTypes.string
}

export default TourCard
