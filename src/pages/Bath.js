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
import Image1 from './assets/images/bath/1.jpg'
import Image2 from './assets/images/bath/2.jpg'
import Image3 from './assets/images/bath/3.jpg'
import Image4 from './assets/images/bath/4.jpg'
import Image5 from './assets/images/bath/5.jpg'
import Image6 from './assets/images/bath/6.jpg'
import Image7 from './assets/images/bath/7.jpg'
import Image8 from './assets/images/bath/8.jpg'
import Image9 from './assets/images/bath/9.jpg'
import Image10 from './assets/images/bath/10.jpeg'
import Image11 from './assets/images/bath/Bath-Home-Page.jpg'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

const Bath = () => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>{t('pages.bath.title')}</title>
        <meta name="description" content={t('pages.bath.meta.description')} />
        <meta name="keywords" content={t('pages.bath.meta.keywords')} />
        <link rel="canonical" href="http://www.unimartravel.com/bath" />
      </Helmet>
      <div>
        <Container className="page">
          <Row>
            <Col xs="12" md="8" lg="8">
              <TourGeneralInformation
                title={t('pages.bath.title')}
                items={[
                  {
                    icon: ClockSvg,
                    title: t('pages.bath.tourGeneralInformation.time.title'),
                    description: t('pages.bath.tourGeneralInformation.time.description')
                  },
                  {
                    icon: CarSvg,
                    title: t('pages.bath.tourGeneralInformation.transfer.title'),
                    description: t('pages.bath.tourGeneralInformation.transfer.description')
                  },
                  {
                    icon: GuideSvg,
                    title: t('pages.bath.tourGeneralInformation.guide.title'),
                    description: t('pages.bath.tourGeneralInformation.guide.description')
                  },
                  {
                    icon: PaymentSvg,
                    title: t('pages.bath.tourGeneralInformation.payment.title'),
                    description: t('pages.bath.tourGeneralInformation.payment.description')
                  },
                  {
                    icon: DateSvg,
                    title: t('pages.bath.tourGeneralInformation.days.title'),
                    description: t('pages.bath.tourGeneralInformation.days.description')
                  },
                  {
                    icon: MealSvg,
                    title: t('pages.bath.tourGeneralInformation.meal.title'),
                    description: t('pages.bath.tourGeneralInformation.meal.description')
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
                        Image9,
                        Image10,
                        Image11
                      ]}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs="12" md="4" lg="4">
              <BookNow
                adultPrice={t('pages.bath.price.adult')}
                childPrice={t('pages.bath.price.childPrice')}
                infantPrice={t('pages.bath.price.infantPrice')}
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs="12" md="8" lg="8">
              <p className="page__paragraph">{t('pages.bath.firstParagraph')}</p>
              <br />
              <List
                items={[
                  t('pages.bath.firstList.sauna'),
                  t('pages.bath.firstList.hot'),
                  t('pages.bath.firstList.oil')
                ]}
              />
              <br />
              <p className="page__paragraph">{t('pages.bath.secondParagraph')}</p>
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
  return <p className="page__paragraph">{t('pages.bath.tourProgram')}</p>
}

const IncludedInTheFee = () => {
  const { t } = useTranslation()
  return (
    <List
      items={[
        t('pages.bath.includedInTheFee.freeTransfer'),
        t('pages.bath.includedInTheFee.sauna'),
        t('pages.bath.includedInTheFee.pouch'),
        t('pages.bath.includedInTheFee.torn'),
        t('pages.bath.includedInTheFee.locked'),
        t('pages.bath.includedInTheFee.insurance')
      ]}
    />
  )
}

const notIncludedInTheFee = () => {
  const { t } = useTranslation()

  return (
    <List
      items={[
        t('pages.bath.notIncludedInTheFee.faceMask'),
        t('pages.bath.notIncludedInTheFee.otherMassage'),
        t('pages.bath.notIncludedInTheFee.beverages'),
        t('pages.bath.notIncludedInTheFee.privatePhotoVideo')
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
        t('pages.bath.frequentlyAskedQuestions.first'),
        t('pages.bath.frequentlyAskedQuestions.second'),
        t('pages.bath.frequentlyAskedQuestions.third'),
        t('pages.bath.frequentlyAskedQuestions.forth')
      ]}
      icon={QuestionMark}
    />
  )
}

export default Bath
