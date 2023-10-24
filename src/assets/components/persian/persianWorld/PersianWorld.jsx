import React from 'react'
import { PiArrowLineUpRightLight } from 'react-icons/pi';
import { MdStars } from 'react-icons/md';
import './Persianworld.css';

const PersianWorld = () => {
  return (
    <div>

      <div className='paret-world'>
        <div>
          <h1 className='title shadow-text'>persian things</h1>
          <div className='parent-textimg'>
            <div className='texticon'><p className='title'>world</p><span className='icon-title'><MdStars /></span></div>

            <div className='title-caption'>
              <p >a little about us</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quas sapiente voluptatem asperiores quia rerum nihil laborum repellat suscipit ducimus.</p>
            </div>
          </div>
        </div>



        <div >
          <div className='box box-blue'>
            <p >see theme</p>
            <p><PiArrowLineUpRightLight /></p>
          </div>
          <div className='box box-brown'>
            <p>about us</p>
            <p><PiArrowLineUpRightLight /></p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PersianWorld