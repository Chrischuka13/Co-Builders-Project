import React, { useEffect, useState } from 'react'
import deepcleaning from '../assets/Deep.jpg'
import standardcleaning from '../assets/Standard.jpg'
import movein from '../assets/Move-in.jpg'
import { Link, useNavigate } from 'react-router-dom'


const Services = () => {
      const[isLoggedIn, setIsLoggedIn] = useState(false)
     useEffect(()=>{
         const loggedIn = localStorage.getItem('isLoggedIn') === 'true'
        //  navigate('')
     
         if(loggedIn){
           setIsLoggedIn(true)
         } else {
           setIsLoggedIn(false)
         }
       }, []);

    const navigate = useNavigate();

  return (
    <section id='services'>
        <div className=' container mx-auto py-12'>
            <h1 className='text-center text-[24px] font-semibold mb-8 md:text-[42px]'>Explore all cleaning services at CoBuilders</h1>
            <div className='flex flex-col mb-10 md:flex-row'>
                <div className='bg-[#31417F] px-5 py-8 md:pt-[50px] md:px-[60px] text-white md:rounded-bl-[20px] md:rounded-tl-[20px] md:w-1/2'>
                    <h3 className='text-[24px] mb-8'>Deep Cleaning</h3>
                    <p className='text-[14px] mb-8  md:text-[19px] md:leading-[35px] font-light'>Give your home extra love with a Deep Cleaning from our excellent Cobuilders. Enjoy an in-depth cleaning and more thorough cleaning session that involves moving of furniture for better cleaning access</p>
                    {!isLoggedIn ? (
                    <button  className='flex items-center justify-center booknow-border transition'>
                    <span><Link to='signin'>Book Now</Link></span>
                    
                  </button>
                  ) : (
                    <button  className='flex items-center justify-center booknow-border transition'>
                    <span><Link to='dashboard'>Book Now</Link></span>
                    
                  </button>
                  ) }
                </div>
                
                <div className='md:w-1/2 '>
                    <img src={deepcleaning} alt="" className='md:rounded-tr-[20px] md:rounded-br-[20px]'/>
                </div>
            </div>

            <div className='flex flex-col mb-10 md:flex-row-reverse'>
                <div className='bg-[#ff5416] px-5 py-8 md:pt-[50px] md:px-[60px] text-white md:rounded-br-[20px] md:rounded-tr-[20px] md:w-1/2'>
                    <h3 className='text-[24px] mb-8'>Standard Cleaning</h3>
                    <p className='text-[14px] mb-8 md:text-[19px] md:leading-[35px] font-light'>Give your home extra love with a Standard Cleaning from our excellent Cobuilders. Enjoy an in-depth cleaning. This simple cleaning package targets major area of your home lLiving rooms, Kitchens, Bedrooms and Bathrooms.</p>
                    {!isLoggedIn ? (
                    <button  className='flex items-center justify-center booknow-border transition'>
                    <span><Link to='signin'>Book Now</Link></span>
                    
                  </button>
                  ) : (
                    <button  className='flex items-center justify-center booknow-border transition'>
                    <span><Link to='dashboard'>Book Now</Link></span>
                    
                  </button>
                  ) }
                </div>
                
                <div className='md:w-1/2'>
                    <img src={standardcleaning} alt="" className='md:rounded-tl-[20px] md:rounded-bl-[20px]'/>
                </div>
            </div>

            <div className='flex flex-col mb-10 md:flex-row'>
                <div className='bg-[#31417F] px-5 py-8 md:pt-[50px] md:px-[60px] text-white md:rounded-bl-[20px] md:rounded-tl-[20px] md:w-1/2'>
                    <h3 className='text-[24px] mb-8'>Move-in Cleaning</h3>
                    <p className='text-[14px] mb-8  md:text-[19px] md:leading-[35px] font-light'>Got yourself a new space?  Let’s help you get settled in with a thorough move-in Cleaning of your new home.</p>
                    {!isLoggedIn ? (
                    <button  className='flex items-center justify-center booknow-border transition'>
                    <span><Link to='signin'>Book Now</Link></span>
                    
                  </button>
                  ) : (
                    <button  className='flex items-center justify-center booknow-border transition'>
                    <span><Link to='dashboard'>Book Now</Link></span>
                    
                  </button>
                  ) }
                </div>
                
                <div className='md:w-1/2'>
                    <img src={movein} alt="" className='md:rounded-tr-[20px] md:rounded-br-[20px]'/>
                </div>
            </div>
        </div>
       
    </section>
  )
}

export default Services