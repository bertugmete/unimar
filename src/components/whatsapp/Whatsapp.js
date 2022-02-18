import React from "react";
import WhatsAppSvg from "./assets/images/whatsapp.svg"

const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/905553509384"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={WhatsAppSvg} alt="whatsapp" className="whatsapp-icon" />
    </a>
  );
};

export default Whatsapp;