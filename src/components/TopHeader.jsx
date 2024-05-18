import React from "react";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
function TopHeader() {
  return (
    <div className=" bg-black lg:flex justify-between  text-white lg:px-12 lg:h-8 text-sm">
      <div className="hidden lg:flex text-white items-center gap-2 ">
        <FaPhoneFlip />
        <span className="text">+92 306 322223999</span>
      </div>
      <div className="flex items-center   ">
        <h1>🔥Enjoy Free Shipping All Over Pakistan!</h1>
      </div>
      <div className="hidden text-white lg:flex items-center gap-3  ">
        Follow Us: <FaFacebookF className="cursor-pointer" />
        <FaInstagram className="cursor-pointer" />
        <FaWhatsapp className="cursor-pointer" />
        <FaTiktok className="cursor-pointer" />
      </div>
    </div>
  );
}

export default TopHeader;
