import React from "react";
import { assets } from "./../assets/assets";

function Sidebar() {
  return (
    <div className="h-[100%] w-[25%]  flex-col justify-start items-center p-2 text-white hidden lg:flex">
      <div className="h-[15%] w-full mb-2 rounded flex flex-col justify-center items-start gap-5 pl-8 bg-[#121212]">
        <div className="flex justify-center items-center gap-3 font-bold cursor-pointer">
          <img className="h-[24px]" src={assets.home_icon} alt="home" />
          <p className="text-sm">Home</p>
        </div>
        <div className="flex justify-center items-center gap-3 font-bold cursor-pointer ">
          <img className="h-[24px]" src={assets.search_icon} alt="home" />
          <p className="text-sm">Search</p>
        </div>
      </div>
      <div className="h-[85%] w-full rounded bg-[#121212] px-2 py-4">
        <div className="flex justify-between items-center px-2">
          <div className="flex justify-center items-center gap-2">
            <img className="h-[30px]" src={assets.stack_icon} alt="stack" />
            <p className="text-sm font-semibold">Your Library</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <img className="h-[20px]" src={assets.arrow_icon} alt="arrow" />
            <img className="h-[20px]" src={assets.plus_icon} alt="add" />
          </div>
        </div>

        <div className="p-5 bg-[#242424] my-5 rounded">
          <p className="font-bold">Create your first playlist</p>
          <p className="font-light text-sm mt-1">it's easy we will help you</p>
          <div className="flex justify-center items-center px-4 w-fit py-1 mt-5 text-sm font-[500] bg-white text-black rounded-4xl cursor-pointer">
            Create playlist
          </div>
        </div>

        <div className="p-5 bg-[#242424] my-5 rounded">
          <p className="font-bold">Let's find some podcast to follow</p>
          <p className="font-light text-sm mt-1">
            We'll keep you updated on new episodes
          </p>
          <div className="flex justify-center items-center px-4 w-fit py-1 mt-5 text-sm font-[500] bg-white text-black rounded-4xl cursor-pointer">
            Browse podcasts
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
