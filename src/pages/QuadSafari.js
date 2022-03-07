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
import Image1 from './assets/images/quad-safari/1.jpg'
import Image2 from './assets/images/quad-safari/2.jpg'
import Image3 from './assets/images/quad-safari/3.jpg'
import Image4 from './assets/images/quad-safari/4.jpg'
import Image5 from './assets/images/quad-safari/5.jpg'
import Image6 from './assets/images/quad-safari/6.jpg'
import Image7 from './assets/images/quad-safari/Quad-Safari-Home.jpg'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

const QuadSafari = () => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>{t('pages.quadSafari.title')}</title>
        <meta name="description" content={t('pages.quadSafari.meta.description')} />
        <meta name="keywords" content={t('pages.quadSafari.meta.keywords')} />
        <link rel="canonical" href="http://www.unimartravel.com/quad-safari" />
      </Helmet>
      <div>
        <Container className="page">
          <Row>
            <Col xs="12" md="8" lg="8">
              <TourGeneralInformation
                title={t('pages.quadSafari.title')}
                items={[
                  {
                    icon: ClockSvg,
                    title: t('pages.quadSafari.tourGeneralInformation.time.title'),
                    description: t('pages.quadSafari.tourGeneralInformation.time.description')
                  },
                  {
                    icon: CarSvg,
                    title: t('pages.quadSafari.tourGeneralInformation.transfer.title'),
                    description: t('pages.quadSafari.tourGeneralInformation.transfer.description')
                  },
                  {
                    icon: GuideSvg,
                    title: t('pages.quadSafari.tourGeneralInformation.guide.title'),
                    description: t('pages.quadSafari.tourGeneralInformation.guide.description')
                  },
                  {
                    icon: PaymentSvg,
                    title: t('pages.quadSafari.tourGeneralInformation.payment.title'),
                    description: t('pages.quadSafari.tourGeneralInformation.payment.description')
                  },
                  {
                    icon: DateSvg,
                    title: t('pages.quadSafari.tourGeneralInformation.days.title'),
                    description: t('pages.quadSafari.tourGeneralInformation.days.description')
                  },
                  {
                    icon: MealSvg,
                    title: t('pages.quadSafari.tourGeneralInformation.meal.title'),
                    description: t('pages.quadSafari.tourGeneralInformation.meal.description')
                  }
                ]}
              />
              <div className="page__images">
                <Row>
                  <Col>
                    <Carousel slides={[Image1, Image2, Image3, Image4, Image5, Image6, Image7]} />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs="12" md="4" lg="4">
              <BookNow
                adultPrice={t('pages.quadSafari.price.adult')}
                childPrice={t('pages.quadSafari.price.childPrice')}
                infantPrice={t('pages.quadSafari.price.infantPrice')}
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs="12" md="8" lg="8">
              <p className="page__paragraph">{t('pages.quadSafari.firstParagraph')}</p>
              <br />
              <List
                items={[
                  t('pages.quadSafari.firstList.atv'),
                  t('pages.quadSafari.firstList.mounth'),
                  t('pages.quadSafari.firstList.pickUp')
                ]}
              />
              <br />
              <p className="page__paragraph">{t('pages.quadSafari.secondParagraph')}</p>
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
  return <p className="page__paragraph">{t('pages.quadSafari.tourProgram')}</p>
}

const IncludedInTheFee = () => {
  const { t } = useTranslation()
  return (
    <List
      items={[
        t('pages.quadSafari.includedInTheFee.freeTransfer'),
        t('pages.quadSafari.includedInTheFee.atv'),
        t('pages.quadSafari.includedInTheFee.security'),
        t('pages.quadSafari.includedInTheFee.guide'),
        t('pages.quadSafari.includedInTheFee.insurance')
      ]}
    />
  )
}

const notIncludedInTheFee = () => {
  const { t } = useTranslation()

  return (
    <List
      items={[
        t('pages.quadSafari.notIncludedInTheFee.beverages'),
        t('pages.quadSafari.notIncludedInTheFee.personalExpenses'),
        t('pages.quadSafari.notIncludedInTheFee.privatePhotoVideo')
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
        t('pages.quadSafari.frequentlyAskedQuestions.first'),
        t('pages.quadSafari.frequentlyAskedQuestions.second'),
        t('pages.quadSafari.frequentlyAskedQuestions.third')
      ]}
      icon={QuestionMark}
    />
  )
}

export default QuadSafari
