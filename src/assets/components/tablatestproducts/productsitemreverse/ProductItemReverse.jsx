import React from 'react'
import { dataProduct } from '../productsitem/data'
import { BsBasket3 } from 'react-icons/bs'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai'
import { FaExpandArrowsAlt } from 'react-icons/fa'

const ProductItemReverse = () => {
  return (
    <div>
      <div className='parent-product-item'>
        {dataProduct.slice(0, 5).map(item => {
          return (
            <div key={item.id} className='product-item '>
              <figure>
                <img src={item.src} alt={item.name} />
                <div className='flex-icon-hc '>
                  <span>{<FaExpandArrowsAlt />}</span>
                  <span>
                    <AiOutlineHeart />
                  </span>
                </div>
              </figure>
              <div className='p-5'>
                <div className='flex justify-between '>
                  <span className=' basket text-xl mt-5'>
                    <BsBasket3 />
                  </span>
                  <div className=' capitalize'>
                    <p className=' text-small '>{item.text}</p>
                    <a href=''>
               
                      <p className=' text-xl'> {item.name}</p>
                    </a>
                  </div>
                </div>
                <div className='parent-star'>
                  <span className='text-star '>{item.star}</span>
                  <span className='star-icon '>
                    <AiFillStar />
                  </span>
                </div>
                <div className='flex-price-off'>
                  <span className={item.hasOff ? 'off' : ' '}>{item.off}</span>
                  <div>
                  <span className={item.hasOff ? 'price1' : 'price2 '}>
                        {item.price1
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </span>
                      <span className='price2 '>
                        {item.price2
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductItemReverse
