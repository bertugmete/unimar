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
import Image1 from './assets/images/sedir-island/1.jpg'
import Image2 from './assets/images/sedir-island/2.jpg'
import Image3 from './assets/images/sedir-island/3.jpg'
import Image4 from './assets/images/sedir-island/4.jpg'
import Image5 from './assets/images/sedir-island/5.jpg'
import Image6 from './assets/images/sedir-island/6.jpg'
import Image7 from './assets/images/sedir-island/7.jpg'
import Image8 from './assets/images/sedir-island/Sedir-Island-Home-Page.png'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

const SedirIsland = () => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>{t('pages.sedirIsland.title')}</title>
        <meta name="description" content={t('pages.sedirIsland.meta.description')} />
        <meta name="keywords" content={t('pages.sedirIsland.meta.keywords')} />
        <link rel="canonical" href="http://www.unimartravel.com/sedir-island" />
      </Helmet>
      <div>
        <Container className="page">
          <Row>
            <Col xs="12" md="8" lg="8">
              <TourGeneralInformation
                title={t('pages.sedirIsland.title')}
                items={[
                  {
                    icon: ClockSvg,
                    title: t('pages.sedirIsland.tourGeneralInformation.time.title'),
                    description: t('pages.sedirIsland.tourGeneralInformation.time.description')
                  },
                  {
                    icon: CarSvg,
                    title: t('pages.sedirIsland.tourGeneralInformation.transfer.title'),
                    description: t('pages.sedirIsland.tourGeneralInformation.transfer.description')
                  },
                  {
                    icon: GuideSvg,
                    title: t('pages.sedirIsland.tourGeneralInformation.guide.title'),
                    description: t('pages.sedirIsland.tourGeneralInformation.guide.description')
                  },
                  {
                    icon: PaymentSvg,
                    title: t('pages.sedirIsland.tourGeneralInformation.payment.title'),
                    description: t('pages.sedirIsland.tourGeneralInformation.payment.description')
                  },
                  {
                    icon: DateSvg,
                    title: t('pages.sedirIsland.tourGeneralInformation.days.title'),
                    description: t('pages.sedirIsland.tourGeneralInformation.days.description')
                  },
                  {
                    icon: MealSvg,
                    title: t('pages.sedirIsland.tourGeneralInformation.meal.title'),
                    description: t('pages.sedirIsland.tourGeneralInformation.meal.description')
                  }
                ]}
              />
              <div className="page__images">
                <Row>
                  <Col>
                    <Carousel
                      slides={[Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8]}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs="12" md="4" lg="4">
              <BookNow
                adultPrice={t('pages.sedirIsland.price.adult')}
                childPrice={t('pages.sedirIsland.price.childPrice')}
                infantPrice={t('pages.sedirIsland.price.infantPrice')}
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs="12" md="8" lg="8">
              <p className="page__paragraph">{t('pages.sedirIsland.firstParagraph')}</p>
              <br />
              <List
                items={[
                  t('pages.sedirIsland.firstList.transfer'),
                  t('pages.sedirIsland.firstList.meal'),
                  t('pages.sedirIsland.firstList.sunbath'),
                  t('pages.sedirIsland.firstList.gokova'),
                  t('pages.sedirIsland.firstList.away')
                ]}
              />
              <br />
              <p className="page__paragraph">{t('pages.sedirIsland.secondParagraph')}</p>
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
  return <p className="page__paragraph">{t('pages.sedirIsland.tourProgram')}</p>
}

const IncludedInTheFee = () => {
  const { t } = useTranslation()
  return (
    <List
      items={[
        t('pages.sedirIsland.includedInTheFee.freeTransfer'),
        t('pages.sedirIsland.includedInTheFee.meal'),
        t('pages.sedirIsland.includedInTheFee.beverages'),
        t('pages.sedirIsland.includedInTheFee.guide'),
        t('pages.sedirIsland.includedInTheFee.insurance')
      ]}
    />
  )
}

const notIncludedInTheFee = () => {
  const { t } = useTranslation()

  return (
    <List
      items={[
        t('pages.sedirIsland.notIncludedInTheFee.beverages'),
        t('pages.sedirIsland.notIncludedInTheFee.entranceFee'),
        t('pages.sedirIsland.notIncludedInTheFee.personalExpenses'),
        t('pages.sedirIsland.notIncludedInTheFee.privatePhotoVideo')
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
        t('pages.sedirIsland.frequentlyAskedQuestions.first'),
        t('pages.sedirIsland.frequentlyAskedQuestions.second'),
        t('pages.sedirIsland.frequentlyAskedQuestions.third')
      ]}
      icon={QuestionMark}
    />
  )
}

export default SedirIsland
