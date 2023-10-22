import React from 'react';
import { dataProduct } from './data';
import { BsBasket3 } from 'react-icons/bs';
import { AiFillStar,AiOutlineHeart } from 'react-icons/ai';
import { BiGitCompare} from 'react-icons/bi';

import './productitem.css'
const ProductItem = () => {
  return (
    <div>
<div className='parent-product-item'>
     {
          dataProduct.map((item)=>{
               return(
                    <div key={item.id} className='product-item relative '>
                         <figure><img src={item.src} alt={item.name} />
                         <div className='flex  justify-between absolute w-[100%] top-5 px-4  text-2xl text-blue-700'><span><AiOutlineHeart/></span><span><BiGitCompare/></span></div>
                         </figure>
                         <div className='p-5'>
                             
                         <div className='flex   justify-between ' >
                         <span className=' text-xl mt-5'><BsBasket3/></span>
                         <div className=' capitalize'>  
                          <p className=' text-gray-500 text-sm'>{item.text}</p>
                         <p className=' text-xl'> {item.name}</p>
                         </div>
                      
                         </div>
                         <div className='flex justify-end my-2'><span className='text-gray-500 text-sm'>{item.star}</span><span  className=' text-amber-500 text-xl  mr-1'><AiFillStar /></span></div>
                         <div className=' flex justify-between align-middle'>
                         <span className=' flex justify-start w-[50px] h-[30px] align-middle px-2 text-center border border-[#3a43c2] text-blue-800  '>{item.off}</span>
                         <div ><span className='text-gray-500 text-sm mr-1'>{item.price1}</span><span className=' font-bold'>{item.price2}</span></div>
                    
                         </div>
                         </div>
                    </div>
               )
          })
     }
    </div>
    </div>
  )
}

export default ProductItem