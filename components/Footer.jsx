import React from 'react'
import logo from '../assets/icon-logo.png'

const Footer = () => {
    
  return (
    <section className='bg-[#31417F] text-[#D9DBE3] py-16'>
        <div className=' hidden md:block relative'>
            <div className=' w-full border border-white top-90 absolute'></div>
        </div>

        <div className='container w-11/12 mx-auto '>
            <div className='md:flex justify-between mb-8'>
                <div className='md:max-w-[556px]'>
                    <h1 className='text-[24px] font-semibold md:text-[50px] mb-4'>Professional Cleaning Services For Your Home</h1>
                </div>
                <div className='grid grid-cols gap-4 md:grid-cols-3 md:gap-30'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-[24px] font-semibold'>Company</h3>
                        <a href="">About</a>
                        <a href="">Data and privacy</a>
                        <a href="">Terms of service</a>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-[24px] font-semibold'>Quick Links</h3>
                        <a href="">Book Now</a>
                        <a href="">Sign In</a>
                        <a href="">FAQs</a>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-[24px] font-semibold'>Contact</h3>
                        <a href="">General Inquiries</a>
                        <a href="">Contact Support</a>
                    </div>
                </div>
                
            </div>

            <div className='max-w-[334px] '>
                    <form>
                        <label htmlFor="" className='text-[21px] font-semibold'>Get updates about CoBuilders</label>
                        <input type="text" name="email" id="email" placeholder='Email Address' className='w-[300px] p-2 border border-[#FFFCFC] rounded-[5px] mt-4'/>
                    </form>
            </div>

            

            <div className='md:flex justify-between items-center mt-8 md:mt-30'>
                <div>
                    <img src={logo} alt="" className='w-[200px] md:w-[500px]'/>
                </div>
                <div>
                    <p className='text-[12px]'>© 2025 CoBuilders, Ltd</p>
                </div>
            </div>
            
        </div>
    </section>
    
  )
}

export default Footer