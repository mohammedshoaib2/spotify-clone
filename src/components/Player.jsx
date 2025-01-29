import React from "react";
import { assets, songsData } from "../assets/assets";

function Player() {
  return (
    <div className="h-[10%] w-full px-4 flex justify-between items-center text-white">
      <div className="justify-center items-center gap-4 hidden lg:flex">
        <img className="w-12" src={songsData[1]?.image} alt="image" />
        <div>
          <p className="">{songsData[0].name}</p>
          <p className="text-sm">{songsData[0].desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center gap-2">
        <div className="flex justify-center items-center gap-5">
          <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt=""
          />
          <img className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />
          <img className="w-4 cursor-pointer" src={assets.play_icon} alt="" />
          <img className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
        </div>
        <div className=" flex justify-center items-center gap-4">
          <p>{"0:00"}</p>
          <div className="w-[60vw] max-w-[560px] bg-white rounded-full cursor-pointer">
            <hr className="h-1 border-none w-10 bg-green-800 rounded-full" />
          </div>
          <p>{songsData[0].duration}</p>
        </div>
      </div>
      <div className=" hidden lg:flex justify-center items-center gap-2">
        <img className="w-4 cursor-pointer" src={assets.plays_icon} alt="" />
        <img className="w-4 cursor-pointer" src={assets.mic_icon} alt="" />
        <img className="w-4 cursor-pointer" src={assets.queue_icon} alt="" />
        <img className="w-4 cursor-pointer" src={assets.speaker_icon} alt="" />
        <img className="w-4 cursor-pointer" src={assets.volume_icon} alt="" />
        <div className=" cursor-pointer w-20 bg-white rounded-full">
          <hr className="h-1 w-[50%] bg-green-800 border-none rounded-full" />
        </div>
        <img className="w-4 cursor-pointer" src={assets.zoom_icon} alt="" />
      </div>
    </div>
  );
}

export default Player;
