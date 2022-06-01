import React from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Contact2 = () => {
  return (
    <div className='contact2'>
        <div className='contact-item map'>
          <Wrapper /> 
          <h2>googlemapsto be displayed by react hooks</h2>
        </div>
        <div className='contact-item  form'>
          <form>
            <div className='contact-name'>
              <input type='text' placeholder= 'Your Name' required></input>
              <input type='email' placeholder= 'Your Email' required></input>
            </div>
            <input type='text' placeholder= 'Subject'></input>
            <textarea type='text' placeholder='Message'></textarea>
            <div className='form-submit'>
              <input type='submit' placeholder= 'Send Message'></input>
            </div>
          </form>
        </div>

      </div>
  )
}

export default Contact2