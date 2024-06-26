import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import logo from "../assets/whitelogo.png";
function Footer() {
  return (
    <>
      <div className="bg-black text-white gap-4 lg:gap-0 grid lg:grid-cols-4 justify-items-center lg:px-20 py-4">
        <div className="hidden lg:block">
          <h1 className="py-4 ">Quick Shop</h1>
          <div className="flex flex-col gap-2 ">
            <NavLink to={"/oversized"} className="text-sm hover:underline">
              Oversized T-Shirts
            </NavLink>
            <NavLink to={"/ragular"} className="text-sm hover:underline">
              Ragular Fit T-Shirts
            </NavLink>
            <NavLink to={"/plain"} className="text-sm hover:underline">
              Plain T-Shirts
            </NavLink>
            <NavLink to={"/bestseller"} className="text-sm hover:underline">
              Best Seller
            </NavLink>
          </div>
        </div>
        <div className="hidden lg:block">
          <h1 className="py-4 ">Get to Know Us</h1>
          <div className="flex flex-col gap-2">
            <NavLink to={"/contactus"} className="text-sm hover:underline">
              Contact Us
            </NavLink>
            <NavLink to={"/bestseller"} className="text-sm hover:underline">
              FAQs
            </NavLink>
          </div>
        </div>
        <div className="text-center">
          <h1 className="py-4 ">Customer Care</h1>
          <div className="flex flex-col gap-2">
            <h1 className="text-sm">Timings:11 AM - 7 PM (Mon - Sat)</h1>
            <h1 className="text-sm">Whatsapp : +92 316 7740074</h1>
            <h1 className="text-sm">Email: theavidattire@gmail.com</h1>
            <h1 className="py-4 text-lg">Stay Connected</h1>
            <div className="flex justify-center gap-2">
              <FaFacebookF className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
              <FaWhatsapp className="cursor-pointer" />
              <FaTiktok className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div>
          <NavLink
            to={"/"}
            className="flex flex-col items-center  gap-2 cursor-pointer"
          >
            <img
              src={logo}
              alt=""
              className="w-auto h-8   lg:w-auto lg:h-12 lg:mt-4 "
            />
          </NavLink>
        </div>
      </div>
      <div className="bg-black text-white text-sm text-center py-4 px-4 lg:px-0">
        <h1>
          All Rights Reserved © 2024 TheAvidAttire. Designed By Design LAb
        </h1>
      </div>
    </>
  );
}

export default Footer;
