import React from 'react'
import Button from '../Home/Button'
import About2img1 from './About2img1'
import About2img2 from './About2img2'

const About2 = () => {
  return (
    <div className='about2'>
        <div className='about2-content'>
          <About2img1 />
          <About2img2 />
          <About2img2 />
          <About2img1 />

          <div className='about-button'>
          <Button />
          </div>
  
        </div>
        <div className='about2-content'> 
        <div className='about2-desc'>
          <div>
            <h3>About Us<span>...</span></h3>
          </div>
          <div>
            <h2>City Food's story</h2>
          </div>
          <div>
            <p>
              CEO, Akpa Stanley, opened the first City Foods Restaurant in Ibadan on September 27,
              1977. Today, there are 37 branches all over West Africa. City Foods Restaurants are 
              well known with a substantial gathering of people including families, kids, 
              seniors, and business experts. Our benevolent condition is perfect for praising
              unique events, facilitating a business lunch, or assembling for a flavorful 
              dinner with loved ones. Open day by day for lunch and dinner, City Foods offers
              a choice of naturally arranged things utilizing just the best fixings 
              accessible.
            </p>
            <p>Our top picks incorporate crisp fish, rotisserie chicken, infant back
              pork ribs. New prepared pot pie, strength plates of mixed greens, 
              wood-let go pizzas, pasta, sandwiches, burgers, and more. 
              City Food's heated merchandise and treats including our Six-Layer
              Chocolate Motherlode Cake, Scratch Carrot Cake, and delectably rich 
              cream cheddar pies are prevalent top choices with our visitors.
            </p>
          </div>
            
          <div>
            <div></div>
            <div></div>
          </div>
          </div>
        </div>

        
    </div>
  )
}

export default About2
