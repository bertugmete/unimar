import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TourGeneralInformation from "../components/tour-general-information/TourGeneralInformation";
import Carousel from "../components/carousel/Carousel";
import Boat1 from "./assets/images/boat-1.jpeg";
import Boat2 from "./assets/images/boat-2.jpeg";
import Boat3 from "./assets/images/boat-3.jpeg";
import BookNow from "../modules/book-now/BookNow";
import TourProperties from "../components/tour-properties/TourProperties";
import Length from "./assets/images/length.svg";
import UsersSvg from "./assets/images/users.svg";
import BedSvg from "./assets/images/bed.svg";
import AirConditioner from "./assets/images/air-conditioner.svg";
import Harbour from "./assets/images/harbor.svg";
import DateSvg from "./assets/images/date.svg";
import TechnicDetails from "../components/technic-details/TechnicDetails";

const BoatTour = () => {
  return (
    <Container className="page">
      <Row>
        <Col xs="12" md="8" lg="8">
          <div className="tour">
            <div className="tour__title">
              <h1>Tekne Turu</h1>
            </div>
            <TourGeneralInformation items={[{
              icon: Length,
              title: "Uzunluk",
              description: "5 metre"
            }, {
              icon: UsersSvg,
              title: "Kapasite",
              description: "8"
            }, {
              icon: BedSvg,
              title: "Kabin",
              description: 1
            }, {
              icon: AirConditioner,
              title: "Soğutma",
              description: "Var"
            }, {
              icon: Harbour,
              title: "Liman",
              description: "Marmaris"
            }, {
              icon: DateSvg,
              title: "Kiralama Sezonu",
              description: "Mart-Kasım"
            }]} />
            <div>
              <Row>
                <Col>
                  <Carousel slides={[Boat1,
                    Boat2,
                    Boat3]} />
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col xs="12" md="4" lg="4">
          <BookNow price="Günlük 1200₺" />

        </Col>
      </Row>
      <Row className="flex-row-reverse">
        <Col xs="12" md="4" lg="4">
          <TechnicDetails title="Teknik Detaylar" className="m-3" items={[{
            title: "Yapım/Yenileme Yılı",
            description: "1997"
          }, {
            title: "Jeneratör",
            description: "Yok"
          }, {
            title: "Motor",
            description: "85 Hp"
          }, {
            title: "Tuvalet",
            description: "1 adet"
          }, {
            title: "Min Kiralama",
            description: "1 gün"
          }
          ]} />
        </Col>
        <Col xs="12" md="8" lg="8">
          <TourProperties />
        </Col>
      </Row>
    </Container>
  );
};

export default BoatTour;