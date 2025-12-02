import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import logo from '../assets/icon-logo.png'
import Calendar from '../assets/solar_calendar.png'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
 

function Navbar() {
  const[isOpen, setIsOpen] = useState(false)
  const[login, setIsLogIn] = useState(false)
  const[isLoggedIn, setIsLoggedIn] = useState(false)
  const[userName, setUserName] = useState('')
  const navigate = useNavigate()
  

  useEffect(()=>{
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true'
    const name = localStorage.getItem('userName')

    if(loggedIn && name){
      setIsLoggedIn(true)
      setUserName(name)
    } else {
      setIsLoggedIn(false)
    }
  }, []);

  const handleLogOut = () =>{
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('username')
    setIsLoggedIn(false)
    // navigate('/signin')
  };
  

  return (
    <header id="nav">
      <nav className='bg-gray-600 shadow-md w-full '>
        <div className=' container mx-auto p-5 flex justify-between items-center'>
          <img src={logo} alt="" className="w-[100px] md:w-[158px] hover:cursor-pointer"/>
          <div className="flex gap-30">
            <div className='hidden md:flex gap-10 items-center text-[18px]'>
                <a href="#" className='text-white hover:cursor-pointer hover:underline'>Home</a>
                <a href="#services" className='text-white hover:cursor-pointer hover:underline'>Services</a>
                <a href="#about" className='text-white hover:cursor-pointer hover:underline'>About</a>
                <a href="#faq" className='text-white hover:cursor-pointer hover:underline'>FAQ</a>
            </div>
            <div className="flex gap-[17px]">
              
                {!isLoggedIn ? (
                  <div className='hidden md:block'>
                  <button onClick={()=> setIsLogIn(!login)} className='flex items-center justify-center gap-2 booknow-border'>
                    <span className="text-[16px]">Book Now</span>
                    <span>
                      <img src="assets/solar_calendar.png" alt="" className="w-[24px]" />
                    </span>
                  </button>
                </div>
                ) : (
                    <div className='hidden md:block'>
                  <button className='flex items-center justify-center gap-2 border border-white rounded-[10px] p-3 text-white font-white max-w-[203px] hover:cursor-pointer'>
                    <span className="text-[16px]"><Link to='dashboard'>Your Bookings</Link></span>
                    <span>
                      <img src="assets/solar_calendar.png" alt="" className="w-[24px]" />
                    </span>
                    
                  </button>
                </div>
                )}
                
                {!isLoggedIn ? (
                  <div className='hidden md:block'>
                  <button  className='flex items-center justify-center signin-button'>
                    <span className="text-[16px]"><Link to='signin'> Sign Up</Link></span>
                  </button>
                </div>
                ) : (
                  <div className='hidden md:block'>
                  <button onClick={handleLogOut} className='flex items-center justify-center bg-[#ff5416] p-3 rounded-[10px] text-white font-bold max-w-[218px] hover:cursor-pointer'>
                    <span className="text-[16px]">Hello {userName}</span>
                    <span>
                      <img src="assets/keyboard_arrow_down.png" alt="" className=""/>
                    </span>
                  </button>
                </div>
                )}
               
             
            </div>
          </div>

          <button onClick={()=> setIsOpen(!isOpen)} className="md:hidden">
            {isOpen? <X className="text-white"/> : <Menu className="text-white"/>}
             
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white p-4 space-y-2 mb-24">
            <a href="#" className="block text-gray-600 pt-4">
              Home
            </a>
            <a href="#" className="block text-gray-600">
              Services
            </a>
            <a href="#" className="block text-gray-600 ">
              About
            </a>
            <a href="#" className="block text-gray-600">
              FAQ
            </a>
            <div className="mt-12 space-y-2">
                {/* <button className="w-full border border-black text-black px-4 py-2 rounded ">Book Now</button>
                <button onClick={()=> setIsLogIn(!login)} className="w-full bg-[#ff5416] text-white px-4 py-2 rounded"><Link to='signin'>Sign In</Link></button> */}
                {!isLoggedIn ? (
                  <div className=''>
                  <button onClick={()=> setIsLogIn(!login)} className='flex items-center justify-center gap-2 border border-black rounded-[10px] p-3 text-black font-white w-full hover:cursor-pointer'>
                    <span className="text-[16px]">Book Now</span>
                    <span>
                      <img src="assets/solar_calendar.png" alt="" className="w-[24px] bg-black" />
                    </span>
                  </button>
                </div>
                ) : (
                    <div className=' '>
                  <button className='flex items-center justify-center gap-2 border border-black rounded-[10px] p-3 text-black font-white w-full hover:cursor-pointer'>
                    <span className="text-[16px]"><Link to='appointments'>Your Bookings</Link></span>
                    <span>
                      <img src="assets/solar_calendar.png" alt="" className="w-[24px] bg-black" />
                    </span>
                    
                  </button>
                </div>
                )}
                
                {!isLoggedIn ? (
                  <div className=''>
                  <button  className='flex items-center justify-center bg-[#ff5416] p-3 rounded-[10px] text-white font-bold w-full hover:cursor-pointer'>
                    <span className="text-[16px]"><Link to='signin'> Sign Up</Link></span>
                  </button>
                </div>
                ) : (
                  <div className=''>
                  <button onClick={handleLogOut} className='flex items-center justify-center bg-[#ff5416] p-3 rounded-[10px] text-white font-bold w-full hover:cursor-pointer'>
                    <span className="text-[16px]">Hello {userName}</span>
                    <span>
                      <img src="assets/keyboard_arrow_down.png" alt="" className=""/>
                    </span>
                  </button>
                </div>
                )}
            </div>

            
            
          </div>
        )}
      </nav>

      {login &&(
        <div className='fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50'>
          <div className='max-w-[400px]  bg-white rounded-[10px] text-center border p-10'>
              <h1 className='text-[80px] font-bold'>Oops!</h1>
              <p className='text-[20px] mb-4'>You must sign in or sign up first</p>
              <button className='hidden md:block bg-[#ff5416] text-white p-4 rounded-[10px] w-full font-bold text-[20px] hover:cursor-pointer mb-4 transition'><Link to='signin'> Sign In</Link></button>
              <button className='bg-[#ff5416] text-white p-4 rounded-[10px] w-full font-bold text-[20px] hover:cursor-pointer transition'><Link to='signup'> Sign Up</Link></button>
              <button onClick={()=> setIsLogIn(!login)} className="mt-6 text-gray-500 hover:text-gray-700 text-l cursor-pointer">Close</button>
          </div>
        </div> 
      )}

      
    </header>
  )
}

export default Navbar