import React from "react";
import TickSvg from "./assets/images/tick.svg";

const List = ({ items }) => {
  return (
    <ul className="list">
      {items.map((item, index) => (<li key={index} className="list__item">
          <span className="list__item__image__wrapper">
            <img className="list__item__image" width={18} height={18} src={TickSvg} alt="tick" />
          </span>
          <span className="list__item__text">{item}</span>
      </li>))}
    </ul>
  );
};

export default List;