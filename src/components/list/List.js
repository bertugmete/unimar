import React from 'react'
import PropTypes from 'prop-types'
import TickSvg from './assets/images/tick.svg'

const List = ({ items, icon }) => {
  return (
    <ul className="list">
      {items.map((item, index) => (
        <li key={index} className="list__item">
          <span className="list__item__image__wrapper">
            <img className="list__item__image" width={16} height={16} src={icon} alt="tick" />
          </span>
          <span className="list__item__text">{item}</span>
        </li>
      ))}
    </ul>
  )
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  icon: PropTypes.element
}

List.defaultProps = {
  icon: TickSvg
}

export default List
