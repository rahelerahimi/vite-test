import React from 'react'
import { PiAirplaneTilt } from 'react-icons/pi';
import { FaCaravan} from 'react-icons/fa';
import { AiOutlineUser} from 'react-icons/ai';


import './persianicon.css'
const PersianIcon = () => {
  return (
    <div className='Services'>

<div className='Services-box'>
  <p className='sercices-icon'><FaCaravan/></p>
  <p className='Services-title'>fast sending</p>
  <p p className='Services-text'>send your pack as soon as possible</p>
</div>



<div className='parent-box-small'>
  <div className='box-small'>
  <p className='box-small-icon'><AiOutlineUser/></p>
  <div>
    <p className='box-small-title'>7-days refund</p>
    <p className='Services-text'>refund takes a 7-days in maximum</p>
  </div>
  </div>

  <div className='box-small'>
  <p className='box-small-icon'><AiOutlineUser/></p>
  <div>
    <p className='box-small-title'>24/7 support</p>
    <p className='Services-text'>can contact  always as you want</p>
  </div>
    </div>
</div>


<div className='Services-box2'>
<p className='sercices-icon2'><AiOutlineUser/></p>
  <p className='Services-title'>crypto peyment</p>
  <p className='Services-text'>ability  to pay with crypto currency</p>
</div>


<div className='Services-box'>
<p  className='sercices-icon'><PiAirplaneTilt/></p>
<p className='Services-title2'>international shipping</p>
<p className='Services-text'>send as soon as possible </p>

</div>
    </div>
  )
}

export default PersianIcon