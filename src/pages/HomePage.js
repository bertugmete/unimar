import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Venezia from './assets/images/venezia.jpeg'
import Venezia1 from './assets/images/venezia-1.jpeg'
import Istanbul from './assets/images/istanbul.jpeg'
import London from './assets/images/london.jpeg'
import MarmarisAllInclusiveBoatTour from './assets/images/marmaris-all-inclusive-boat-tour/MarmarisAllInclusiveBoatTour-Home.jpg'
import 'swiper/css/navigation'
import 'swiper/css'
import TourCard from '../components/tour-card/TourCard'
import YachtCard from '../components/yacht-card/YachtCard'
import RentCar from '../components/rent-car/RentCar'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const HomePage = ({}) => {
  const { t } = useTranslation()

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
            <h2 className="home-category__header__title">{t('home.popularTour.title')}</h2>
            <p className="home-category__header__description">
              {t('home.popularTour.description')}
            </p>
          </div>
          <div className="home__popular-tours__list">
            <Row className="gx-0">
              <Col xs="12" md="4" lg="3">
                <TourCard
                  image={MarmarisAllInclusiveBoatTour}
                  name={t('home.popularTour.allInclusiveBoatTour')}
                  price="200₺"
                  directTo="/marmaris-all-inclusive-boat-tour"
                />
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
          <div className="home__popular-tours__button m-2">
            <Link to="/daily-tours">
              <span>Günlük Turların Tamamını Gör</span>
            </Link>
          </div>
        </div>
        <Container>
          <div className="home__yacht-tours">
            <div className="home-category__header__wrapper">
              <h2 className="home-category__header__title">Tekne Kiralama</h2>
              <p className="home-category__header__description">{t('home.yachtTour.title')}</p>
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
              <h2 className="home-category__header__title">{t('home.rentACar.title')}</h2>
            </div>
            <Row className="row-margin">
              <Col xs="12" md="3" lg="3">
                <RentCar price="200₺" />
              </Col>
              <Col xs="12" md="3" lg="3">
                <RentCar price="200₺" />
              </Col>
              <Col xs="12" md="3" lg="3">
                <RentCar price="200₺" />
              </Col>
              <Col xs="12" md="3" lg="3">
                <RentCar price="200₺" />
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
      {/*<MapContainer />*/}
    </div>
  )
}

export default HomePage
