import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsBasket2Fill } from 'react-icons/bs';
import {AiOutlineUser } from 'react-icons/ai';
import './menu.css';

const Menu = () => {
  return (
    <div>

     <nav className='nav-style'>
          <figure><img src="/images/logo.png" alt="logo" /></figure>
          <ul className='menu'>
          
               <li>Home</li>
               <li>Gallery</li>
               <li>Category</li>
               <li>About</li>
               <li>Contact</li>
          </ul>

          <div>
          <ul className='soshial'>
               <li><FiSearch/></li>
               <li>En</li>
               <li><BsBasket2Fill/></li>
               <li><AiOutlineUser/></li>
              
          </ul> 
          </div>
     </nav>
    </div>
  )
}

export default Menu