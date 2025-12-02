import React from "react";
import { useNavigate } from "react-router-dom";

const Bookingsummary = () => {
    const redirect = useNavigate()

    const handleClick = (e) =>{
      e.preventDefault()
      redirect("/modal4")
    }

    const handleBack = (e) =>{
        e.preventDefault()
        redirect("/modal2")
    }

  return (
     <div className="flex justify-center items-center min-h-screen bg-[#f7ecea] mt-8">
      <div className="bg-white rounded-xl shadow-md w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Booking Summary</h2>

        <div className="space-y-3 text-left">
          <div>
            <p className="text-gray-500 text-sm">First Name</p>
            <p>Emmanuel</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Last Name</p>
            <p>Mane</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Phone number</p>
            <p>08055463628</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Email Address</p>
            <p>Emmanuelmane50@gmail.com</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Task</p>
            <p>Deep Cleaning</p>
          </div>

          <div>
            <p>1 Bedroom, Bathroom/Toilet, Living room, 1 Kitchen</p>
            <p>Weekly</p>
          </div>
  <div className="mt-4 flex justify-between">
            <p className="font-bold text-2xl">Total Amount</p>
            <p className="font-bold text-2xl">₦20,000</p>
          </div>

           <div className="flex gap-10 items-center justify-center mt-8 mx-auto ">
        <button className="border border-orange-400 py-2 px- rounded-lg w-[200px] text-center " onClick={handleBack}>Back</button>
        <button className="bg-orange-600 py-2 px-20 text-center w-[200px]  rounded-lg text-white" onClick={handleClick}>Proceed</button>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Bookingsummary;