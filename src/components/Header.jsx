import React, { useState } from "react";
import logo from "../assets/logo.png";
import TopHeader from "./TopHeader";
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaAlignJustify } from "react-icons/fa6";
import HeroImg from "./HeroImg";

function Header() {
  const [mobileHeader, setMobileHeader] = useState(false);
  const handleMobileHeader = () => {
    !mobileHeader ? setMobileHeader(true) : setMobileHeader(false);
  };
  return (
    <>
      <TopHeader />
      {/* //mobile header */}
      {mobileHeader && (
        <span
          onClick={handleMobileHeader}
          className="fixed top-20 left-[80vw] bg-gray-200 w-[15vw] h-[10vh] flex justify-center items-center lg:hidden"
        >
          x
        </span>
      )}
      {mobileHeader && (
        <div className=" lg:hidden flex flex-col gap-4 pt-10 pl-4 w-[80vw] h-[100vh]  bg-white fixed top-0  z-[100]">
          <h1 className="cursor-pointer">HOME</h1>
          <hr />
          <h1 className="cursor-pointer">SHIRTS</h1>
          <hr />
          <h1 className="cursor-pointer">OVERSIZED T-SHIRTS</h1>
          <hr />
          <h1 className="cursor-pointer">PLAIN T-SHIRTS</h1>
          <hr />
          <h1 className="cursor-pointer">RAGULAR FIT T-SHIRTS</h1>
          <hr />
          <h1 className="cursor-pointer">BOTTOM WEAR</h1>
          <hr />
          <h1 className="cursor-pointer">BEST SELLERS</h1>
        </div>
      )}
      <div className="sticky top-0 bg-white flex py-1 items-center justify-between px-4 lg:px-8 pt-1 ">
        <FaAlignJustify onClick={handleMobileHeader} className="lg:hidden " />
        <div className="flex items-center  gap-2 cursor-pointer">
          <img src={logo} alt="" className="w-16   lg:w-20 lg:h-16 " />
          <div>
            <h1 className=" font-bold  ">The Avid Attire</h1>
            <p className="text-xs text-center font-semibold ">
              Wear you passion
            </p>
          </div>
        </div>
        <div className="hidden lg:flex gap-4 ">
          <h1 className="cursor-pointer font-semibold">HOME</h1>
          <h1 className="cursor-pointer font-semibold">SHIRTS</h1>
          <h1 className="cursor-pointer font-semibold">OVERSIZED T-SHIRTS</h1>
          <h1 className="cursor-pointer font-semibold">PLAIN T-SHIRTS</h1>
          <h1 className="cursor-pointer font-semibold">RAGULAR FIT T-SHIRTS</h1>
          <h1 className="cursor-pointer font-semibold">BOTTOM WEAR</h1>
          <h1 className="cursor-pointer font-semibold">BEST SELLERS</h1>
        </div>
        <div className="flex gap-4">
          <FaHeart className="cursor-pointer " />
          <FaCartShopping className="cursor-pointer " />
        </div>
      </div>
      <HeroImg />
    </>
  );
}

export default Header;
