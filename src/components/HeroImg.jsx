import React from "react";
import video from "../assets/herovideo.mp4";

function HeroImg() {
  return (
    <>
      <div className="w-full  bg-black">
        <video
          src={video}
          className="h-[90vh] w-full object-fill"
          autoPlay
          loop
          muted
        />
      </div>
    </>
  );
}

export default HeroImg;
