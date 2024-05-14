import React, { useState } from "react";
import logo from "../assets/logoicon.png";
import TopHeader from "./TopHeader";
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaAlignJustify } from "react-icons/fa6";

function Header() {
  const [mobileHeader, setMobileHeader] = useState(false);
  const handleMobileHeader = () => {
    !mobileHeader ? setMobileHeader(true) : setMobileHeader(false);
  };
  return (
    <>
      <img
        src="https://outfitbydk.com/cdn/shop/files/BN_2000x.jpg?v=1713370985"
        alt=""
        className="fixed top-0 h-full w-full z-[-1] hidden lg:block"
      />
      <img
        src="https://outfitbydk.com/cdn/shop/files/44245_700x.jpg?v=1713364554"
        alt=""
        className="fixed top-0 h-full w-full z-[-1] block lg:hidden"
      />
      <TopHeader />
      {/* //mobile header */}
      {mobileHeader && (
        <span
          onClick={handleMobileHeader}
          className="absolute top-0 right-0 bg-gray-200 w-[20vw] h-[11vh] flex justify-center items-center"
        >
          x
        </span>
      )}
      {mobileHeader && (
        <div className=" lg:hidden flex flex-col gap-4 pt-10 pl-4 w-[80vw] h-full absolute top-0 bg-white ">
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
      <div className="flex h-16 items-center justify-between px-4 lg:px-8 pt-1">
        <FaAlignJustify
          onClick={handleMobileHeader}
          className="lg:hidden text-white"
        />
        <div className="flex items-center  gap-2 cursor-pointer">
          <img src={logo} alt="" className="w-10  lg:w-20 lg:h-16 " />
          <div>
            <h1 className=" font-bold  text-white">The Avid Attire</h1>
            <p className="text-xs text-center font-semibold text-white">
              Wear you passion
            </p>
          </div>
        </div>
        <div className="hidden lg:flex gap-4 text-white">
          <h1 className="cursor-pointer">HOME</h1>
          <h1 className="cursor-pointer">SHIRTS</h1>
          <h1 className="cursor-pointer">OVERSIZED T-SHIRTS</h1>
          <h1 className="cursor-pointer">PLAIN T-SHIRTS</h1>
          <h1 className="cursor-pointer">RAGULAR FIT T-SHIRTS</h1>
          <h1 className="cursor-pointer">BOTTOM WEAR</h1>
          <h1 className="cursor-pointer">BEST SELLERS</h1>
        </div>
        <div className="flex gap-4">
          <FaHeart className="cursor-pointer text-white" />
          <FaCartShopping className="cursor-pointer text-white" />
        </div>
      </div>
    </>
  );
}

export default Header;
