import React from 'react'
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useAuthContext } from '../context/AuthContext';
import {toast} from "react-hot-toast";

const Logout = () => {
   const {authUser, setAuthUser} =useAuthContext();
  const handleLogout = async () =>{
   try {
    const res = await fetch("/api/auth/logout",{credentials:"include"}); 
    const data= await res.json();
    setAuthUser(null);
   } catch (error) {
    toast.error(error.message);
   }
  }
  return (
   <>
    <img 
    src={authUser?.avatarUrl}
    className='w-10 h-10 rounded-full border border-grey-800' />
   <div className='cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto border hover:opacity-5'
    onClick={handleLogout}
   >
   <RiLogoutCircleRLine  size={22} />
   </div>
   </>

   
  )
}

export default Logout