import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaQuora } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";



const SocialMedia = () => {
  return (
     <div className='flex bg-[#313132] justify-between px-8 items-center '>
        <ul  className='max-md:hidden flex space-x-2'>
          <a href=""><FaXTwitter style={{color:'white'}} /></a>   
          <a href=""><FaFacebookSquare  style={{color:'white'}} /></a>
          <a href=""><FaYoutube style={{color:'white'}}/></a>
          <a href=""><FaInstagram style={{color:'white'}}/></a>
          <a href=""><FaPinterest style={{color:'white'}} /></a>
          <a href=""><FaWhatsapp  style={{color:'white'}} /></a>
          <a href=""><FaQuora style={{color:'red'}} /></a>
          <a href=""><FaTelegram  style={{color:'white'}} /></a>
          <a href=""><FaSnapchat  style={{color: 'white'}}/></a>
        </ul>
        <h1 className='text-[12px] py-2  font-bold text-white'>1 Million+ Squad, Outfits For Every Mood!</h1>
         <button className=' flex items-center uppercase border border-white rounded-xl font-bold text-[8px] text-white p-2'>
            <CiMobile3 /> download app</button>
      </div>
  )
}

export default SocialMedia
