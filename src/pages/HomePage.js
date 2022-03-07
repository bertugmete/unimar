import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Col, Container, Row } from 'react-bootstrap'
import Venezia from './assets/images/venezia.jpeg'
import Venezia1 from './assets/images/venezia-1.jpeg'
import Istanbul from './assets/images/istanbul.jpeg'
import London from './assets/images/london.jpeg'
import MarmarisAllInclusiveBoatTour from './assets/images/marmaris-all-inclusive-boat-tour/MarmarisAllInclusiveBoatTour-Home.jpg'
import DalyanTour from './assets/images/dalyan-tour/DalyanTour-Home.jpg'
import JeepSafari from './assets/images/jeep-safari/Jeep-Safari-Home.jpg'
import Diving from './assets/images/diving/Diving-Home.jpeg'
import HorseSafari from './assets/images/horse-safari/Horse-Safari-Home.jpg'
import BuggySafari from './assets/images/buggy-safari/BuggySafari-HomePage.jpg'
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
      <h1 style={{ display: 'none' }}>
        Marmaris Günlük Turlar, Tekne Turları, Tarnsfer, Kiralık Araç
      </h1>
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
                  price={`${t('pages.marmarisAllInclusiveBoatTour.price.adult')} ${t('currency')}`}
                  directTo="/marmaris-all-inclusive-boat-tour"
                />
              </Col>
              <Col xs="12" md="4" lg="3">
                <TourCard
                  image={JeepSafari}
                  name={t('home.popularTour.jeepSafari')}
                  price={`${t('pages.jeepSafari.price.adult')} ${t('currency')}`}
                  directTo="/jeep-safari"
                />
              </Col>
              <Col xs="12" md="4" lg="3">
                <TourCard
                  image={DalyanTour}
                  name={t('home.popularTour.dalyanTour')}
                  price={`${t('pages.dalyanTour.price.adult')} ${t('currency')}`}
                  directTo="/dalyan-tour"
                />
              </Col>
              <Col xs="12" md="4" lg="3">
                <TourCard
                  image={Diving}
                  name={t('home.popularTour.diving')}
                  price={`${t('pages.diving.price.adult')} ${t('currency')}`}
                  directTo="/diving"
                />
              </Col>
              <Col xs="12" md="4" lg="3">
                <TourCard
                  image={HorseSafari}
                  name={t('home.popularTour.horseSafari')}
                  price={`${t('pages.horseSafari.price.adult')} ${t('currency')}`}
                  directTo="/horse-safari"
                />
              </Col>
              <Col xs="12" md="4" lg="3">
                <TourCard
                  image={BuggySafari}
                  name={t('home.popularTour.buggySafari')}
                  price={`${t('pages.buggySafari.price.adult')} ${t('currency')}`}
                  directTo="/buggy-safari"
                />
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
