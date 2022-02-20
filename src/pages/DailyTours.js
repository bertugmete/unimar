import React from "react";
import { Col, Row } from "react-bootstrap";
import TourCard from "../components/tour-card/TourCard";
import London from "./assets/images/london.jpeg";

const DailyTours = () => {
  return (
    <Row className="gx-0">
      <Col xs="12" md="4" lg="3">
        <TourCard image={London} name="BIG BOSS TEKNE TURU" price="200₺" />
      </Col>
      <Col xs="12" md="4" lg="3">
        <TourCard image={London} name="JEEP SAFARİ" price="200₺" />
      </Col>
      <Col xs="12" md="4" lg="3">
        <TourCard image={London} name="ATV SAFARİ" price="200₺" />
      </Col>
      <Col xs="12" md="4" lg="3">
        <TourCard image={London} name="BUGGY SAFARİ" price="200₺" />
      </Col>
      <Col xs="12" md="4" lg="3">
        <TourCard image={London} name="HAMAM" price="200₺" />
      </Col>
      <Col xs="12" md="4" lg="3">
        <TourCard image={London} name="DALYAN TEKNE TURU" price="200₺" />
      </Col>
      <Col xs="12" md="4" lg="3">
        <TourCard image={London} name="TEKNE TURU" price="200₺" />
      </Col>
      <Col xs="12" md="4" lg="3">
        <TourCard image={London} name=" HİSARÖNÜ TEKNE TURU" price="200₺" />
      </Col>
    </Row>
  );
};

export default DailyTours;