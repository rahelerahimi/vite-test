import React from 'react'
import Product from '../product/Product';
import BestOffWeek from '../bestofweek/BestOffWeek';
import Off from '../off/Off';
const AllbestWeek = () => {
  return (
 
      <div className='flex justify-center   mx-auto w-[91%]  my-3'>
      <div  className='flex-none w-[22%]  '> <Product/></div>
      <div className='grow '>  <BestOffWeek /></div>
      <div className='flex-none w-[22%] '>   <Off  /></div>
    </div>
  )
}

export default AllbestWeek