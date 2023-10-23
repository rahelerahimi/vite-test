import React from 'react';
import { dataProduct } from './data';
import { BsBasket3 } from 'react-icons/bs';
import { AiFillStar,AiOutlineHeart } from 'react-icons/ai';
import { BiGitCompare} from 'react-icons/bi';

const ProductItem = () => {
  return (
    <div>
<div className='parent-product-item'>
     {
          dataProduct.map((item)=>{
               return(
                    <div key={item.id} className='product-item '>
                         <figure><img src={item.src} alt={item.name} />
                         <div className='flex-icon-hc'><span><AiOutlineHeart/></span> <span>{<BiGitCompare/>}</span> </div>
                         </figure>
                         <div className='p-5'>
                             
                         <div className='flex justify-between ' >
                         <span className=' text-xl mt-5'><BsBasket3/></span>
                         <div className=' capitalize'>  
                          <p className=' text-small '>{item.text}</p>
                        <a href=""> <p className=' text-xl'> {item.name}</p></a>
                         </div>
                      
                         </div>
                         <div className='parent-star'><span className='text-star '>{item.star}</span><span  className='star-icon '><AiFillStar /></span></div>
                         <div className='flex-price-off'>
                         <span className=' off'>{item.off}</span>
                         <div ><span className='price1 '>{item.price1}</span><span className=' font-bold'>{item.price2}</span></div>
                    
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