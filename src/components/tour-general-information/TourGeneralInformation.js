import React from "react";
import { Col, Row } from "react-bootstrap";
import PaymentSvg from "../../pages/assets/images/payment.svg";
import CarSvg from "../../pages/assets/images/car.svg";
import GuideSvg from "../../pages/assets/images/guide.svg";
import TimeSvg from "../../pages/assets/images/time.svg";
import DateSvg from "../../pages/assets/images/date.svg";
import MealSvg from "../../pages/assets/images/meal.svg";

const TourGeneralInformation = () => {
  return (
    <div className="tour-general-information">
      <Row>
        <Col xs="6" md="4" lg="4">
          <div className="tour-general-information__item">
                <span className="icon__wrapper">
                  <img width={18} height={18} src={PaymentSvg} alt="payment" />
                </span>
            <div className="tour-general-information__item__list">
              <span className="tour-general-information__item__list__title">Ödeme</span>
              <span className="tour-general-information__item__list__description">
                    Havale & Gelince Öde
                  </span>
            </div>
          </div>
        </Col>
        <Col xs="6" md="4" lg="4">
          <div className="tour-general-information__item">
                <span className="icon__wrapper">
                  <img width={18} height={18} src={CarSvg} alt="car" />
                </span>
            <div className="tour-general-information__item__list">
              <span className="tour-general-information__item__list__title">Transfer</span>
              <span className="tour-general-information__item__list__description">Var</span>
            </div>
          </div>
        </Col>
        <Col xs="6" md="4" lg="4">
          <div className="tour-general-information__item">
                <span className="icon__wrapper">
                  <img width={18} height={18} src={GuideSvg} alt="guide" />
                </span>
            <div className="tour-general-information__item__list">
              <span className="tour-general-information__item__list__title">Rehber</span>
              <span className="tour-general-information__item__list__description">Var</span>
            </div>
          </div>
        </Col>
        <Col xs="6" md="4" lg="4">
          <div className="tour-general-information__item">
                <span className="icon__wrapper">
                  <img width={18} height={18} src={TimeSvg} alt="time" />
                </span>
            <div className="tour-general-information__item__list">
              <span className="tour-general-information__item__list__title">Tur Saati</span>
              <span className="tour-general-information__item__list__description">
                    09.30 - 16.30
                  </span>
            </div>
          </div>
        </Col>
        <Col xs="6" md="4" lg="4">
          <div className="tour-general-information__item">
                <span className="icon__wrapper">
                  <img width={18} height={18} src={DateSvg} alt="date" />
                </span>
            <div className="tour-general-information__item__list">
              <span className="tour-general-information__item__list__title">Tur Zamanları</span>
              <span className="tour-general-information__item__list__description">Her Gün</span>
            </div>
          </div>
        </Col>
        <Col xs="6" md="4" lg="4">
          <div className="tour-general-information__item">
                <span className="icon__wrapper">
                  <img width={18} height={18} src={MealSvg} alt="meal" />
                </span>
            <div className="tour-general-information__item__list">
              <span className="tour-general-information__item__list__title">Yemek</span>
              <span className="tour-general-information__item__list__description">
                    Öğle Yemeği
                  </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TourGeneralInformation;