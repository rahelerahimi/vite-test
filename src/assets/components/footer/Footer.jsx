import React from 'react'
import { BiSolidCircle } from 'react-icons/bi'
import { FaArrowRight } from 'react-icons/fa'
import { BsPlayFill } from 'react-icons/bs'
import { GrLinkedinOption } from 'react-icons/gr'

import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='purdash-footer'></div>
      <div className='grid-footer'>
        <div className='mr-2'>
          <figure className='logo-footer'>
            <img src='/images/logo.png' alt='logo' />
          </figure>
          <p className='text-footer'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, error.
          </p>
          <p className='my-2'>+1 994 556 4123</p>
          <ul className='soshial-footer flex '>
            <li>
              <BiSolidCircle />
            </li>
            <li>
              <BsPlayFill />
            </li>
            <li>
              <GrLinkedinOption />
            </li>
          </ul>
        </div>

        <div>
          <p className='title-footer'>quick access </p>
          <ul className='link-list-footer'>
            <li>
              <a href=''>gallery</a>
            </li>
            <li>
              <a href=''>category</a>
            </li>
            <li>
              <a href=''>about</a>
            </li>
          </ul>
        </div>

        <div>
          <p className='title-footer'>help center </p>
          <ul className='link-list-footer'>
            <li>
              <a href=''>login $ account</a>
            </li>
            <li>
              <a href=''>faq</a>
            </li>
            <li>
              <a href=''>contactt</a>
            </li>
          </ul>
        </div>

        <div>
          <p className='title-footer'>payment ways </p>
          <div className='link-list-footer pay'>
            <ul className='flex'>
              <li>
                <a href=''>
                  <img src='/images/paypal.png' alt='papal' />
                </a>
              </li>
              <li>
                <a href=''>
                  <img src='/images/visa.png' alt='visa' />
                </a>
              </li>
            </ul>

            <ul className='flex'>
              <li>
                <a href=''>
                  <img src='/images/pay.png' alt='pay' />
                </a>
              </li>
              <li>
                <a href=''>
                  <img src='/images/am.png' alt='pay' />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <p className='title-footer'>subscribe for news </p>
          <p className=' mt-5'>join us to know news!</p>
          <form action='' className=' relative mt-5'>
            <input type='text' name='email' id='' placeholder='email' />
            <button className='btn-form'>
              <FaArrowRight />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer
