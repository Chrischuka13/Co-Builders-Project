import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Bookingpage = () => {
    const redirect = useNavigate()
    const [user, setUser] = useState({
    firstname: "",
    lastname:"",
    phonenumber:"",
    email: "",
  })

   const [error, setError] = useState({
    firstname: "",
    lastname:"",
    phonenumber:"",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
    setError({...error, [name]: ""})
  };

  

   const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    const newError = {
    firstname: "",
    lastname:"",
    phonenumber:"",
    email: "",
    };

     if (!button.bathroom || !button.bedroom) {
      setMistake("Please select one from both Bathroom and Bedroom before submitting.");
      return;
    } else {
      setMistake("")
    }

    if (!user.firstname.trim()) {
      newError.firstname = "Firstname is required";
      hasError = true;
    }

    if (!user.lastname.trim()) {
      newError.lastname = "Lastname is required";
      hasError = true;
    }

    if (!user.email.trim()) {
      newError.email = "Email is required";
      hasError = true;
    } else if (!user.email.includes("@",)) {
      newError.email = "Email is invalid";
      hasError = true;
    }

    if (!user.phonenumber.trim()) {
      newError.phonenumber = "PhoneNumber is required";
      hasError = true;
    } else if (!user.phonenumber.includes("0")){
      newError.phonenumber = "PhoneNumber is Invalid";
      hasError = true;
    }


    if (user.firstname && user.lastname && user.email && user.phonenumber && button.bathroom && button.bedroom) {
        redirect("/modal2")
    }
    if (hasError) {
      setError(newError);
      return;
    }
    console.log("Submitted", user);
    setUser({
    firstname: "",
    lastname:"",
    phonenumber:"",
    email: "",
    });

    setError({
    firstname: "",
    lastname:"",
    phonenumber:"",
    email: "",
    });
  };

  const Loading = (e) =>{
    e.preventDefault();
    localStorage.setItem('firstName', 'Emmanuel')
    redirect('/dashboard')
  }


  const [button, setButtons] = useState({
    bathroom: null,
    bedroom: null,
  });

  const [mistake, setMistake] = useState("");
  
  const handleClick = (space, value) => {
    setButtons((prev) => ({ ...prev, [space]: value }));
  };

  const RatingRow = ({ label, space, showDivider }) => (
    <>
      <div className="flex items-center justify-between px-4 py-1.5 w-full">
        <span className="text-gray-700 font-medium">{label}</span>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => handleClick(space, num)}
              className={`md:w-7 md:h-6 rounded-md border text-sm transition cursor-pointer w-6 h-6
                ${
                  button[space] === num
                    ? "bg-orange-600 text-white border-orange-600"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
      {showDivider && <hr className="border-gray-300 mx-3" />}
    </>
  );
  return (
    <div className='bg-gray-300 h-screen place-items-center flex justify-center'>
        <form className='md:w-[450px] p-12 mx-auto pt-[50px] rounded-lg w-[350px] bg-white'>
            <h1 className='font-bold text-center my-4'>Let’s us know how to reach you</h1>
            <div>
              <label htmlFor="name" className='text-sm'>First Name</label>
            <input type="text" placeholder='e.g John' className='w-full h-[43px] p-2 border-2 border-gray-300 rounded-lg block text-sm' name='firstname' value={user.firstname} onChange={handleChange}/>
            {error.firstname && <p className="text-red-500 mb-3 text-xs italic">{error.firstname}</p>}
            </div>
            
            <div className='mt-3'>
              <label htmlFor="lastname" className='text-sm'>Last Name</label>
            <input type="text" placeholder='e.g Doe' className='w-full h-[43px] p-2 border-2 border-gray-300 rounded-lg block text-sm' name='lastname' value={user.lastname} onChange={handleChange}/> 
            {error.lastname && <p className="text-red-500 mb-3 text-xs italic">{error.lastname}</p>}
            </div>
            <div className='mt-3'>
              <label htmlFor="number" className='text-sm'>Phone Number</label>
            <input type="phonenumber" placeholder='e.g 09071207552' className='w-full h-[43px] p-2 border-2 border-gray-300 rounded-lg block text-sm' name='phonenumber' value={user.phonenumber} onChange={handleChange}/>
            {error.phonenumber && <p className="text-red-500 mb-3 text-xs italic">{error.phonenumber}</p>}
            </div>

           <div className='mt-3'>
             <label htmlFor="email" className='text-sm'>Email Address</label>
            <input type="text" placeholder='e.g Abisolaseyi@gmail.com' className='w-full h-[45px] p-2 border-2 border-gray-300 rounded-lg block text-sm' name='email' value={user.email} onChange={handleChange}/>
            {error.email && <p className="text-red-500 mb-5 text-xs italic">{error.email}</p>}
           </div>
           <div className="w-full">
      <p className="text-sm mt-8">Your space</p>
      <div className="border border-gray-300 rounded-xl bg-white w-full text-sm">
        <RatingRow label="Bathroom" space="bathroom" showDivider={true} />
        <RatingRow label="Bedroom" space="bedroom" showDivider={false} />
      </div>
      {mistake && <p className="text-red-500 text-xs italic">{mistake}</p>}
    </div>
            <div className='flex justify-center gap-5 mt-[60px]'>
                <button className='py-2 w-full border-2 border-orange-600 rounded-lg text-sm cursor-pointer' onClick={Loading}>Back</button>
                <button className='py-2 w-full bg-orange-600 text-white rounded-lg text-sm cursor-pointer' onClick={handleSubmit}>Next</button>
            </div>
        </form>
    </div>
  )
}

export default Bookingpage