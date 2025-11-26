import React from 'react'
import schedule from '../assets/schedule.png'
import clean from '../assets/clean.png'
import feedback from '../assets/feedback.png'

const HowitWorks = () => {
    const works = [
        {id:1, image: schedule, option: "1. Schedule us", service:"We're available every day of the week with cleans beginning as early as 8am."},
        {id:2, image: clean, option: "2. We Clean", service:"We're available every day of the week with cleans beginning as early as 8am."},
        {id:3, image: feedback, option: "3. Give feedback", service:"We're available every day of the week with cleans beginning as early as 8am."}
    ]
  return (
    <section className='bg-[#F3F5FE] py-12 mt-10'>
        <h1 className='text-center text-[24px] font-semibold mb-8 md:text-[42px]'>How it Works?</h1>
        <div className=' container mx-auto md:grid grid-cols-3 gap-[67px]'>
            {works.map((work)=>{
                return(
                    <div key={work.id} className='text-center'>
                        <div className='flex justify-center items-center'>
                            <img src={work.image} alt="" className=' mb-[58px]'/>
                        </div> 
                        <h3 className='text-[32px] font-medium mb-[18px]'>{work.option}</h3>
                        <p className='text-[14px] mb-8 md:mb-0 md:text-[18px] md:leading-[35px]'>{work.service}</p>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default HowitWorks