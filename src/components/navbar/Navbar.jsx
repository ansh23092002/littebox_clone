import React from 'react'
import { FaRegUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { HiOutlineViewList } from "react-icons/hi";


const Navbar = () => {
  return (
    <nav className="bg-[#f1eaea] border-b-white border-1 shadow-md sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center max-md:hidden">
        <h1 className=" text-xl font-[1000] text-black md:text-3xl ">Littlebox</h1>
        <ul className="hidden md:flex space-x-6 text-sm  ">
          <li className="cursor-pointer flex items-center gap-1">Account <FaRegUser className='size-5'/>  </li>
          <li className="cursor-pointer flex items-center gap-1">Search <CiSearch  className='size-5'/></li>
          <li className="cursor-pointer flex items-center gap-1">Cat <IoCartOutline className='size-5' /></li>
          <li className="cursor-pointer flex items-center gap-1">Wishlist <CiHeart className='size-8' /></li>
        </ul>
      </div>

       <nav className="md:hidden flex justify-between items-center sticky p-2  ">
                 <div className="flex">
                  <HiOutlineViewList  className='size-5'/>
                  <CiSearch  className='size-5'/>
                 </div>
                 <h2 className="text-2xl font-bold">Littlebox</h2>
                 <div className='flex'>
                   <FaRegUser  className='size-5' />
                   <CiSearch  className='size-5'/>
                   <CiHeart  className='size-5'/>
                 </div>
          </nav>
       <div className='  hidden md:flex bg-[#313132] md:sticky '>
             <ul className="md:flex w-screen  text-white justify-center items-center text-sm ">
          <li className="hover:text-black cursor-pointer p-[18px] ">Pick A Mood</li>
          <li className="hover:text-black cursor-pointer p-[18px]">Men's <span className=' text-xs align-super '> new</span></li>
          <li className="hover:text-black cursor-pointer p-[18px]">Clothing  footwear</li>
          <li className="hover:text-black cursor-pointer p-[18px]">plus-Curve</li>
          <li className="hover:text-black cursor-pointer p-[18px]">New Arrival</li>
          <li className="hover:text-black cursor-pointer p-[18px]">Hot Deals</li>
          <li className="hover:text-black cursor-pointer p-[18px]">Next Day Dispatch</li>
          <li className="hover:text-black cursor-pointer p-[18px]">influencer Program</li>
          <li className="hover:text-black cursor-pointer p-[18px]">Support</li>
          <li className="hover:text-black cursor-pointer p-[18px]">Track Your Order</li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar