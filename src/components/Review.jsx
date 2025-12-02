import React, { useEffect, useState } from 'react'
import Davis from '../assets/davis.jpg'
import Mary from '../assets/mary.jpg'
import Stella from '../assets/stella.jpg'
import Fivestars from '../assets/icon-stars.png'
import { Link, useNavigate } from 'react-router-dom'


const Review = () => {
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
    
    const customers = [
        {id: 1, image: Davis, name: "Davis R.", reviewnote: "Wow i am so impressed with the Clenzers team..This is the first time i have had my home professionally cleaned and i can definitely say i will not hesitate to book with Cleanzers again...", rating: Fivestars},
        {id: 2, image: Mary, name: "Mary P.", reviewnote: "The quality of cleaning is excellent, they are dependable. I also feel very confident that my home is secure during their visits. Cleanzers is not inexpensive but they quality and peace of mind", rating: Fivestars},
        {id: 3, image: Stella, name: "Stella D.", reviewnote: "The Cleanzers personnel are professional, friendly, flexible and care about their clients. The products used are eco friendly products they are not toxic or damaging..I recommend Cleanzers any time", rating: Fivestars}
    ]

    const navigate = useNavigate()
    

  return (
        <section className='py-16 mt-10'>
        <h1 className='text-center text-[24px] font-semibold mb-8 md:text-[42px]'>What our Customers say about CoBuilders </h1>
        <div className='flex justify-center items-center mb-12'>
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
        
       
        <div className=' container mx-auto md:grid grid-cols-3 gap-5'>
            
            {customers.map((customer)=>{
                return(
                    <div key={customer.id} className='text-center p-4'>
                        <div className='flex justify-center items-center'>
                            <img src={customer.image} alt="" className='w-[78px] rounded-full mb-2'/>
                        </div> 
                        <h3 className='text-[32px] font-medium mb-[18px]'>{customer.name}</h3>
                        <p className='text-[16px] mb-8 md:mb-0 md:leading-8'>{customer.reviewnote}</p>
                        <div className='flex justify-center items-center mt-4 mb-8 md:mb-0'>
                            <img src={customer.rating} alt="" className='w-[136px]'/>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Review