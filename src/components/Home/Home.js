import React from 'react'
import About2 from '../About/About2'
import About3 from '../About/About3'
import Contact2 from '../Contacts/Contact2'
import Footer from '../Footer/Footer'
import Product2 from '../Products/Product2'
import Box from './Box'
import Service from './Service'

const Home = () => {
  return (
    
    <div className='homepage'>
      <Box />
      <Service  />
      <About2 />
      <About3 />
      <Product2 />
      <Contact2 />
      <Footer />
    </div>
  )
}






export default Home