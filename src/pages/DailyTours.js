import React from 'react'
import { Col, Row } from 'react-bootstrap'
import TourCard from '../components/tour-card/TourCard'
import London from './assets/images/london.jpeg'
import MarmarisAllInclusiveBoatTour from './assets/images/marmaris-all-inclusive-boat-tour/MarmarisAllInclusiveBoatTour-Home.jpg'
import JeepSafari from './assets/images/jeep-safari/Jeep-Safari-Home.jpg'
import DalyanTour from './assets/images/dalyan-tour/DalyanTour-Home.jpg'
import Diving from './assets/images/diving/Diving-Home.jpeg'
import HorseSafari from './assets/images/horse-safari/Horse-Safari-Home.jpg'
import BuggySafari from './assets/images/buggy-safari/BuggySafari-HomePage.jpg'
import Bath from './assets/images/bath/Bath-Home-Page.jpg'
import QuadSafari from './assets/images/quad-safari/Quad-Safari-Home.jpg'
import SedirAdasi from './assets/images/sedir-island/Sedir-Island-Home-Page.png'
import { useTranslation } from 'react-i18next'

const DailyTours = () => {
  const { t } = useTranslation()

  return (
    <div className="daily-tours">
      <div className="daily-tours__title">
        <h1 className="daily-tours__title__text">{t('pages.marmarisDailyTours.title')}</h1>
      </div>
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
          <TourCard
            image={Bath}
            name={t('home.popularTour.bath')}
            price={`${t('pages.bath.price.adult')} ${t('currency')}`}
            directTo="/bath"
          />
        </Col>
        <Col xs="12" md="4" lg="3">
          <TourCard
            image={QuadSafari}
            name={t('home.popularTour.quadSafari')}
            price={`${t('pages.bath.price.adult')} ${t('currency')}`}
            directTo="/quad-safari"
          />
        </Col>
        <Col xs="12" md="4" lg="3">
          <TourCard
            image={SedirAdasi}
            name={t('home.popularTour.sedirIsland')}
            price={`${t('pages.sedirIsland.price.adult')} ${t('currency')}`}
            directTo="/sedir-island"
          />
        </Col>
      </Row>
    </div>
  )
}

export default DailyTours
