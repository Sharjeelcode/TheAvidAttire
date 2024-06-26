import { useState } from "react";
import logo from "../assets/blacklogo.png";
import TopHeader from "./TopHeader";
import { FaCartShopping } from "react-icons/fa6";
import { FaAlignJustify } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "../App.css";
import "animate.css";
function Header() {
  const [mobileHeader, setMobileHeader] = useState(false);
  const [mobileHeaderAnimation, setMobileHeaderAnimation] = useState("");
  const handleMobileHeader = () => {
    if (!mobileHeader) {
      setMobileHeader(true);
      setMobileHeaderAnimation("animate__animated  animate__fadeInLeftBig");
    } else {
      setTimeout(() => {
        setMobileHeaderAnimation("animate__animated animate__fadeOutRightBig");
      }, 100);
      setTimeout(() => {
        setMobileHeader(false);
      }, 300);
    }
    console.log(mobileHeaderAnimation);
  };

  const handleNavbar = () => {
    setMobileHeader(false);
  };
  return (
    <>
      <TopHeader />
      {/* //mobile header */}
      {mobileHeader && (
        <span
          onClick={handleMobileHeader}
          className={`${mobileHeaderAnimation}  fixed top-20 left-[70vw] text-lg bg-gray-200 w-[10vw] h-[10vh] flex justify-center text-[#F96A00] items-center lg:hidden z-[200]`}
        >
          x
        </span>
      )}
      {mobileHeader && (
        <div
          className={`${mobileHeaderAnimation}  lg:hidden flex flex-col gap-4 pt-10 pl-4 w-[70vw] h-[100vh]  bg-white fixed top-0  z-[200]`}
        >
          <NavLink
            to={"/"}
            onClick={handleNavbar}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-[#F96A00] animate__animated  animate__flash"
                  : ""
              }cursor-pointer`
            }
          >
            HOME
          </NavLink>
          <hr />
          <NavLink
            to={"/oversized"}
            onClick={handleNavbar}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-[#F96A00] animate__animated  animate__flash "
                  : ""
              }cursor-pointer`
            }
          >
            OVERSIZED T-SHIRTS
          </NavLink>
          <hr />
          <NavLink
            to={"/shirts"}
            onClick={handleNavbar}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-[#F96A00] animate__animated  animate__flash"
                  : ""
              }cursor-pointer`
            }
          >
            SHIRTS
          </NavLink>
          <hr />
          <NavLink
            to={"/plain"}
            onClick={handleNavbar}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-[#F96A00] animate__animated  animate__flash"
                  : ""
              }cursor-pointer`
            }
          >
            PLAIN T-SHIRTS
          </NavLink>
          <hr />
          <NavLink
            to={"/ragular"}
            onClick={handleNavbar}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-[#F96A00] animate__animated  animate__flash"
                  : ""
              }cursor-pointer`
            }
          >
            RAGULAR FIT T-SHIRTS
          </NavLink>
          <hr />
          <NavLink
            to={"/bottomWear"}
            onClick={handleNavbar}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-[#F96A00] animate__animated  animate__flash"
                  : ""
              }cursor-pointer `
            }
          >
            BOTTOM WEAR
          </NavLink>
          <hr />
          <NavLink
            to={"/bestSeller"}
            onClick={handleNavbar}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-[#F96A00] animate__animated  animate__flash"
                  : "text-black"
              }cursor-pointer`
            }
          >
            BEST SELLERS
          </NavLink>
        </div>
      )}
      <div className="sticky top-0 z-[100] shadow-md shadow-gray-00 bg-white flex h-auto  items-center justify-between px-4 lg:px-8 py-3 lg:py-2 ">
        <FaAlignJustify onClick={handleMobileHeader} className="lg:hidden " />
        <NavLink to={"/"} className=" cursor-pointer ">
          <img src={logo} alt="" className="w-auto h-8   lg:w-48 lg:h-auto " />
        </NavLink>
        <div className="hidden lg:flex gap-4 ">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-[#F96A00] animate__animated  animate__flash"
                  : ""
              } cursor-pointer font-semibold   `
            }
          >
            HOME
          </NavLink>
          <NavLink
            to={"/shirts"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-[#F96A00] animate__animated  animate__flash"
                  : ""
              } cursor-pointer font-semibold `
            }
          >
            SHIRTS
          </NavLink>
          <NavLink
            to={"/oversized"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-[#F96A00] animate__animated  animate__flash"
                  : ""
              } cursor-pointer font-semibold`
            }
          >
            OVERSIZED T-SHIRTS
          </NavLink>
          <NavLink
            to={"/plain"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-[#F96A00] animate__animated  animate__flash"
                  : ""
              } cursor-pointer font-semibold`
            }
          >
            PLAIN T-SHIRTS
          </NavLink>
          <NavLink
            to={"/ragular"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-[#F96A00] animate__animated  animate__flash"
                  : ""
              } cursor-pointer font-semibold`
            }
          >
            RAGULAR FIT T-SHIRTS
          </NavLink>
          <NavLink
            to={"/bottomWear"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-[#F96A00] animate__animated  animate__flash"
                  : ""
              } cursor-pointer font-semibold`
            }
          >
            BOTTOM WEAR
          </NavLink>
          <NavLink
            to={"/bestSeller"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-[#F96A00] animate__animated  animate__flash"
                  : ""
              } cursor-pointer font-semibold`
            }
          >
            BEST SELLERS
          </NavLink>
        </div>
        <div className="flex gap-4">
          {/* <FaHeart className="cursor-pointer " /> */}
          <NavLink to={"/cart"} className="relative h-full">
            <FaCartShopping className="cursor-pointer " />
          </NavLink>
          <span className=" absolute top-1 right-0 lg:top-3 lg:right-5 text-xs bg-black rounded-full px-1 text-white">
            0
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
