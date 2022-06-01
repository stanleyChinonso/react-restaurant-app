import React from 'react'
import './services.css'
import {  FaUtensils, FaDolly, FaHeadset, FaUserTie } from "react-icons/fa";

const Service = () => {
  return (
    <div className='services'>
        <div className='service-head'>
          <h2>our services</h2>
        </div>
        <div className='service-body'>
          <div className='body-content'>
            <div className='service-icons'>
                <FaUserTie />
            </div>
            <div className='service-heading'>
              <h3>chief cheff</h3>
            </div>
            <div className='service-para'>
              <p>
                We hire only the best chefs in Africa. All of whom undergo a 6 months training under our chief chef, who is non other than Mr. Stanley Akpa, Award winner of the Nigerian Men can cook award 2002
              </p>
            </div>
          </div>
          <div className='body-content'>
            <div className='service-icons'>
                <FaUtensils />
            </div>
            <div className='service-heading'>
              <h3>healthy meal</h3>
            </div>
            <div className='service-para'>
              <p>
               We use only the healthiest methods to cook our foods. Routine cleanups have also been set up for our equipments, utensils, furnitures and co.
              </p>
            </div>
          </div>
          <div className='body-content'>
            <div className='service-icons'>
                <FaDolly />
            </div>
            <div className='service-heading'>
              <h3>online order</h3>
            </div>
            <div className='service-para'>
              <p>
                You can now get your meals delivered to your doorstep by placing your orders on our website or mobile app.
              </p>
            </div>
          </div>
          <div className='body-content'>
            <div className='service-icons'>
                <FaHeadset />
            </div>
            <div className='service-heading'>
              <h3>customer care</h3>
            </div>
            <div className='service-para'>
              <p>
                Any issues? We will resolve them as soon as they appear with our hardworking Customer support team who are made available to you 24/7
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Service