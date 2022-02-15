import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper'
import { Col, Container, Row } from 'react-bootstrap'
import Venezia from './assets/images/venezia.jpeg'
import Venezia1 from './assets/images/venezia-1.jpeg'
import Istanbul from './assets/images/istanbul.jpeg'
import London from './assets/images/london.jpeg'
import 'swiper/css/navigation'
import 'swiper/css'
import TourCard from '../components/tour-card/TourCard'
import YachtCard from '../components/yacht-card/YachtCard'
import RentCar from '../components/rent-car/RentCar'
import MapContainer from '../components/map/Map'

const HomePage = () => {
  return (
    <div className="home">
      <div className="home__swiper">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Venezia} alt="venezia" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Venezia1} alt="Venezia1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Istanbul} alt="Istanbul" />
          </SwiperSlide>
        </Swiper>
      </div>
      <Container fluid className="gx-0">
        <div className="home__popular-tours">
          <div className="home-category__header__wrapper">
            <h2 className="home-category__header__title">Popüler Günlük Turlar</h2>
            <p className="home-category__header__description">
              En çok tercih edilen turlarımıza göz atın
            </p>
          </div>
          <div className="home__popular-tours__list">
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
          </div>
        </div>
        <Container>
          <div className="home__yacht-tours">
            <div className="home-category__header__wrapper">
              <h2 className="home-category__header__title">Tekne Kiralama</h2>
              <p className="home-category__header__description">
                En çok tercih edilen özel tekne ve yatlarımıza göz atabilirsiniz
              </p>
            </div>
            <Row className="row-margin">
              <Col xs="12" md="4" lg="4">
                <YachtCard />
              </Col>
              <Col xs="12" md="4" lg="4">
                <YachtCard />
              </Col>
              <Col xs="12" md="4" lg="4">
                <YachtCard />
              </Col>
              <Col xs="12" md="4" lg="4">
                <YachtCard />
              </Col>
              <Col xs="12" md="4" lg="4">
                <YachtCard />
              </Col>
              <Col xs="12" md="4" lg="4">
                <YachtCard />
              </Col>
            </Row>
          </div>
        </Container>
        <Container>
          <div className="home__rent-car">
            <div className="home-category__header__wrapper">
              <h2 className="home-category__header__title">Günlük Araç Kiralama</h2>
            </div>
            <Row className="row-margin">
              <Col xs="12" md="3" lg="3">
                <RentCar />
              </Col>
              <Col xs="12" md="3" lg="3">
                <RentCar />
              </Col>
              <Col xs="12" md="3" lg="3">
                <RentCar />
              </Col>
              <Col xs="12" md="3" lg="3">
                <RentCar />
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
      <MapContainer />
    </div>
  )
}

export default HomePage
