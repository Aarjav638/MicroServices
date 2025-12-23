import React from 'react'

import '../css/signin.css';
import { Outlet } from 'react-router'
import background from '../assets/backGround.jpg'
const AuthLayout = () => {
  return (
    <div className='Auth'>
      <div className="ImageWrapper">
        <img src={background} alt='backgound' height={'100%'} width={'50%'}/>
      </div>
      
       <div className="content">
    <Outlet />
  </div>
    </div>
  )
}

export default AuthLayout