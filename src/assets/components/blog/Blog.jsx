import React, { useRef, useState } from 'react';
import { dataBlog } from './data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import { Navigation } from 'swiper/modules';
import {BiSolidRightArrow,BiSolidLeftArrow} from "react-icons/bi";
import './blog.css';

const Blog = () => {
  return (
    <div className='parent-blog'>

     <p className='title-products'>blog</p>
     <p className='text-products'>read more on blog</p>
     <div>

     <Swiper
 navigation={{
     nextEl:".next-button ",
     prevEl:".prev-button ",
     disabledClass: 'ss',
  
   }}

 modules={[Navigation]}
 spaceBetween={20}
 slidesPerView={4}
 className="mySwiper">

  
{
          dataBlog.map((item)=>{
               return(
                    <SwiperSlide key={item.id} className='blog-item '>
                         <figure><img src={item.src} alt={item.name} />
                         </figure>

                         <div className='parent-cap-blog' >
                             
                    <p className='title-blog'>{item.title}</p>
                    <p className='text-blog'>{item.text}</p>
                         </div>
                    </SwiperSlide>
               )
          })
     }

<div  className='parent-slider-prev-next  absolute top-0 right-2   z-[100]'>
  <div className="next-button  ">
    <BiSolidLeftArrow />
   </div>
<div className="prev-button  ">
  <BiSolidRightArrow  />
</div></div> 

      </Swiper>
     </div>
     
    </div>
  )
}

export default Blog