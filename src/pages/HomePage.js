import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper'
import { Col, Container, Row } from 'react-bootstrap'
import Venezia from './assets/images/venezia.jpeg'
import Venezia1 from './assets/images/venezia-1.jpeg'
import Istanbul from './assets/images/istanbul.jpeg'
import London from './assets/images/london.jpeg'
import 'swiper/css/navigation'
import './assets/HomePage.scss'
import 'swiper/css'
import TourCard from '../components/tour-card/TourCard'

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
          <div className="home__popular-tours__header">
            <h2>Popüler Günlük Turlar</h2>
            <p className="home__popular-tours__header__description">
              En çok tercih edilen turlarımıza göz atın
            </p>
          </div>
          <div className="home__popular-tours__list">
            <Row className="gx-0">
              <Col xs="12" md="3" lg="3">
                <TourCard image={London} name="BIG BOSS TEKNE TURU" price="200₺" />
              </Col>
              <Col xs="12" md="3" lg="3">
                <TourCard image={London} name="JEEP SAFARİ" price="200₺" />
              </Col>
              <Col xs="12" md="3" lg="3">
                <TourCard image={London} name="ATV SAFARİ" price="200₺" />
              </Col>
              <Col xs="12" md="3" lg="3">
                <TourCard image={London} name="BUGGY SAFARİ" price="200₺" />
              </Col>
            </Row>
            <Row className="gx-0">
              <Col xs="12" md="3" lg="3">
                <TourCard image={London} name="HAMAM" price="200₺" />
              </Col>
              <Col xs="12" md="3" lg="3">
                <TourCard image={London} name="DALYAN TEKNE TURU" price="200₺" />
              </Col>
              <Col xs="12" md="3" lg="3">
                <TourCard image={London} name="TEKNE TURU" price="200₺" />
              </Col>
              <Col xs="12" md="3" lg="3">
                <TourCard image={London} name=" HİSARÖNÜ TEKNE TURU" price="200₺" />
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HomePage
