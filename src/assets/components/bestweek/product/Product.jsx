import React from 'react'
import {BsArrowRight } from 'react-icons/bs';
import {RiPriceTagFill } from 'react-icons/ri';

import './product.css'
const Product = () => {
  return (
    <div className='parent-product'>

      <div className=' product '>

        <div className='absulote-off'>
        <div className='size'><RiPriceTagFill/></div>
        <div><p className='size'>25%</p><p className='size'>1 day</p></div>
        </div>

        <figure ><img src="/images/image-05.png" alt="image-product" className='img-top' /></figure>
        <div className='parent-text-product'>
          <p  className='caption-product'>green jar</p>
          <p className='price-product'>$ 299</p>
          <a href="" className='buy-link-top'><span>buy now</span><span  className='buy-link-top-icon'><BsArrowRight/></span></a>
        </div>
      </div>
      


     <div className=' product  mt-5'>
       <p className='size off-product-bottom '>15%</p>
       <div className='flex flex-col'>
        <div className='mt-20 ml-4'>
          <p className='caption-product w-[120px]'>flower vase</p>
          <p className='price-product'>$ 299</p>
        </div>
        <a href="" className='buy-link-bottom' ><span>buy now</span><span className='buy-link-top-icon'><BsArrowRight/></span></a>
        </div>
        <figure><img src="/images/image-06.png" alt="image-product" className='img-top img-bottom'/></figure>
      </div>
   
    </div>
  )
}

export default Product