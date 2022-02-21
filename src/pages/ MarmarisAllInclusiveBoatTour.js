import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TourGeneralInformation from '../components/tour-general-information/TourGeneralInformation'
import Harbour from './assets/images/harbor.svg'
import CarSvg from './assets/images/car.svg'
import GuideSvg from './assets/images/guide.svg'
import ClockSvg from './assets/images/clock.svg'
import PaymentSvg from './assets/images/payment.svg'
import MealSvg from './assets/images/meal.svg'
import Carousel from '../components/carousel/Carousel'
import Boat1 from './assets/images/boat-1.jpeg'
import Boat2 from './assets/images/boat-2.jpeg'
import Boat3 from './assets/images/boat-3.jpeg'
import BookNow from '../modules/book-now/BookNow'
import TourProperties from '../components/tour-properties/TourProperties'
import List from '../components/list/List'
import Image1 from './assets/images/marmaris-all-inclusive-boat-tour/1.jpg'
import Image2 from './assets/images/marmaris-all-inclusive-boat-tour/2.jpg'
import Image3 from './assets/images/marmaris-all-inclusive-boat-tour/3.jpg'
import Image4 from './assets/images/marmaris-all-inclusive-boat-tour/4.png'
import Image5 from './assets/images/marmaris-all-inclusive-boat-tour/5.png'
import Image6 from './assets/images/marmaris-all-inclusive-boat-tour/6.png'
import Image7 from './assets/images/marmaris-all-inclusive-boat-tour/7.png'
import Image8 from './assets/images/marmaris-all-inclusive-boat-tour/8.jpg'
import { useTranslation } from 'react-i18next'

const MarmarisAllInclusiveBoatTour = () => {
  const { t } = useTranslation()
  return (
    <div>
      <Container className="page">
        <Row>
          <Col xs="12" md="8" lg="8">
            <div className="tour">
              <div className="tour__title">
                <h1>Tekne Turu - Her Şey Dahil</h1>
              </div>
              <TourGeneralInformation
                items={[
                  {
                    icon: ClockSvg,
                    title: 'Tur Saati',
                    description: '10.30 - 16.30'
                  },
                  {
                    icon: CarSvg,
                    title: 'Transfer',
                    description: 'Var'
                  },
                  {
                    icon: GuideSvg,
                    title: 'Rehber',
                    description: 'Var'
                  },
                  {
                    icon: PaymentSvg,
                    title: 'Ödeme',
                    description: 'Havale & Gelince Öde'
                  },
                  {
                    icon: Harbour,
                    title: 'Liman',
                    description: 'Marmaris'
                  },
                  {
                    icon: MealSvg,
                    title: 'Yemek',
                    description: 'Öğle Yemeği & Alkolsüz İçecek'
                  }
                ]}
              />
              <div>
                <Row>
                  <Col>
                    <Carousel
                      slides={[Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8]}
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col xs="12" md="4" lg="4">
            <BookNow adultPrice={12} childPrice={8} infantPrice={6} />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs="12" md="8" lg="8">
            <p>
              Akdeniz ve Ege’nin birleştiği eşsiz güzellikteki koylarda denizin ve güneşin tadını
              çıkarırken mavinin tonlarından büyüleyici bir güne hazır olun. Marmaris tekne turunda
              eğlenceyi ve tertemiz sularda yüzerek denizin tadını çıkartın.
            </p>
            <br />
            <p>
              Marmaris’in büyüleyici masmavi koylarını teknemizle keşfetmeye hazır mısınız? Gün boyu
              sınırsız içeceklerin ve öğle yemeğinin dahil olduğu turumuzda ayrıca sizi
              servislerimiz ile otelinizden de alıyoruz. Teknemiz 2 katlı olup, üst katımızda herkes
              için şezlonglar bulunmaktadır. Güneş, deniz ve eğlenceyi birleştiren bu turumuz size
              unutulmaz bir gün yaşatacaktır.
            </p>
            <br />
            <List
              items={[
                'Kalabalık sahillerden uzaklaşıp tekne deneyimi yaşama',
                'Sınırsız içeceklerin yanında tavuk,makarna ve salata öğlen yemeğimiz',
                'Marmaris’in her yerinden otelden alma ve bırakma',
                'Gün boyu güneşlenme, denize girme ve şnorkel yapabilme imkanı'
              ]}
            />
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="8" lg="8">
            <TourProperties tourProgram={TourProgram} includedInTheFee={IncludedInTheFee} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const TourProgram = () => {
  return (
    <p>
      Marmaris Günübirlik Tekne Turu Rotamız; Cennet Adasında fotoğraf molası , Akvaryum Koyunda
      yüzme molamız, Fosforlu Mağarada fotoğraf molası , Amos&Kumlubük’te yüzme molası, Turunç’ta
      iskeleye yanaşarak yüzme molası ve Turunç’u gezme şansı ve sahilden denize girme imkanı, Yeşil
      Deniz ise son yüzme molamızdır. Yüzme molalarımız 30 ile 45 er dakika arasında değişmektedir.
    </p>
  )
}

const IncludedInTheFee = () => {
  return (
    <p>
      Ücretsiz otel transferi - Öğle Yemeği – Limitsiz çay,kahve,su - Limitsiz kola,fanta,sprite -
      Türkçe rehberlik hizmeti - Tüm sigortalar
    </p>
  )
}

export default MarmarisAllInclusiveBoatTour
