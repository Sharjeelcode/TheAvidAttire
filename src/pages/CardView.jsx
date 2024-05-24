import ImageGallery from "@/components/ImageGallery";
import React, { useState } from "react";
import shipping from "../assets/shipping.png";
import sizechart from "../assets/sizechart.png";
import { NavLink } from "react-router-dom";
function CardView() {
  const [size, setSize] = useState(1);
  return (
    <>
      <div className="flex justify-center flex-wrap gap-8 my-4 px-4 md:my-8 lg:px-20 lg:h-[80%]">
        <div className="lg:w-[50%]">
          <ImageGallery />
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-bold text-2xl font-semibold">Tshirt name</h1>
            <h1 className="text-bold text-xl font-semibold">Rs. 1690</h1>
          </div>
          <div>
            <h1 className="text-bold text-lg ">Size : </h1>
            <div className="flex gap-2 items-center">
              <button className="bg-black text-white rounded p-1 text-sm lg:p-2">
                SMALL
              </button>
              <button className="bg-black text-white rounded p-1 text-sm lg:p-2">
                MEDIUM
              </button>
              <button className="bg-black text-white rounded p-1 text-sm lg:p-2">
                LARGE
              </button>
              <button className="bg-black text-white rounded p-1 text-sm lg:p-2">
                X-LARGE
              </button>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="relative flex items-center max-w-[8rem]">
              <button
                onClick={() => (size > 0 ? setSize(size - 1) : "")}
                type="button"
                id="decrement-button"
                data-input-counter-decrement="bedrooms-input"
                className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-2 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
              >
                <svg
                  className="w-3 h-3 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 2"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h16"
                  />
                </svg>
              </button>
              <input
                type="text"
                id="Guest"
                data-input-counter
                data-input-counter-min="1"
                data-input-counter-max="5"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                value={size}
                required
                // onChange={yourguest(Guest)}
              />
              <div className="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
                <span>Quantity</span>
              </div>
              <button
                onClick={() => setSize(size + 1)}
                type="button"
                id="increment-button"
                data-input-counter-increment="bedrooms-input"
                className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-2 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
              >
                <svg
                  className="w-3 h-3 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </button>
            </div>
            <button className=" bg-black text-white w-full rounded-sm">
              ADD TO CART
            </button>
          </div>
          <NavLink
            to={"/buynow"}
            className=" bg-black text-white w-full rounded-sm py-2 text-center"
          >
            BUY IT NOW
          </NavLink>
          <div className="flex items-center gap-2">
            <img src={shipping} alt="" className="w-8" />
            <p>
              You have got <span className="font-bold">FREE SHIPPING</span>
            </p>
          </div>
        </div>
      </div>
      <div className=" md:my-12 lg:px-20 px-4 ">
        <h1 className="font-bold text-lg">PRODUCT DESCRIPTION</h1>
        <ol className="my-4 px-4 list-disc">
          <li> Power Stretchable</li>
          <li> Screen Print</li>
          <li> Off Shoulder</li>
          <li> Crew Neck</li>
          <li> Comfort Stretch</li>
          <li> Anti-Dust- Washable Print</li>
        </ol>
        <div className="flex gap-1 flex-col lg:flex-row">
          <h1 className="font-semibold">FABRIC:</h1>
          <span>
            90% Cotton 10% Spandex{" "}
            <span className="font-semibold">(220 GSM)</span>
          </span>
        </div>
        <div className="flex gap-1">
          <h1 className="font-semibold">FIT:</h1>
          <span>Baggy Fit</span>
        </div>
        <div className="flex gap-1">
          <h1 className="font-semibold">FIT:</h1>
          <span>Oversized Model Wear L size</span>
        </div>
        <div className="flex gap-1">
          <h1 className="font-semibold">WASH CARE: </h1>
          <span>
            {" "}
            Cold machine wash. For more details see the wash care label attached
          </span>
        </div>
        <h1 className="my-2 font-semibold">
          Actual colour of the product may vary slightly due to photographic
          lighting sources or your device
        </h1>
        <div className="flex flex-col lg:w-[500px] ">
          <img src={sizechart} alt="" />
          <h1 className="text-center">All sizes measurement are in inches</h1>
        </div>
      </div>
    </>
  );
}

export default CardView;
