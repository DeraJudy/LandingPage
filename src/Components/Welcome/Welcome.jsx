import React from 'react'
import './Welcome.css'

import Logo from '../../assets/N Logo.png'

const Welcome = () => {
  return (
    <div className='container'>

        <div className='image-container'>
            <img src={Logo} alt=""  className='image'/>
            <h2 className='image-text'>ThireNow</h2>
        </div>

        <div className='text-container'>
            <h2 className='big-text'>
                Unlock Your Tech Career Potential 
              
                <br /> Join the Future of Remote Work with ThireNow
            </h2>
          
            <p className='small-text'>
                Get AI-powered job matches, access free resources, 
                and be part of a thriving tech community.<br/>
                Be the First to Know - Join Our Exclusive Launch List!
            </p>
        </div>

        <div className='button-container'>
            <input className='input color' type="email" name="" id="" placeholder='sample@gmail.com' />
            <button className='btn'>Join Waitlist</button>
        </div>

    </div>

  )
}

export default Welcome

