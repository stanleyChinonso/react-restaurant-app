import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/logo.png'

import './navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo}></img>
      </div>
      <ul className='nav-links'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About us</Link>
        </li>
        <li>
          <Link to='/products'>Products</Link>
        </li>
        <li>
          <Link to='/contacts'>Contacts</Link>
        </li>
      </ul>  
    </div>
  )
}






export default Navbar