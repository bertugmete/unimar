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
import Image1 from './assets/images/jeep-safari/1.jpg'
import Image2 from './assets/images/jeep-safari/2.jpg'
import Image3 from './assets/images/jeep-safari/3.jpg'
import Image4 from './assets/images/jeep-safari/4.jpg'
import Image5 from './assets/images/jeep-safari/5.jpg'
import Image6 from './assets/images/jeep-safari/7.jpg'
import Image7 from './assets/images/jeep-safari/Jeep-Safari-Home.jpg'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

const JeepSafari = () => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>{t('pages.jeepSafari.title')}</title>
        <meta
          name="description"
          content={t('pages.jeepSafari.meta.description')}
        />
        <meta
          name="keywords"
          content={t('pages.jeepSafari.meta.keywords')}
        />
        <link rel="canonical" href="http://www.unimartravel.com/jeep-safari" />
      </Helmet>
      <div>
        <Container className="page">
          <Row>
            <Col xs="12" md="8" lg="8">
              <TourGeneralInformation
                title={t('pages.jeepSafari.title')}
                items={[
                  {
                    icon: ClockSvg,
                    title: t(
                      'pages.jeepSafari.tourGeneralInformation.time.title'
                    ),
                    description: t(
                      'pages.jeepSafari.tourGeneralInformation.time.description'
                    )
                  },
                  {
                    icon: CarSvg,
                    title: t(
                      'pages.jeepSafari.tourGeneralInformation.transfer.title'
                    ),
                    description: t(
                      'pages.jeepSafari.tourGeneralInformation.transfer.description'
                    )
                  },
                  {
                    icon: GuideSvg,
                    title: t(
                      'pages.jeepSafari.tourGeneralInformation.guide.title'
                    ),
                    description: t(
                      'pages.jeepSafari.tourGeneralInformation.guide.description'
                    )
                  },
                  {
                    icon: PaymentSvg,
                    title: t(
                      'pages.jeepSafari.tourGeneralInformation.payment.title'
                    ),
                    description: t(
                      'pages.jeepSafari.tourGeneralInformation.payment.description'
                    )
                  },
                  {
                    icon: DateSvg,
                    title: t(
                      'pages.jeepSafari.tourGeneralInformation.days.title'
                    ),
                    description: t(
                      'pages.jeepSafari.tourGeneralInformation.days.description'
                    )
                  },
                  {
                    icon: MealSvg,
                    title: t(
                      'pages.jeepSafari.tourGeneralInformation.meal.title'
                    ),
                    description: t(
                      'pages.jeepSafari.tourGeneralInformation.meal.description'
                    )
                  }
                ]}
              />
              <div>
                <Row>
                  <Col>
                    <Carousel slides={[Image1, Image2, Image3, Image4, Image5, Image6, Image7]} />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs="12" md="4" lg="4">
              <BookNow
                adultPrice={t('pages.jeepSafari.price.adult')}
                childPrice={t('pages.jeepSafari.price.childPrice')}
                infantPrice={t('pages.jeepSafari.price.infantPrice')}
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs="12" md="8" lg="8">
              <p className="page__paragraph">
                {t('pages.jeepSafari.firstParagraph')}
              </p>
              <br />
              <List
                items={[
                  t('pages.jeepSafari.firstList.turgut'),
                  t('pages.jeepSafari.firstList.orhaniye'),
                  t('pages.jeepSafari.firstList.watergun'),
                  t('pages.jeepSafari.firstList.bayir')
                ]}
              />
              <br />
              <p className="page__paragraph">
                {t('pages.jeepSafari.secondParagraph')}
              </p>
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
  return <p className="page__paragraph">{t('pages.jeepSafari.tourProgram')}</p>
}

const IncludedInTheFee = () => {
  const { t } = useTranslation()
  return (
    <List
      items={[
        t('pages.jeepSafari.includedInTheFee.freeTransfer'),
        t('pages.jeepSafari.includedInTheFee.meal'),
        t('pages.jeepSafari.includedInTheFee.entryFees'),
        t('pages.jeepSafari.includedInTheFee.guide'),
        t('pages.jeepSafari.includedInTheFee.insurance'),
      ]}
    />
  )
}

const notIncludedInTheFee = () => {
  const { t } = useTranslation()

  return (
    <List
      items={[
        t('pages.jeepSafari.notIncludedInTheFee.beverages'),
        t('pages.jeepSafari.notIncludedInTheFee.personalExpenses'),
        t('pages.jeepSafari.notIncludedInTheFee.privatePhotoVideo')
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
        t('pages.jeepSafari.frequentlyAskedQuestions.first'),
        t('pages.jeepSafari.frequentlyAskedQuestions.second'),
        t('pages.jeepSafari.frequentlyAskedQuestions.third'),
        t('pages.jeepSafari.frequentlyAskedQuestions.forth')
      ]}
      icon={QuestionMark}
    />
  )
}

export default JeepSafari
