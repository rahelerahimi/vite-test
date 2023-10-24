

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import { Navigation } from 'swiper/modules';
import { dataProduct } from '../tablatestproducts/productsitem/data';
import { BsBasket3 } from 'react-icons/bs';
import { AiFillStar,AiOutlineHeart } from 'react-icons/ai';
import {BiSolidRightArrow,BiSolidLeftArrow} from "react-icons/bi";
import { FaExpandArrowsAlt} from 'react-icons/fa';
import './bestselling.css'

const BestSelling = () => {
  return (
    <div  className='parent-best-selling  relative'>
  <p  className='title-products'>best sellings</p>
  <p className='text-products'> Lorem ipsum dolor sit amet.</p>

<div  className='mt-10 '>

<Swiper
 navigation={{
  nextEl:".next-button ",
  prevEl:".prev-button ",
  disabledClass: 'ss',

}}

 modules={[Navigation]}
 slidesPerView={5}
 className="mySwiper grid grid-cols-5 gap-0">

<div  className='parent-slider-prev-next  absolute top-0 right-2   z-[1000] ' >
  <div className="next-button  ">
    <BiSolidLeftArrow />
   </div>
<div className="prev-button  ">
  <BiSolidRightArrow  />
</div></div>

  
{
          dataProduct.map((item)=>{
               return(
                    <SwiperSlide key={item.id} className='product-item '>
                         <figure><img src={item.src} alt={item.name}  className='h-[100%]'/>
                         <div className='flex-icon-hc flex-row-reverse'>
                         <span>{<FaExpandArrowsAlt/>}</span> 
                          <span><AiOutlineHeart/></span>
                   
                           </div>
                         </figure>
                         <div className='p-5'>
                             
                         <div className='flex justify-between flex-row-reverse ' >
                         <span className='basket text-xl mt-5'><BsBasket3/></span>
                         <div className=' capitalize'>  
                          <p className=' text-small '>{item.text}</p>
                        <a href=""> <p className=' text-xl'> {item.name}</p></a>
                         </div>
                      
                         </div>
                         <div className='parent-star-l'>
                         <span  className='star-icon '><AiFillStar /></span>
                          <span className='text-star '>{item.star}</span>
                          </div>
                         <div className='flex-price-off flex-row-reverse'>
                         <span   className={item.hasOff ? "off" : " "}>{item.off}</span>
                         <div ><span className='price1 '>{item.price1}</span><span className=' font-bold'>{item.price2}</span></div>
                    
                         </div>
                         </div>
                    </SwiperSlide>
               )
          })
     }


 
      </Swiper>
</div>

    </div>
  )
}

export default BestSelling