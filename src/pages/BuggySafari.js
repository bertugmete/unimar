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
import Image1 from './assets/images/buggy-safari/1.jpeg'
import Image2 from './assets/images/buggy-safari/2.jpg'
import Image3 from './assets/images/buggy-safari/3.jpeg'
import Image4 from './assets/images/buggy-safari/4.jpg'
import Image5 from './assets/images/buggy-safari/5.jpg'
import Image6 from './assets/images/buggy-safari/6.jpg'
import Image11 from './assets/images/buggy-safari/BuggySafari-HomePage.jpg'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

const BuggySafari = () => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>{t('pages.buggySafari.title')}</title>
        <meta name="description" content={t('pages.buggySafari.meta.description')} />
        <meta name="keywords" content={t('pages.buggySafari.meta.keywords')} />
        <link rel="canonical" href="http://www.unimartravel.com/buggy-safari" />
      </Helmet>
      <div>
        <Container className="page">
          <Row>
            <Col xs="12" md="8" lg="8">
              <TourGeneralInformation
                title={t('pages.buggySafari.title')}
                items={[
                  {
                    icon: ClockSvg,
                    title: t('pages.buggySafari.tourGeneralInformation.time.title'),
                    description: t('pages.buggySafari.tourGeneralInformation.time.description')
                  },
                  {
                    icon: CarSvg,
                    title: t('pages.buggySafari.tourGeneralInformation.transfer.title'),
                    description: t('pages.buggySafari.tourGeneralInformation.transfer.description')
                  },
                  {
                    icon: GuideSvg,
                    title: t('pages.buggySafari.tourGeneralInformation.guide.title'),
                    description: t('pages.buggySafari.tourGeneralInformation.guide.description')
                  },
                  {
                    icon: PaymentSvg,
                    title: t('pages.buggySafari.tourGeneralInformation.payment.title'),
                    description: t('pages.buggySafari.tourGeneralInformation.payment.description')
                  },
                  {
                    icon: DateSvg,
                    title: t('pages.buggySafari.tourGeneralInformation.days.title'),
                    description: t('pages.buggySafari.tourGeneralInformation.days.description')
                  },
                  {
                    icon: MealSvg,
                    title: t('pages.buggySafari.tourGeneralInformation.meal.title'),
                    description: t('pages.buggySafari.tourGeneralInformation.meal.description')
                  }
                ]}
              />
              <div className="page__images">
                <Row>
                  <Col>
                    <Carousel slides={[Image1, Image2, Image3, Image4, Image5, Image6, Image11]} />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs="12" md="4" lg="4">
              <BookNow
                adultPrice={t('pages.buggySafari.price.adult')}
                childPrice={t('pages.buggySafari.price.childPrice')}
                infantPrice={t('pages.buggySafari.price.infantPrice')}
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs="12" md="8" lg="8">
              <p className="page__paragraph">{t('pages.buggySafari.firstParagraph')}</p>
              <br />
              <List
                items={[
                  t('pages.buggySafari.firstList.guide'),
                  t('pages.buggySafari.firstList.experience'),
                  t('pages.buggySafari.firstList.program')
                ]}
              />
              <br />
              <p className="page__paragraph">{t('pages.buggySafari.secondParagraph')}</p>
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
  return <p className="page__paragraph">{t('pages.buggySafari.tourProgram')}</p>
}

const IncludedInTheFee = () => {
  const { t } = useTranslation()
  return (
    <List
      items={[
        t('pages.buggySafari.includedInTheFee.freeTransfer'),
        t('pages.buggySafari.includedInTheFee.atv'),
        t('pages.buggySafari.includedInTheFee.safetyEquipment'),
        t('pages.buggySafari.includedInTheFee.guide'),
        t('pages.buggySafari.includedInTheFee.insurance')
      ]}
    />
  )
}

const notIncludedInTheFee = () => {
  const { t } = useTranslation()

  return (
    <List
      items={[
        t('pages.buggySafari.notIncludedInTheFee.beverages'),
        t('pages.buggySafari.notIncludedInTheFee.personalExpenses'),
        t('pages.buggySafari.notIncludedInTheFee.privatePhotoVideo')
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
        t('pages.buggySafari.frequentlyAskedQuestions.first'),
        t('pages.buggySafari.frequentlyAskedQuestions.second'),
        t('pages.buggySafari.frequentlyAskedQuestions.third')
      ]}
      icon={QuestionMark}
    />
  )
}

export default BuggySafari
