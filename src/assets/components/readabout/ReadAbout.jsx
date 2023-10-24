import React from 'react'
import { PiArrowLineUpRightLight } from 'react-icons/pi'
import './readabout.css'

const ReadAbout = () => {
  return (
    <div className='parent-read-about'>
      <div className='grow '>
        <div className=''>
          <p className='title-read-about '>read about persian souvenirs!!</p>
          <div className='flex justify-end'>
            <div className='box-read'>
              <a href=''>
                <span>join and read </span>
              </a>
              <span className='mt-2'>
                <PiArrowLineUpRightLight />
              </span>
            </div>
          </div>
        </div>
        <figure className='-mt-12'>
          <img src='/images/image-16.png' alt='image-iran' />
        </figure>
      </div>

      <div className='parent-r '>
        <p className='caption-right'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          fugit voluptas magni corporis praesentium expedita voluptatibus, error
          obcaecati eum provident! Temporibus accusantium sapiente facere
          architecto.
        </p>
        <figure>
          <img
            src='/images/image-15.png'
            alt='image-iran'
            className='w-[100%] h-[297px] mt-12'
          />
        </figure>
      </div>
    </div>
  )
}

export default ReadAbout
