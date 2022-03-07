import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TourGeneralInformation from '../components/tour-general-information/TourGeneralInformation'
import DateSvg from './assets/images/date.svg'
import CarSvg from './assets/images/car.svg'
import GuideSvg from './assets/images/guide.svg'
import ClockSvg from './assets/images/clock.svg'
import PaymentSvg from './assets/images/payment.svg'
import MealSvg from './assets/images/meal.svg'
import CrossSvg from './assets/images/cross.svg'
import QuestionMark from './assets/images/questionmark.svg'
import Carousel from '../components/carousel/Carousel'
import BookNow from '../modules/book-now/BookNow'
import TourProperties from '../components/tour-properties/TourProperties'
import List from '../components/list/List'
import Image1 from './assets/images/horse-safari/1.jpg'
import Image2 from './assets/images/horse-safari/2.jpg'
import Image3 from './assets/images/horse-safari/3.jpg'
import Image4 from './assets/images/horse-safari/4.jpg'
import Image5 from './assets/images/horse-safari/5.jpg'
import Image6 from './assets/images/horse-safari/6.jpg'
import Image7 from './assets/images/horse-safari/7.jpg'
import Image8 from './assets/images/horse-safari/8.jpg'
import Image11 from './assets/images/horse-safari/Horse-Safari-Home.jpg'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

const HorseSafari = () => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>{t('pages.horseSafari.title')}</title>
        <meta name="description" content={t('pages.horseSafari.meta.description')} />
        <meta name="keywords" content={t('pages.horseSafari.meta.keywords')} />
        <link rel="canonical" href="http://www.unimartravel.com/horse-safari" />
      </Helmet>
      <div>
        <Container className="page">
          <Row>
            <Col xs="12" md="8" lg="8">
              <TourGeneralInformation
                title={t('pages.horseSafari.title')}
                items={[
                  {
                    icon: ClockSvg,
                    title: t('pages.horseSafari.tourGeneralInformation.time.title'),
                    description: t('pages.horseSafari.tourGeneralInformation.time.description')
                  },
                  {
                    icon: CarSvg,
                    title: t('pages.horseSafari.tourGeneralInformation.transfer.title'),
                    description: t('pages.horseSafari.tourGeneralInformation.transfer.description')
                  },
                  {
                    icon: GuideSvg,
                    title: t('pages.horseSafari.tourGeneralInformation.guide.title'),
                    description: t('pages.horseSafari.tourGeneralInformation.guide.description')
                  },
                  {
                    icon: PaymentSvg,
                    title: t('pages.horseSafari.tourGeneralInformation.payment.title'),
                    description: t('pages.horseSafari.tourGeneralInformation.payment.description')
                  },
                  {
                    icon: DateSvg,
                    title: t('pages.horseSafari.tourGeneralInformation.days.title'),
                    description: t('pages.horseSafari.tourGeneralInformation.days.description')
                  },
                  {
                    icon: MealSvg,
                    title: t('pages.horseSafari.tourGeneralInformation.meal.title'),
                    description: t('pages.horseSafari.tourGeneralInformation.meal.description')
                  }
                ]}
              />
              <div className="page__images">
                <Row>
                  <Col>
                    <Carousel
                      slides={[
                        Image1,
                        Image2,
                        Image3,
                        Image4,
                        Image5,
                        Image6,
                        Image7,
                        Image8,
                        Image11
                      ]}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs="12" md="4" lg="4">
              <BookNow
                adultPrice={t('pages.horseSafari.price.adult')}
                childPrice={t('pages.horseSafari.price.childPrice')}
                infantPrice={t('pages.horseSafari.price.infantPrice')}
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs="12" md="8" lg="8">
              <p className="page__paragraph">{t('pages.horseSafari.firstParagraph')}</p>
              <br />
              <List
                items={[
                  t('pages.horseSafari.firstList.guide'),
                  t('pages.horseSafari.firstList.experience'),
                  t('pages.horseSafari.firstList.adventure')
                ]}
              />
              <br />
              <p className="page__paragraph">{t('pages.horseSafari.secondParagraph')}</p>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="8" lg="8">
              <TourProperties
                tourProgram={TourProgram}
                includedInTheFee={IncludedInTheFee}
                notIncludedInTheFee={notIncludedInTheFee}
                frequentlyAskedQuestions={frequentlyAskedQuestions}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

const TourProgram = () => {
  const { t } = useTranslation()
  return <p className="page__paragraph">{t('pages.horseSafari.tourProgram')}</p>
}

const IncludedInTheFee = () => {
  const { t } = useTranslation()
  return (
    <List
      items={[
        t('pages.horseSafari.includedInTheFee.freeTransfer'),
        t('pages.horseSafari.includedInTheFee.horseTour'),
        t('pages.horseSafari.includedInTheFee.safetyEquipment'),
        t('pages.horseSafari.includedInTheFee.guide'),
        t('pages.horseSafari.includedInTheFee.insurance')
      ]}
    />
  )
}

const notIncludedInTheFee = () => {
  const { t } = useTranslation()

  return (
    <List
      items={[
        t('pages.horseSafari.notIncludedInTheFee.beverages'),
        t('pages.horseSafari.notIncludedInTheFee.personalExpenses'),
        t('pages.horseSafari.notIncludedInTheFee.privatePhotoVideo')
      ]}
      icon={CrossSvg}
    />
  )
}

const frequentlyAskedQuestions = () => {
  const { t } = useTranslation()

  return (
    <List
      items={[
        t('pages.horseSafari.frequentlyAskedQuestions.first'),
        t('pages.horseSafari.frequentlyAskedQuestions.second'),
        t('pages.horseSafari.frequentlyAskedQuestions.third'),
        t('pages.horseSafari.frequentlyAskedQuestions.forth')
      ]}
      icon={QuestionMark}
    />
  )
}

export default HorseSafari
