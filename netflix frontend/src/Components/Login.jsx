// eslint-disable-next-line no-unused-vars
import React,{useRef, useState}from 'react'
import Header from './Header';
import {checkValidateData} from "../../utils/Validate";

function Login() {
    const[isSignIn,setSignIn] = useState(true);
    const[isError,setError] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    function toggleSignInForm(){
        setSignIn(!isSignIn)
    }
    function HandleloginClick(){
        if(isSignIn === true){
          const message = checkValidateData(null,email.current.value,password.current.value);
          setError(message);
        }else{
          const message = checkValidateData(name.current.value,email.current.value,password.current.value);
          setError(message);
        }
    }
  return (
    <div>
       <Header />
       <div className='absolute'>
       <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_small.jpg" alt='netflix image' />
       </div>
       <form onSubmit={(e)=>e.preventDefault()}className='w-3/12 absolute p-12 bg-black mx-auto left-0 right-0 my-36 text-white rounded-lg bg-opacity-80'>
       <h2 className="font-bold text-white text-3xl py-4">{isSignIn?"Sign In":"Sign Up"}</h2>
       {!isSignIn&&<input ref= {name}type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800'></input>}
        <input ref = {email}type='email' placeholder='Email address' className='p-4 my-4 w-full bg-gray-800'></input> 
        <input ref = {password}type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-800'></input>
        <p className='text-red-500 font-bold text-lg py-2'>{isError}</p>
        <button className='py-4 my-6 bg-red-700 w-full rounded-lg'onClick={HandleloginClick}>{isSignIn?"Sign In":"Sign Up"}</button>
        <p className="py-4 cursor-pointer"onClick={toggleSignInForm}>{isSignIn?"New to netflix? Sign Up Now":"Already registered Sign in Now"}</p>
       </form>
    </div>
  )
}

export default Login