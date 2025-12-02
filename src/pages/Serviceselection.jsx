import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Serviceselection = () => {
 const [selected, setSelected] = useState(null) 
 const redirect = useNavigate()

  // const services = [
  //       {id:1, name:"standard cleaning", price:10000},
  //       {id:2, name:"deep cleaning", price:20000},
  //       {id:3, name:"move-in cleaning", price:20000}
  //   ]
    const handleSelect = (index) => {
      setSelected(index)
    }

    const handleClick = (e) =>{
     e.preventDefault()
// localStorage.setItem('firstName', 'Emmanuel')
//         localStorage.setItem('lastName', 'Mane')
//       localStorage.setItem('phoneNumber', '08055463628')
//       localStorage.setItem('email', 'emmanuel@gmail.com')
//       localStorage.setItem('task', 'deepCleaning')
//       localStorage.setItem('order', '1 Bedroom, Bathroom/Toilet, Living room, 1 Kitchen')
//       localStorage.setItem('amount', '#20,000')
     redirect("/modal3")

    }

    const handleBack = (e) =>{
    e.preventDefault()
         
    redirect("/booking")
    }

  return (
    <div className="">
      <div className="text-center">
        <h1 className="font-bold text-[32px] leading-[100%] my-3">
          What cleaning services do you need
        </h1>
        <p className=" text-[18px] leading-[100%]">
          Select the service that suits you to proceed
        </p>
      </div>

      <div className="mt-10">
        {/* first box */}
        <form onClick={() => handleSelect(1)} className={`bg-[#EFF1F7] w-[450px] mx-auto rounded-lg p-7 border cursor-pointer ${selected === 1 ? 'border-blue-500': 'border-black-50'} `}>
          <div className="flex justify-between">
            <h1 className="font-bold text-[27px] text-center">
              Standard Cleaning
            </h1>
            <h1 className="font-bold text-[27px] text-center">₦10,000</h1>
          </div>
          <p className="mt-3">This Cleaning includes your:</p>
          <ul className="list-disc pl-7 ">
            <li>Kitchen</li>
            <li>Bathroom</li>
            <li>Bedroom</li>
            <li>Livng Area</li>
            <li>Up to 3 hours for a good cleaning</li>
          </ul>
        </form>
        {/* second box */}
        <form onClick={() => handleSelect(2)} className= {`bg-[#D0D1D4] w-[450px] mx-auto rounded-lg p-7 mt-8 border cursor-pointer ${selected === 2 ? 'border-blue-500': 'border-black-50'} `}>
          <div className="flex justify-between">
            <h1 className="font-bold text-[27px] text-center">Deep Cleaning</h1>
            <h1 className="font-bold text-[27px] text-center">₦20,000</h1>
          </div>
          <p className="mt-3">This Cleaning includes your:</p>
          <ul className="list-disc pl-7">
            <li>Kitchen</li>
            <li>Bathroom</li>
            <li>Bedroom</li>
            <li>Livng Area</li>
            <li>Up to 3 hours for a good cleaning</li>
          </ul>
        </form>
        {/* Third box */}
        <form onClick={() => handleSelect(3)} className= {`bg-[#FFF2ED] w-[450px] mx-auto rounded-lg p-7 mt-8 border cursor-pointer ${selected === 3 ? 'border-blue-500': 'border-black-50'} `}>
          <div className="flex justify-between">
            <h1 className="font-bold text-[27px] text-center">
              Move-in Cleaning
            </h1>
            <h1 className="font-bold text-[27px] text-center">₦20,000</h1>
          </div>
          <p className="mt-3">This Cleaning includes your:</p>
          <ul className="list-disc pl-7">
            <li>Kitchen</li>
            <li>Bathroom</li>
            <li>Bedroom</li>
            <li>Livng Area</li>
            <li>Up to 3 hours for a good cleaning</li>
          </ul>
        </form>
      </div>
      {/* check boxes */}
      <div>
        <p className="text-[18px] font-medium leading-[100%] text-center mt-7">
          How frequent do you want your place to be cleaned?
        </p>
        <div>
          <div className=" w-[450px] mx-auto rounded mt-5 border p-2">
            <form className="flex justify-between">
              <p>One time</p>
              <input type="checkbox"></input>
            </form>
          </div>
          {/* second box  */}
          <div className=" w-[450px] mx-auto rounded mt-5 border p-2">
            <form className="flex justify-between">
              <p>Weekly</p>
              <input type="checkbox"></input>
            </form>
          </div>
          {/* third box */}
          <div className=" w-[450px] mx-auto rounded mt-5 border p-2">
            <form className="flex justify-between">
              <p>Every two weeks</p>
              <input type="checkbox"></input>
            </form>
          </div>
          {/* fourth box */}
          <div className=" w-[450px] mx-auto rounded mt-5 border p-2">
            <form className="flex justify-between">
              <p>Every four weeks</p>
              <input type="checkbox"></input>
            </form>
          </div>
        </div>
      </div>



      <div className="flex gap-10 items-center justify-center mt-8 mx-auto ">
        <button className="border border-orange-400 py-2 px- rounded-lg w-[200px] text-center" onClick={handleBack}>Back</button>
        <button className="bg-orange-600 py-2 px-20 text-center w-[200px]  rounded-lg text-white" onClick={handleClick}>Proceed</button>
              </div>
    </div>
  );
};

export default Serviceselection;