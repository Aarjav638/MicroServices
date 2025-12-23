import React from 'react'
import '../css/navbar.css'
import logo from '../logo.svg'
import { NavLink, useNavigate } from 'react-router'
const Navbar = () => {
    const navigation = useNavigate()
  return (
    <div className='nav'>
        <div className='logo-container'>
        <img src={logo} alt='' width={100} height={100}  />
        <span>My React App</span>
        </div>
        <ul>
           <NavLink to={'/'}> <li>
                Home
            </li></NavLink>
            <NavLink to={'/about'}> <li>
                About
            </li>
            </NavLink>
            <NavLink to={'/contact'}> <li>
                Contact
            </li>
            </NavLink>
            <NavLink to={'/products'}><li>
                Products
            </li></NavLink> 
        </ul>

        <button  onClick={()=>{
           navigation('/signIn')
        }} type='button' title='Sign In' >
            Sign In
            </button>
    </div>
  )
}

export default Navbar