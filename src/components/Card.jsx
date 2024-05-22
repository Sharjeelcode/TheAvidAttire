import React, { useState } from "react";
import i from "../assets/logo.png";
import i2 from "../assets/blacklogo.png";
const Card = ({ frontImage, backImage }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-64 h-64 bg-white border rounded-md overflow-hidden shadow-lg transition-transform transform "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? i : i2}
        alt="Card"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Card;
