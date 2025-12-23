import React from 'react'

import '../App.css';
import { Outlet } from 'react-router'
import Navbar from '../components/navbar'

const HomeLayout = () => {
  return (
    <div className='App'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default HomeLayout