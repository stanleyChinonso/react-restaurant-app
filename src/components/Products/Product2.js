import React from 'react'
import { FaCoffee, FaPizzaSlice, FaUtensils } from "react-icons/fa";
import { Link } from 'react-router-dom'
import './products.css'
import burger from '../Images/burger.jpg'
import cap from '../Images/cap3.jpg'
import carrot from '../Images/carrot.jpg'
import eggsauce from '../Images/eggsauce.jpg'
import hero from '../Images/hero.jpg'
import pizza from '../Images/pizza.jpg'
import pizzastew from '../Images/pizzastew.jpg'
import sausage from '../Images/sausage.jpg'
import backpizza from '../Images/back-customers.jpg'

const Product2 = () => {
  return (
    <div className='product2'>
        <div className='product2-head'>
          <h3>Delicious meals from city Foods</h3>
          <h2>Most Popular Delicacies</h2>
          <div className='product2-details'>
            <div className='details-box1'>  
              <div className='icons'>
                <Link to='/#'><FaCoffee /></Link>
              </div>
              <div className='headings'>
                <Link to='/#'><h6>popular</h6></Link>
                <Link to='/#'><h5>breakfast</h5></Link>
              </div>
            </div>
            <div className='details-box1'>
              <div className='icons'>
                <Link to='/#'><FaPizzaSlice /></Link>
              </div>
              <div className='headings'>
                <Link to='/#'><h6>special</h6></Link>
                <Link to='/#'><h5>lunch</h5></Link>
              </div>
            </div>
            <div className='details-box1'>
              <div className='icons'>
                <Link to='/#'><FaUtensils /></Link>
              </div>
              <div className='headings'>
                <Link to='/#'><h6>lovely</h6></Link>
                <Link to='/#'><h5>dinner</h5></Link>
              </div>
            </div>
          </div>                           
        </div>                              
        <div className="product2-body">
          <div className='body'>
            <div className='body1-box'>
              <div className='box-img'>
                <img src={burger} alt=''></img>
              </div>
              <div className='box-content'>
                <div className='content-head'>
                  <div className='content1'>
                    <h3>Fruit Combo</h3>
                  </div>
                  <div className='content-price'>
                    NGN 1,500
                  </div>
                </div>
                <div className='box-para'>
                  <p>The perfect fruit combination, just for you</p>
                </div>
              </div>
            </div>
            <div className='body1-box'>
              <div className='box-img'>
                <img src={carrot} alt=''></img>
              </div>
              <div className='box-content'>
                <div className='content-head'>
                  <div className='content1'>
                    <h3>Vegetable Pizza</h3>
                  </div>
                  <div className='content-price'>
                    NGN 1,200
                  </div>
                </div>
                <div className='box-para'>
                  <p>Six wonderful pieces of sliced pizza, with extra vegetables</p>
                </div>
              </div>
            </div>
            <div className='body1-box'>
              <div className='box-img'>
                <img src={eggsauce} alt=''></img>
              </div>
              <div className='box-content'>
                <div className='content-head'>
                  <div className='content1'>
                    <h3>Standard Lunch</h3>
                  </div>
                  <div className='content-price'>
                    NGN 5000
                  </div>
                </div>
                <div className='box-para'>
                  <p>A combination of different meals for your afternoon, Bon Apetite</p>
                </div>
              </div>
            </div>
            <div className='body1-box'>
              <div className='box-img'>
                <img src={hero} alt=''></img>
              </div>
              <div className='box-content'>
                <div className='content-head'>
                  <div className='content1'>
                    <h3>Pepperoni Pizza</h3>
                  </div>
                  <div className='content-price'>
                    NGN 2,200
                  </div>
                </div>
                <div className='box-para'>
                  <p>This combination with extra cheese is for those who have a high taste for awesomeness :)</p>
                </div>
              </div>
            </div>

          </div>
          <div className='body'>
          <div className='body1-box'>
              <div className='box-img'>
                <img src={pizza} alt=''></img>
              </div>
              <div className='box-content'>
                <div className='content-head'>
                  <div className='content1'>
                    <h3>Fruit Combo</h3>
                  </div>
                  <div className='content-price'>
                    NGN 1,500
                  </div>
                </div>
                <div className='box-para'>
                  <p>The perfect fruit combination, just for you</p>
                </div>
              </div>
            </div>
            <div className='body1-box'>
              <div className='box-img'>
                <img src={pizzastew} alt=''></img>
              </div>
              <div className='box-content'>
                <div className='content-head'>
                  <div className='content1'>
                    <h3>Vegetable Pizza</h3>
                  </div>
                  <div className='content-price'>
                    NGN 1,200
                  </div>
                </div>
                <div className='box-para'>
                  <p>Six wonderful pieces of sliced pizza, with extra vegetables</p>
                </div>
              </div>
            </div>
            <div className='body1-box'>
              <div className='box-img'>
                <img src={sausage} alt=''></img>
              </div>
              <div className='box-content'>
                <div className='content-head'>
                  <div className='content1'>
                    <h3>Standard Lunch</h3>
                  </div>
                  <div className='content-price'>
                    NGN 5000
                  </div>
                </div>
                <div className='box-para'>
                  <p>A combination of different meals for your afternoon, Bon Apetite</p>
                </div>
              </div>
            </div>
            <div className='body1-box'>
              <div className='box-img'>
                <img src={backpizza} alt=''></img>
              </div>
              <div className='box-content'>
                <div className='content-head'>
                  <div className='content1'>
                    <h3>Pepperoni Pizza</h3>
                  </div>
                  <div className='content-price'>
                    NGN 2,200
                  </div>
                </div>
                <div className='box-para'>
                  <p>This combination with extra cheese is for those who have a high taste for awesomeness :)</p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

    
  )
}

export default Product2