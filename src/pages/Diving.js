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
import Image1 from './assets/images/diving/1.jpg'
import Image2 from './assets/images/diving/2.jpg'
import Image3 from './assets/images/diving/3.jpg'
import Image4 from './assets/images/diving/4.jpg'
import Image5 from './assets/images/diving/5.jpg'
import Image6 from './assets/images/diving/6.jpg'
import Image7 from './assets/images/diving/Diving-Home.jpeg'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

const Diving = () => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>{t('pages.diving.title')}</title>
        <meta name="description" content={t('pages.diving.meta.description')} />
        <meta name="keywords" content={t('pages.diving.meta.keywords')} />
        <link rel="canonical" href="http://www.unimartravel.com/diving" />
      </Helmet>
      <div>
        <Container className="page">
          <Row>
            <Col xs="12" md="8" lg="8">
              <TourGeneralInformation
                title={t('pages.diving.title')}
                items={[
                  {
                    icon: ClockSvg,
                    title: t('pages.diving.tourGeneralInformation.time.title'),
                    description: t('pages.diving.tourGeneralInformation.time.description')
                  },
                  {
                    icon: CarSvg,
                    title: t('pages.diving.tourGeneralInformation.transfer.title'),
                    description: t('pages.diving.tourGeneralInformation.transfer.description')
                  },
                  {
                    icon: GuideSvg,
                    title: t('pages.diving.tourGeneralInformation.guide.title'),
                    description: t('pages.diving.tourGeneralInformation.guide.description')
                  },
                  {
                    icon: PaymentSvg,
                    title: t('pages.diving.tourGeneralInformation.payment.title'),
                    description: t('pages.diving.tourGeneralInformation.payment.description')
                  },
                  {
                    icon: DateSvg,
                    title: t('pages.diving.tourGeneralInformation.days.title'),
                    description: t('pages.diving.tourGeneralInformation.days.description')
                  },
                  {
                    icon: MealSvg,
                    title: t('pages.diving.tourGeneralInformation.meal.title'),
                    description: t('pages.diving.tourGeneralInformation.meal.description')
                  }
                ]}
              />
              <div className="page__images">
                <Row>
                  <Col>
                    <Carousel
                      slides={[Image1, Image7, Image2, Image3, Image4, Image5, Image6, Image7]}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs="12" md="4" lg="4">
              <BookNow
                adultPrice={t('pages.diving.price.adult')}
                childPrice={t('pages.diving.price.childPrice')}
                infantPrice={t('pages.diving.price.infantPrice')}
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs="12" md="8" lg="8">
              <p className="page__paragraph">{t('pages.diving.firstParagraph')}</p>
              <br />
              <List
                items={[
                  t('pages.diving.firstList.underneathSee'),
                  t('pages.diving.firstList.suitable'),
                  t('pages.diving.firstList.equipment')
                ]}
              />
              <br />
              <p className="page__paragraph">{t('pages.diving.secondParagraph')}</p>
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
  return <p className="page__paragraph">{t('pages.diving.tourProgram')}</p>
}

const IncludedInTheFee = () => {
  const { t } = useTranslation()
  return (
    <List
      items={[
        t('pages.diving.includedInTheFee.freeTransfer'),
        t('pages.diving.includedInTheFee.meal'),
        t('pages.diving.includedInTheFee.equipment'),
        t('pages.diving.includedInTheFee.training'),
        t('pages.diving.includedInTheFee.guide'),
        t('pages.diving.includedInTheFee.insurance')
      ]}
    />
  )
}

const notIncludedInTheFee = () => {
  const { t } = useTranslation()

  return (
    <List
      items={[
        t('pages.diving.notIncludedInTheFee.beverages'),
        t('pages.diving.notIncludedInTheFee.personalExpenses'),
        t('pages.diving.notIncludedInTheFee.privatePhotoVideo')
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
        t('pages.diving.frequentlyAskedQuestions.first'),
        t('pages.diving.frequentlyAskedQuestions.second'),
        t('pages.diving.frequentlyAskedQuestions.third'),
        t('pages.diving.frequentlyAskedQuestions.forth')
      ]}
      icon={QuestionMark}
    />
  )
}

export default Diving
