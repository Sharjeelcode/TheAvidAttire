import React from "react";
import HeroImg from "../components/HeroImg";
import HeroCarousel from "../components/HeroCarousel";
import Services from "../components/Services";
import "animate.css";
function Hero() {
  return (
    <>
      <div className="bg-white">
        <HeroImg />
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 md:w-96 h-[2px] my-8   bg-[#F96A00] border-0 rounded " />
          <div className="absolute px-1 md:px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
            <span className="text-lg md:text-2xl font-bold  ">
              Trendy Outfits
            </span>
          </div>
        </div>
        <h1 className="text-center ">
          Embrace the Latest Trends - Shop our Trendy Outfit Selection
        </h1>
        <div className="flex justify-center mx-16  my-4 ">
          <HeroCarousel />
        </div>
        <Services />
      </div>
      <img
        className="sticky bottom-0 top-20 h-[500px]  w-full z-[-1]"
        src="https://checkmateatelier.com/cdn/shop/files/MAIN_copy.jpg?v=1709209953&width=1880"
        alt=""
      />
    </>
  );
}

export default Hero;
