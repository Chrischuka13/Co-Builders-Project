import React, { useState } from 'react'
import image from '../assets/paystack.png'
import { useNavigate } from 'react-router-dom'


const Modal4 = () => {
    const redirect = useNavigate()
  const [info,setInfo] = useState({
    cardnumber: "",
    cardexpiry: "",
    cvv: ""
  })

  const [error, setError] = useState({
    cardnumber: "",
    cardexpiry: "",
    cvv: ""
  })

  const handleChange = (e)=>{
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
    setError({...error, [name]: ""})
  }

  const handleSubmit = (e) => {
   e.preventDefault()

   let hasError = false;

   const newError = {
    cardnumber: "",
    cardexpiry: "",
    cvv: ""
   };

   if (!info.cardnumber.trim()) {
    newError.cardnumber = "Card Number required"
    hasError = true;
   } else if (info.cardnumber < 12) {
    newError.cardnumber = "Card Number should be 12 character"
    hasError = true;
   }

   if (!info.cardexpiry.trim()) {
    newError.cardexpiry = "Card expiry required"
    hasError = true;
   }

   if (!info.cvv.trim()) {
    newError.cvv = "CVV required"
    hasError = true;
   }

   if (hasError) {
      setError(newError);
      return;
    }

    if (info.cardnumber && info.cardexpiry && info.cvv) {
    redirect("/appointments")
   }

    setInfo({
    cardnumber: "",
    cardexpiry: "",
    cvv: ""
    })

    setError({
    cardnumber: "",
    cardexpiry: "",
    cvv: ""
    })
  }
  return (
    <div className='bg-gray-300 h-screen place-items-center flex justify-center'>
      <form className='md:w-[450px] p-5 mx-auto pt-[30px] rounded-lg w-[350px] bg-white' onSubmit={handleSubmit}>
        <h1 className='text-center font-bold'>Payment</h1>
        <div className='flex justify-between mt-5'>
          <img src={image} alt="" className='w-[68px]'/>
          <div>
            <p className='text-sm text-gray-400'>emmanuel@paystack.com</p>
            <p className='text-end text-gray-400'>Pay <span className='text-black font-bold'>₦20,000</span></p>
          </div>
        </div>

         <h1 className='text-center mt-10'>Enter your card details to pay</h1>
          <div className='border-2 border-gray-300 p-2 mt-6 rounded-lg'>
            <p className='text-sm mb-1 text-gray-500'>CARD NUMBER</p>
            <input type="text" placeholder='0000 0000 0000 0000' className='w-full block outline-none' name='cardnumber'
          value={info.cardnumber} onChange={handleChange}/>
          </div>
           {error.cardnumber && <p className="text-red-500 mb-5 text-xs italic">{error.cardnumber}</p>}
          <div className='flex justify-between overflow-hidden gap-6 mt-6'>
           <div>
            <div className='border-2 border-gray-300 p-2 rounded-lg'>
              <p className='text-sm mb-1 text-gray-500'>CARD EXPIRY</p>
             <input type="text" placeholder='MM/YY' className='block w-full outline-none' name='cardexpiry' value={info.cardexpiry} onChange={handleChange}/>
            </div>
             {error.cardexpiry && <p className="text-red-500 mb-5 text-xs italic">{error.cardexpiry}</p>}
           </div>
           <div>
            <div className='border-2 border-gray-300 p-2 rounded-lg'>
              <p className='text-sm mb-1 text-gray-500'>CVV</p>
              <input type="text" placeholder='123' className='block w-full outline-none' name='cvv' value={info.cvv} onChange={handleChange}/>
            </div>
            {error.cvv && <p className="text-red-500 mb-5 text-xs italic">{error.cvv}</p>}
           </div>
          </div>
          {/* <div className='flex gap-28'>
           <div className='relative'>
             {error.cardexpiry && <p className="text-red-500 mb-5 text-xs italic">{error.cardexpiry}</p>}
           </div>
           <div className='relative w-full'>
             {error.cvv && <p className="text-red-500 mb-5 text-xs italic">{error.cvv}</p>}
           </div>
          </div> */}

        <div className='flex justify-center mt-10'>
          <button className='text-center bg-orange-600 text-gray-100 w-full p-2.5 rounded-lg cursor-pointer' onClick={handleSubmit}>Pay <span className='text-white font-bold'>₦20,000</span></button>
        </div>
      </form>
    </div>
  )
}

export default Modal4