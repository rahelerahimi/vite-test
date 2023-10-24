import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import './_slider.css'
import { dataSliderItem } from './dataSlider'
import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md'

const _Slider = () => {
  return (
    <>
      <div className='bg-slider'>
        <div className='pusdash-bg'></div>
        <div className='parentslider  '>
          <Swiper
            navigation={{
              nextEl: '.next-button ',
              prevEl: '.prev-button ',
              disabledClass: 'ss'
            }}
            pagination={{
              clickable: true
            }}
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            className='mySwiper'
          >
            {dataSliderItem.map(item => {
              return (
                <SwiperSlide key={item.id} className='flex-text-img '>
                  <div className=' parent-text-slider '>
                    <p className='text-bold-slider'>{item.text1}</p>
                    <p className='text-small-slider'>{item.text2}</p>
                    <a href=''>
                      <button className='btn-slider'>see theme </button>
                    </a>
                  </div>
                  <figure>
                    <img src={item.src} alt={item.alt} />
                  </figure>
                </SwiperSlide>
              )
            })}

            <div className='parent-slider-prev-next'>
              <div className='next-button icon-prev-next-slider '>
                <MdArrowBackIosNew />
              </div>
              <div className='prev-button  icon-prev-next-slider'>
                <MdArrowForwardIos />
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default _Slider
