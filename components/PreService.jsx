import React from 'react'
import shield from '../assets/icon-verified.png'
import tick from '../assets/icon-check.png'
import checkbox from '../assets/icon-checkbox.png'
import fivestars from '../assets/icon-stars.png'

const PreService = () => {
    const reliables = [
        {id: 1, image: shield, service: "Trusted" , pros: "Reliable vetted pros."},
        {id: 2, image: tick, service: "Guarantee" , pros: "Reliable vetted pros."},
        {id: 3, image: checkbox, service: "Bond and insured" , pros: "Reliable vetted pros."},
        {id: 4, image: fivestars, service: "5 Star Rated Service" , pros: "Reliable vetted pros."},

    ]
  return (
    <section className='w-10/12 container mx-auto py-[30px] flex flex-col md:justify-between md:flex-row'>
      {reliables.map((reliable)=>{
        return(
          <div className='text-center' key={reliable.id}>
            <div className='flex justify-center items-center  '>
              <img src={reliable.image} alt="" className='' />
            </div>
            <h1 className='text-[24px] font-bold'>{reliable.service}</h1>
            <span className='text-[14px] font-normal'>{reliable.pros}</span>
          </div>
        )
      })}
    </section>
  )
}

export default PreService