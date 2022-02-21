import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from '../components/carousel/Carousel'
import Safari1 from './assets/images/safari-1.jpeg'
import Safari2 from './assets/images/safari-2.jpeg'
import Safari3 from './assets/images/safari-3.jpeg'
import TourProperties from '../components/tour-properties/TourProperties'
import BookNow from '../modules/book-now/BookNow'
import TourGeneralInformation from '../components/tour-general-information/TourGeneralInformation'

const JeepSafari = () => {
  return (
    <Container className="page">
      <Row>
        <Col xs="12" md="8" lg="8">
          <div className="tour">
            <div className="tour__title">
              <h1>Jeep Safari</h1>
            </div>
            <TourGeneralInformation />
            <div>
              <Row>
                <Col>
                  <Carousel slides={[Safari1, Safari2, Safari3]} />
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col xs="12" md="4" lg="4">
          <BookNow adultPrice={10} childPrice={8} infantPrice={6} />
        </Col>
      </Row>
      <div className="mt-2">
        <TourProperties />
      </div>
    </Container>
  )
}

export default JeepSafari
