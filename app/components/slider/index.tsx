import Image from 'next/image'
import Link from 'next/link'
import { A11y, Keyboard, Mousewheel, Navigation, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import slides from './slides.json'

const Slider = () => {
  const params = {
    slidesPerView: 4,
    touchStartPreventDefault: false,
    speed: 500
  }

  return (
    <div className='p-slider' style={{ opacity: 0 }}>
      <Swiper
        {...params} breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        680: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1024: {
          spaceBetween: 30,
          slidesPerView: 4
        }
      }} modules={[Navigation, Scrollbar, A11y, Keyboard, Mousewheel]} mousewheel={true} scrollbar={{ draggable: true }}
        keyboard={{ enabled: true }}>
        {slides?.map( (slide, index) => (
          <SwiperSlide key={index}>
            <div className='p-slide'>
              {slide.link != undefined && slide.image != undefined && (
                <>
                  <div className='p-slide__title'>{slide.desc}</div>
                  <Link rel='nofollow' href={slide.link} className='p-slide__link' data-cursor={slide.cursor}>
                    <Image quality={100} fill src={slide.image} alt='De-new' />
                  </Link>
                </>
              )}
            </div>
          </SwiperSlide>
        ) )}
      </Swiper>
    </div>
  )
}

export default Slider
