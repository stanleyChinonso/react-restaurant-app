import React from 'react'
import { FaAddressCard, FaEnvelope, FaPhone, FaCopyright  } from "react-icons/fa";
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-head'>
            <div className='footer-content'>
                <div className='footer-heading'>
                    city foods&nbsp;<span>&mdash;&mdash;</span>
                </div>
                <div className='footer-details'>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Product</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className='footer-content'>
                <div className='footer-heading'>
                    contacts&nbsp;<span>&mdash;&mdash;</span>
                </div>
                <div className='footer-details'>
                    <div className='detail 1'>
                        <div className='icon'><FaAddressCard /></div>
                        <div className='icon-desc'><h4>15A Atinga diamond street, Lagos</h4></div>
                    </div>
                    <div className='detail 2'>
                        <div className='icon'><FaPhone /></div>
                        <div className='icon-desc'><h4>+2347035893886</h4></div>
                    </div>
                    <div className='detail 3'>
                        <div className='icon'><FaEnvelope /></div>
                        <div className='icon-desc'><h4>stancharlesdon@gmail.com</h4></div>
                    </div>

                </div>

            </div>
            <div className='footer-content'>
                <div className='footer-heading'>
                    openning&nbsp;<span>&mdash;&mdash;</span>
                </div>
                <div className='footer-details'>
                    <div className='details-headings'>
                        <h4>Monday &mdash; Saturdays</h4>
                        <h5>10AM - 9PM</h5>
                        <h4>Sunday</h4>
                        <h5>10AM - 6PM</h5>
                    </div>
                
                </div>
            </div>
            <div className='footer-content'>
                <div className='footer-heading'>
                    newsletter&nbsp;<span>&mdash;&mdash;</span>
                </div>
                <div className='footer-details'>
                    <div className='news-heading'>
                        <h5>
                            Get updated on our new dishes and delicious discounts by subscribing to our newsletter.
                        </h5>
                    </div>
                    <div>
                        <input type='email' placeholder='Your Email' ></input>
                    </div>
                    <div className='button-div'>
                        <button>sign up</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer-tail'>
            <div className='tail-desc'>
                <div><FaCopyright /></div> 
                <h5>For city foods: All right reserved</h5>
            </div>
            <div className='tail-desc tail-nav'>
                <h4>Home</h4>
                <h4>FAQ</h4>
            </div>
        </div>
        </div>
  )
}

export default Footer