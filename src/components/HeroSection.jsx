import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MoonLoader } from "react-spinners";



const HeroSection = () => {

  const navigate = useNavigate()
  const[login, setIsLogIn] = useState(false)
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


 

  return (
    <section className='hero-image z-10 -mt-24'>
        <div className=' container mx-auto py-10'>
            <div className=' text-center pt-40 leading-[1.3] md:pt-70 md:h-[877px] md:px-[250px]'>
                <h3 className='text-[12px] font-semibold text-white md:text-[16px]'>The Number One Cleaning Services Solution</h3>
                <h1 className='text-[28px] font-semibold text-white mb-8 md:text-[60px]'>Professional Cleaning Services For Your Home</h1>
              
                <div className='flex justify-center items-center mt-14'>
                  {!isLoggedIn ? (
                    <button  className='flex items-center justify-center booknow-button transition'>
                    <span><Link to='signin'>Book Now</Link></span>
                    
                  </button>
                  ) : (
                    <button  className='flex items-center justify-center booknow-button transition'>
                    <span><Link to='dashboard'>Book Now</Link></span>
                    
                  </button>
                  ) }
                  
                  
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default HeroSection