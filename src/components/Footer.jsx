import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaQuora } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { FaCcMastercard,FaCcVisa  } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";

const Footer = () => {
  return (  
    <div className=" bg-[#313132] h-screen text-white p-10">

    <div className=" md:flex justify-between  ">
      <div className="  p-1 mb-[40px]">
        <h1 className="text-yellow-500 font-bold">Shop</h1>
        <ul className="mt-2">
          <li>New Arrivals</li>
          <li>Tops</li>
          <li>Flats & Flatforms</li>
          <li>T-Shirts</li>
          <li>Trousers</li>
          <li>Oxfords & Boots</li>
          <li>Heels & Platforms</li>
          <li>Matching Sets</li>
          <li>Best Selling</li>
        </ul>
      </div>
      <div className=" p-1 mb-[40px]">
        <h1 className="text-yellow-500 font-bold">Support</h1>
        <ul>
          <li>Exchanges</li>
          <li>Exchange Policy</li>
          <li>Privacy Policy</li>
          <li>FAQ</li>
          <li>Support</li>
          <li>OShipping</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <div className="bg-[#313132] p-1  pb-[40px] space-y-10">
        <p className="text-[16px]">© Littlebox India 2022</p>
        <p className="text-4xl font-bold text-shadow-zinc-600">Littlebox</p>
        <ul className="  flex space-x-2">
          <a href="">
            <FaXTwitter style={{ color: "white" }} />
          </a>
          <a href="">
            <FaFacebookSquare style={{ color: "white" }} />
          </a>
          <a href="">
            <FaYoutube style={{ color: "white" }} />
          </a>
          <a href="">
            <FaInstagram style={{ color: "white" }} />
          </a>
          <a href="">
            <FaPinterest style={{ color: "white" }} />
          </a>
          <a href="">
            <FaWhatsapp style={{ color: "white" }} />
          </a>
          <a href="">
            <FaQuora style={{ color: "red" }} />
          </a>
          <a href="">
            <FaTelegram style={{ color: "white" }} />
          </a>
          <a href="">
            <FaSnapchat style={{ color: "white" }} />
          </a>
        </ul>
      </div>
    </div>
    
      <hr style={{backgroundColor:'white'}}/>
      <div className=" md:flex justify-between p-10 ">
      
      <h1 className="text-xs">© 2025 Good Tribe Private Limited. All rights Reserved.</h1>
      <ul className="flex p-5 gap-3">
        <li><FaCcVisa /></li>
        <li><FaCcMastercard /></li>
        <li><CiCreditCard1 /></li>
        <li><CiCreditCard1 /></li>
        <li><CiCreditCard1 /></li>
      </ul>
      </div>
    </div>
  );
};

export default Footer;
