import React from 'react'
import { FaCoffee, FaPizzaSlice, FaUtensils } from "react-icons/fa";
import { Link } from 'react-router-dom'
import './products.css'

import Footer from '../Footer/Footer';
import Product2 from './Product2';

const Products = () => {
  return (
    <div className='products'>
      <div className='products1'>
        <div className='products1-content'>
          <h1>city foods amazing menu</h1>
          <div className='product1-links'>
            <Link to='/' className='link'>Home</Link>
            <Link to='/about' className='link'>About</Link>
            <Link to='/contacts' className='link'>Contacts</Link>
          </div>
        </div>
      </div>
      <Product2 />
      <Footer />
                                          
 
                                                 
    </div>
  )
  
}





export default Products