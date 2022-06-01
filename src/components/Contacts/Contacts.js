import React from 'react'
import { Link } from 'react-router-dom'

import './contact.css'
import Footer from '../Footer/Footer';
import Contact2 from './Contact2';

const Contacts = () => {
  return (
    <div className='contact'>
      <div className='contact1'>
        <div className='contact1-content'>
          <div className='contact1-head'>
            <h1>contact us</h1>
          </div>
          <div className='about1-links'>
            <Link to='/' className='link'>Home</Link>
            <Link to='/products' className='link'>Products</Link>
            <Link to='/about' className='link'>About</Link>
          </div>

        </div>
      </div>
      <Contact2 />
      <Footer />
    </div>
  )
}




export default Contacts