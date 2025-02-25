import React from "react";
import { assets } from "../assets/assets";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-3">
          <div
            onClick={() => {
              if (location.pathname.slice(-1) !== "/") {
                navigate(-1);
              }
            }}
            className="bg-black p-2 rounded-full cursor-pointer"
          >
            <img className="h-4 " src={assets.arrow_left} alt="<" />
          </div>
          <div
            onClick={() => {
              navigate(+1);
            }}
            className="bg-black  p-2 rounded-full cursor-pointer"
          >
            <img className="h-4" src={assets.arrow_right} alt=">" />
          </div>
        </div>

        <div className="flex justify-center items-center gap-5">
          <div className="hidden justify-center items-center gap-5 sm:flex">
            <div className="flex justify-center items-center px-4 w-fit py-1  text-sm font-[500] bg-white text-black rounded-4xl cursor-pointer">
              Explore Premium
            </div>
            <div className="flex justify-center items-center px-4 w-fit py-1 text-sm font-[500] bg-black text-white rounded-4xl cursor-pointer">
              Install App
            </div>
          </div>

          <img
            className=" block sm:hidden cursor-pointer"
            src={assets.menu}
            alt="menu"
          />
          <div className="bg-[#A455F4] w-7 h-7 text-sm rounded-full flex justify-center items-center cursor-pointer">
            D
          </div>
        </div>
      </div>

      <div className="w-full flex justify-start items-center gap-2">
        <div className="flex justify-center items-center px-4 w-fit py-1 text-sm font-[500] bg-white text-black rounded-4xl cursor-pointer">
          All
        </div>
        <div className="flex justify-center items-center px-4 w-fit py-1 text-sm font-[500] bg-black text-white rounded-4xl cursor-pointer hover:bg-gray-900 transition-colors">
          Music
        </div>
        <div className="flex justify-center items-center px-4 w-fit py-1 text-sm font-[500] bg-black text-white rounded-4xl cursor-pointer hover:bg-gray-900 transition-colors">
          Podcasts
        </div>
      </div>
    </div>
  );
}

export default Navbar;
