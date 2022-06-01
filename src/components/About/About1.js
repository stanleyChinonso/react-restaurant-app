import React from 'react'
import { Link } from 'react-router-dom'

const About1 = () => {
  return (
    <div className='about1'>
        <div className='about1-content'>
          <div className='about1-head'>
            <h1>about us</h1>
          </div>
          <div className='about1-links'>
            <Link to='/' className='link'>Home</Link>
            <Link to='/products' className='link'>Products</Link>
            <Link to='/contacts' className='link'>Contacts</Link>
          </div>

        </div>
    </div>
  )
}

export default About1