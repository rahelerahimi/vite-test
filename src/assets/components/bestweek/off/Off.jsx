import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import './off.css';

const Off = () => {
  return (
    <div className='parent-off' >
      <figure ><img src="/images/image-21.jpg" alt="back-off" />
        <div className='perant-text-off'>
          <p>up to <span className='number-off'>50%</span> off</p>
          <p>every weekends</p>
          <p>yio can shop on weekends with discounts between 15 and 50 percent.</p>
          <div className='parent-link-icon'>
            <a href=""><span>set an alarm to be notified</span><span><BsArrowRight /></span></a>
          </div>
        </div>

      </figure>
    </div>
  )
}

export default Off