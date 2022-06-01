import React from 'react'
import './box.css'
import Button from './Button'


const Box = () => {
  return (
    <div className='box'>
      <div className='box-content'>
        <div className='box-head'>
          <h1>
            Goodbye junk food.<br></br>
            Hello super healthy meals.
          </h1> 
        </div>
        <div className='button-box'>
          <Button />
          <Button />
        </div>
      </div>
    </div>

    
  )
}

export default Box