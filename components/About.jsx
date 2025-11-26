import React from 'react'
import AboutUs from '../assets/Aboutus.jpg'

const About = () => {
  return (
    <section id='about'>
      <div className='w-11/12 container mx-auto py-8'>
        <h1 className='text-center text-[24px] font-semibold mb-8 md:text-[42px]'>About CoBuilders</h1>
        <div className='flex flex-col md:flex-row gap-[54px]'>
          <div className='md:w-3/4'>
            <img src={AboutUs} alt="" className='md:rounded-[20px] '/>
          </div>
          <div className=' md:w-1/2 md:py-20'>
            <h3 className='text-[24px] font-regular  md:text-[42px]'>Who we are</h3>
            <p className='text-[14px] mb-8 md:text-[19px] md:leading-[35px]'>At CoBuilders, we are dedicated to providing top-quality cleaning services that leave your home spotless and refreshed. With a team of highly trained professionals and eco-friendly cleaning solutions, we ensure a healthier and more comfortable living space for you and your family..... </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About