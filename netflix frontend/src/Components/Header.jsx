import React,{useEffect} from 'react'
import signout from "../assets/Netflix.png";
import { useNavigate } from 'react-router-dom';
import {signOut } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useSelector,useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../../utils/userSlice';
function Header() {
  const navigate =useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)
  function handlesignoout(){
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      // An error happened.
      console.log(error);
      navigate("/error");
    });
    
  }
  useEffect(()=>{
    
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
        // ...
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=> unsubsribe();
  },[])
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className= "w-44"src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='netflix header'/>
        {user&&(<div className='flex p-3'>
          <img src={signout} alt='Signout icon' className= "w-12 h-12"/>
          <button onClick={handlesignoout} src = {signout}className='font-bold text-white'>(Sign out)</button>
        </div>)}
    </div>
  )
}

export default Header