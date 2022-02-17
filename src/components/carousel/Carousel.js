import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Navigation, EffectCoverflow } from 'swiper'

const Carousel = ({ slides }) => {
  return (
    <Swiper
      // pagination={true}
      // modules={[Pagination, Navigation]}
      // className="mySwiper"
      // slidesPerView={1}
      // spaceBetween={30}
      // loop={true}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"

    >
      {slides.map((slide, key) => (
        <SwiperSlide key={key}>
          <img src={slide} alt={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
