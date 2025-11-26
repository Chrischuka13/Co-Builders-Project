import React from 'react'
import Bluetick from '../assets/bluetick.png'

const WhyUs = () => {
    const reasons = [
            {id:1, image: Bluetick, option: "Professionally Trained", service:"Our cleaning staff undergoes extensive one-on-one and ongoing training. You can be comfortable knowing there is a professional in your home."},
            {id:2, image: Bluetick, option: "Unbeatable Customer Service", service:"Our cleaning staff undergoes extensive one-on-one and ongoing training. You can be comfortable knowing there is a professional in your home."},
            {id:3, image: Bluetick, option: "Professionally Trained", service:"Our cleaning staff undergoes extensive one-on-one and ongoing training. You can be comfortable knowing there is a professional in your home."}
        ]
  return (
    <section className='py-20'>
        
        <h1 className='text-center text-[24px] font-semibold mb-12 md:text-[42px]'>why choose CoBuilders?</h1>
            <div className='w-11/12 container mx-auto md:grid grid-cols-3 gap-[67px] md:px-8 '>
            {reasons.map((reason)=>{
                return(
                    <div key={reason.id} className='text-center'>
                        <div className=' flex justify-center items-center'>
                            <img src={reason.image} alt="" className=' mb-6 w-[92px]'/>
                        </div> 
                        <h3 className='text-[24px] font-medium mb-2'>{reason.option}</h3>
                        <p className='text-[14px] mb-8 md:mb-0 md:text-[18px] md:leading-[27px]'>{reason.service}</p>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default WhyUs