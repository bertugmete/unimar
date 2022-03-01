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
import Image1 from './assets/images/marmaris-all-inclusive-boat-tour/1.jpg'
import Image2 from './assets/images/marmaris-all-inclusive-boat-tour/2.jpg'
import Image3 from './assets/images/marmaris-all-inclusive-boat-tour/3.jpg'
import Image4 from './assets/images/marmaris-all-inclusive-boat-tour/4.jpg'
import Image5 from './assets/images/marmaris-all-inclusive-boat-tour/5.jpg'
import Image6 from './assets/images/marmaris-all-inclusive-boat-tour/6.png'
import Image7 from './assets/images/marmaris-all-inclusive-boat-tour/MarmarisAllInclusiveBoatTour-Home.jpg'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

const MarmarisAllInclusiveBoatTour = () => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>{t('pages.marmarisAllInclusiveBoatTour.title')}</title>
        <meta
          name="description"
          content={t('pages.marmarisAllInclusiveBoatTour.meta.description')}
        />
        <meta
          name="keywords"
          content={t('pages.marmarisAllInclusiveBoatTour.meta.keywords')}
        />
        <link rel="canonical" href="http://www.unimartravel.com/marmaris-all-inclusive-boat-tour" />
      </Helmet>
      <div>
        <Container className="page">
          <Row>
            <Col xs="12" md="8" lg="8">
              <TourGeneralInformation
                title={t('pages.marmarisAllInclusiveBoatTour.title')}
                items={[
                  {
                    icon: ClockSvg,
                    title: t(
                      'pages.marmarisAllInclusiveBoatTour.tourGeneralInformation.time.title'
                    ),
                    description: t(
                      'pages.marmarisAllInclusiveBoatTour.tourGeneralInformation.time.description'
                    )
                  },
                  {
                    icon: CarSvg,
                    title: t(
                      'pages.marmarisAllInclusiveBoatTour.tourGeneralInformation.transfer.title'
                    ),
                    description: t(
                      'pages.marmarisAllInclusiveBoatTour.tourGeneralInformation.transfer.description'
                    )
                  },
                  {
                    icon: GuideSvg,
                    title: t(
                      'pages.marmarisAllInclusiveBoatTour.tourGeneralInformation.guide.title'
                    ),
                    description: t(
                      'pages.marmarisAllInclusiveBoatTour.tourGeneralInformation.guide.description'
                    )
                  },
                  {
                    icon: PaymentSvg,
                    title: t(
                      'pages.marmarisAllInclusiveBoatTour.tourGeneralInformation.payment.title'
                    ),
                    description: t(
                      'pages.marmarisAllInclusiveBoatTour.tourGeneralInformation.payment.description'
                    )
                  },
                  {
                    icon: DateSvg,
                    title: t(
                      'pages.marmarisAllInclusiveBoatTour.tourGeneralInformation.days.title'
                    ),
                    description: t(
                      'pages.marmarisAllInclusiveBoatTour.tourGeneralInformation.days.description'
                    )
                  },
                  {
                    icon: MealSvg,
                    title: t(
                      'pages.marmarisAllInclusiveBoatTour.tourGeneralInformation.meal.title'
                    ),
                    description: t(
                      'pages.marmarisAllInclusiveBoatTour.tourGeneralInformation.meal.description'
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
                adultPrice={t('pages.marmarisAllInclusiveBoatTour.price.adult')}
                childPrice={t('pages.marmarisAllInclusiveBoatTour.price.childPrice')}
                infantPrice={t('pages.marmarisAllInclusiveBoatTour.price.infantPrice')}
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs="12" md="8" lg="8">
              <p className="page__paragraph">
                {t('pages.marmarisAllInclusiveBoatTour.firstParagraph')}
              </p>
              <br />
              <List
                items={[
                  t('pages.marmarisAllInclusiveBoatTour.firstList.transfer'),
                  t('pages.marmarisAllInclusiveBoatTour.firstList.meal'),
                  t('pages.marmarisAllInclusiveBoatTour.firstList.sunbath'),
                  t('pages.marmarisAllInclusiveBoatTour.firstList.away')
                ]}
              />
              <br />
              <p className="page__paragraph">
                {t('pages.marmarisAllInclusiveBoatTour.secondParagraph')}
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
  return <p className="page__paragraph">{t('pages.marmarisAllInclusiveBoatTour.tourProgram')}</p>
}

const IncludedInTheFee = () => {
  const { t } = useTranslation()
  return (
    <List
      items={[
        t('pages.marmarisAllInclusiveBoatTour.includedInTheFee.freeTransfer'),
        t('pages.marmarisAllInclusiveBoatTour.includedInTheFee.meal'),
        t('pages.marmarisAllInclusiveBoatTour.includedInTheFee.limitlessOne'),
        t('pages.marmarisAllInclusiveBoatTour.includedInTheFee.limitlessTwo'),
        t('pages.marmarisAllInclusiveBoatTour.includedInTheFee.guide'),
        t('pages.marmarisAllInclusiveBoatTour.includedInTheFee.insurance')
      ]}
    />
  )
}

const notIncludedInTheFee = () => {
  const { t } = useTranslation()

  return (
    <List
      items={[
        t('pages.marmarisAllInclusiveBoatTour.notIncludedInTheFee.restOfBeverages'),
        t('pages.marmarisAllInclusiveBoatTour.notIncludedInTheFee.personalExpenses'),
        t('pages.marmarisAllInclusiveBoatTour.notIncludedInTheFee.privatePhotoVideo')
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
        t('pages.marmarisAllInclusiveBoatTour.frequentlyAskedQuestions.first'),
        t('pages.marmarisAllInclusiveBoatTour.frequentlyAskedQuestions.second'),
        t('pages.marmarisAllInclusiveBoatTour.frequentlyAskedQuestions.third'),
        t('pages.marmarisAllInclusiveBoatTour.frequentlyAskedQuestions.forth')
      ]}
      icon={QuestionMark}
    />
  )
}

export default MarmarisAllInclusiveBoatTour
