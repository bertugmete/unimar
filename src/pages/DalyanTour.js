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
import Image1 from './assets/images/dalyan-tour/1.jpg'
import Image2 from './assets/images/dalyan-tour/2.jpg'
import Image3 from './assets/images/dalyan-tour/3.jpg'
import Image4 from './assets/images/dalyan-tour/4.jpg'
import Image5 from './assets/images/dalyan-tour/5.jpg'
import Image6 from './assets/images/dalyan-tour/6.jpg'
import Image7 from './assets/images/dalyan-tour/7.jpg'
import Image8 from './assets/images/dalyan-tour/8.jpg'
import Image9 from './assets/images/dalyan-tour/9.jpg'
import Image10 from './assets/images/dalyan-tour/10.jpg'
import Image11 from './assets/images/dalyan-tour/DalyanTour-Home.jpg'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

const DalyanTour = () => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>{t('pages.dalyanTour.title')}</title>
        <meta
          name="description"
          content={t('pages.dalyanTour.meta.description')}
        />
        <meta
          name="keywords"
          content={t('pages.dalyanTour.meta.keywords')}
        />
        <link rel="canonical" href="http://www.unimartravel.com/dalyan-tour" />
      </Helmet>
      <div>
        <Container className="page">
          <Row>
            <Col xs="12" md="8" lg="8">
              <TourGeneralInformation
                title={t('pages.dalyanTour.title')}
                items={[
                  {
                    icon: ClockSvg,
                    title: t(
                      'pages.dalyanTour.tourGeneralInformation.time.title'
                    ),
                    description: t(
                      'pages.dalyanTour.tourGeneralInformation.time.description'
                    )
                  },
                  {
                    icon: CarSvg,
                    title: t(
                      'pages.dalyanTour.tourGeneralInformation.transfer.title'
                    ),
                    description: t(
                      'pages.dalyanTour.tourGeneralInformation.transfer.description'
                    )
                  },
                  {
                    icon: GuideSvg,
                    title: t(
                      'pages.dalyanTour.tourGeneralInformation.guide.title'
                    ),
                    description: t(
                      'pages.dalyanTour.tourGeneralInformation.guide.description'
                    )
                  },
                  {
                    icon: PaymentSvg,
                    title: t(
                      'pages.dalyanTour.tourGeneralInformation.payment.title'
                    ),
                    description: t(
                      'pages.dalyanTour.tourGeneralInformation.payment.description'
                    )
                  },
                  {
                    icon: DateSvg,
                    title: t(
                      'pages.dalyanTour.tourGeneralInformation.days.title'
                    ),
                    description: t(
                      'pages.dalyanTour.tourGeneralInformation.days.description'
                    )
                  },
                  {
                    icon: MealSvg,
                    title: t(
                      'pages.dalyanTour.tourGeneralInformation.meal.title'
                    ),
                    description: t(
                      'pages.dalyanTour.tourGeneralInformation.meal.description'
                    )
                  }
                ]}
              />
              <div className="page__images">
                <Row>
                  <Col>
                    <Carousel slides={[Image1,Image11, Image2, Image3, Image4, Image5, Image6, Image7,
                      Image8,
                      Image9,
                      Image10,
                      Image11,
                    ]} />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs="12" md="4" lg="4">
              <BookNow
                adultPrice={t('pages.dalyanTour.price.adult')}
                childPrice={t('pages.dalyanTour.price.childPrice')}
                infantPrice={t('pages.dalyanTour.price.infantPrice')}
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs="12" md="8" lg="8">
              <p className="page__paragraph">
                {t('pages.dalyanTour.firstParagraph')}
              </p>
              <br />
              <List
                items={[
                  t('pages.dalyanTour.firstList.kaunos'),
                  t('pages.dalyanTour.firstList.mudBath'),
                  t('pages.dalyanTour.firstList.carretta'),
                  t('pages.dalyanTour.firstList.cam'),
                  t('pages.dalyanTour.firstList.lunch'),
                ]}
              />
              <br />
              <p className="page__paragraph">
                {t('pages.dalyanTour.secondParagraph')}
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
  return <p className="page__paragraph">{t('pages.dalyanTour.tourProgram')}</p>
}

const IncludedInTheFee = () => {
  const { t } = useTranslation()
  return (
    <List
      items={[
        t('pages.dalyanTour.includedInTheFee.freeTransfer'),
        t('pages.dalyanTour.includedInTheFee.meal'),
        t('pages.dalyanTour.includedInTheFee.entryFees'),
        t('pages.dalyanTour.includedInTheFee.guide'),
        t('pages.dalyanTour.includedInTheFee.insurance')
      ]}
    />
  )
}

const notIncludedInTheFee = () => {
  const { t } = useTranslation()

  return (
    <List
      items={[
        t('pages.dalyanTour.notIncludedInTheFee.beverages'),
        t('pages.dalyanTour.notIncludedInTheFee.personalExpenses'),
        t('pages.dalyanTour.notIncludedInTheFee.privatePhotoVideo')
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
        t('pages.dalyanTour.frequentlyAskedQuestions.first'),
      ]}
      icon={QuestionMark}
    />
  )
}

export default DalyanTour
