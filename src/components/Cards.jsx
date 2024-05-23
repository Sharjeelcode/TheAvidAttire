import React, { useState } from "react";
import demo1 from "../assets/demo1.jpeg";
import demo2 from "../assets/demo2.jpeg";
import "../App.css";
import { CiHeart } from "react-icons/ci";
const Cards = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [cardHover, setCardHover] = useState(false);

  return (
    <div
      className="my-4 "
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
    >
      <div
        className="md:w-72 md:h-96 relative bg-white border rounded-md overflow-hidden shadow-lg transition-transform transform "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered ? demo1 : demo2}
          alt="Card"
          className="w-full h-full object-cover"
        />
        {cardHover && (
          <div className="absolute bottom-2 w-full">
            <div className="flex gap-2 justify-center">
              <div class="button-container">
                <button class="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    fill="none"
                    stroke="currentColor"
                    class="icon"
                  >
                    <circle r="1" cy="21" cx="9"></circle>
                    <circle r="1" cy="21" cx="20"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </button>
              </div>
              <div class="button-container">
                <button class="button">
                  <CiHeart className="text-white  icon" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center flex-col items-center">
        <h1 className="font-semibold">OVERSIZED TEE</h1>
        <p>Rs:1999</p>
      </div>
    </div>
  );
};

export default Cards;
