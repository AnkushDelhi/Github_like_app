import React from 'react'
import { Link } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineExplore } from "react-icons/md";
import { SlLogin } from "react-icons/sl";
import { SiGnuprivacyguard } from "react-icons/si";
import Logout from './Logout';
import { useAuthContext } from '../context/AuthContext';

const SideBar = () => {
  const {authUser} = useAuthContext();
  return (
    <aside className='flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8
    overflow-y-auto border-r bg-glass '>

  <nav className='h-full flex flex-col gap-3'>
   <Link to="/" className="flex justify-center">
    <img src="/github.svg" alt="github-logo" className='h-8' />
   </Link>

   <Link to='/' className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg 
					hover:bg-gray-800'>
					<IoHome size={20} />
				</Link>
   
   {authUser && (
     <Link to="/Likes" className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg 
     hover:bg-gray-800'>
       <FaRegHeart size={20} />
     </Link>

   )}

   {authUser && (
     <Link to="/explore" className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg 
     hover:bg-gray-800'>
       <MdOutlineExplore  size={20} />
     </Link>

   )}


   {!authUser && (
    <Link to="/login" className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg 
    hover:bg-gray-800'>
    <SlLogin size={20} />
    </Link>
   )}

  {!authUser && (
    <Link to="/signUp" className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg 
    hover:bg-gray-800'>
    <SiGnuprivacyguard  size={20} />
    </Link>
   )}

   {authUser && (
    <div className='flex flex-col gap-2 mt-auto'>
      <Logout/>
    </div>
   )}
   </nav>

    </aside>
  )
}

export default SideBar