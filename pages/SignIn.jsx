import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate()

  

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const correctEmail = 'emmanuel@gmail.com'
    const correctPassword = '123456'

    let hasError = false;
    const newError = {
      email: "",
      password: "",
    }
    
    if (!form.email.trim()) {
      newError.email = "Email is required";
      hasError = true;
    } else if(form.email.trim() !== 'emmanuel@gmail.com'){
      newError.email = "Email is not registered";
      hasError = true;
    } 
      else if (!form.email.includes("@")) {
      newError.email = "Email is invalid";
      hasError = true;
    } else if(!form.email.includes(".")){
      newError.email = "Email is invalid";
      hasError = true;
    }

    if (!form.password.trim()) {
      newError.password = "Password is required";
      hasError = true;
    }else if (form.password.trim().length < 6) {
      newError.password = "Password must be at least 6 characters";
      hasError = true;
    }
    else if(form.password.trim() !== '123456'){
      newError.password = 'Incorrect Password'
      hasError = true;
    }

    if (form.email === correctEmail && form.password === correctPassword) {
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('userName', 'Emmanuel')
      navigate('/')
    }

    if (hasError) {
      setError(newError);
    } else {
      setError({
        email: "",
        password: "",
      });
      
      console.log("Form submitted", form);
    }
    setForm({
      email: "",
      password: "",
    });
  }





  return (
    <div className="flex">
      <div className=" flex gap-10">
      <div className="hidden md:flex w-1/2 bg-gray-100 ">
        <img
          src="./assets/login-signup.jpg"
          alt="Cleaner"
          className="object-cover h-screen w-full rounded-tr-lg rounded-br-lg"
        />
      </div>

     
      <div className=" flex flex-col justify-center items-center md:w-1/2 px-6 sm:px-10">
        <div className="w-full max-w-md">
          <div className="text-center">
            <h2 className="text-[42px] font-semibold mb-2 text-gray-900">Sign In</h2>
             <p className="text-[18px] text-gray-500 mb-8">Please sign in to continue</p>
         </div>

        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-5">
                <input
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
               />
            {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
          </div>

          <div className="mb-3">
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder="Password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md "
              />
              <img src="./src/assets/eyeoff.png" alt="" className="absolute right-5 -bottom-3"/>
              {error.password && <p className="text-red-500 text-sm">{error.password}</p>}
            </div>
          </div>
        
          <div className="flex justify-end mb-8">
            <a
              href="#"
              className="text-orange-500 hover:text-orange-600 text-sm font-medium"
            >
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="w-full bg-[#ff5416] hover:bg-orange-600 text-white font-semibold p-3 rounded-md transition duration-200 hover:cursor-pointer mt-10">
            Continue
          </button>

        </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SignIn;