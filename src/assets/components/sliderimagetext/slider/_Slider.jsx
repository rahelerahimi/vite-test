import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'
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
              nextEl: '.slider1-next-button ',
              prevEl: '.slider1-prev-button ',
              disabledClass: 'ss1'
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
                <SwiperSlide key={item.id} className='flex-text-img   mb-24'>
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

           
          </Swiper>
          <div className='parent-slider-prev-next  translate-x-[14.5%] -mt-12'>
              <div className='slider1-next-button icon-prev-next-slider '>
                <MdArrowBackIosNew />
              </div>
              <div className='slider1-prev-button icon-prev-next-slider'>
                <MdArrowForwardIos />
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default _Slider
