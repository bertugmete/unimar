import React from "react";
import PhoneSvg from "../assets/images/phone.svg";
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <Container>
      <div className="contact">
        <div className="contact__title">
          <h1 className="contact__title__text">İLETİŞİM</h1>
        </div>
        <div className="contact__list">
          <div className="contact__list__item">
            <div className="contact__list__item__image">
              <img src={PhoneSvg} alt="phone" />
            </div>
            <div className="contact__list__item__title">
              <h2 className="contact__list__item__title__text">Telefon Desteği</h2>
            </div>
            <div className="contact__list__item__description">
            <span className="contact__list__item__description__text">
            7/24 Destek Hizmeti
            </span>
            </div>
          </div>
          <div className="contact__list__item">
            <div className="contact__list__item__image">
              <img src={PhoneSvg} alt="phone" />
            </div>
            <div className="contact__list__item__title">
              <h2 className="contact__list__item__title__text">Mail Destek</h2>
            </div>
            <div className="contact__list__item__description">
            <span className="contact__list__item__description__text">
            7/24 Destek Hizmeti
            </span>
            </div>
          </div>
          <div className="contact__list__item">
            <div className="contact__list__item__image">
              <img src={PhoneSvg} alt="phone" />
            </div>
            <div className="contact__list__item__title">
              <h2 className="contact__list__item__title__text">Telefon Desteği</h2>
            </div>
            <div className="contact__list__item__description">
            <span className="contact__list__item__description__text">
            7/24 Destek Hizmeti
            </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;