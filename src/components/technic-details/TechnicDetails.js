import React from "react";
import classnames from "classnames";

const TechnicDetails = ({ items, title,className }) => {
  return (
    <div className={classnames("technic-details", className)}>
      <div className="technic-details__title"><span>{title}</span></div>
      {
        items.map(item => {
          return (
            <div className="technic-details__items">
              <div className="technic-details__items__title">
                {
                  item.title
                }
              </div>
              <div className="technic-details__items__description">
                {item.description}
              </div>
            </div>
          );
        })
      }

    </div>
  );
};

export default TechnicDetails;