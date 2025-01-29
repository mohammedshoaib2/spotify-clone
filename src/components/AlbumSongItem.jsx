import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentSong } from "../../features/playerSlice";
import { songsData } from "../assets/assets";

function AlbumSongItem({ id, name, desc, songImg, albumName, duration }) {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(setCurrentSong(songsData[id]));
      }}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center p-2 text-white hover:bg-[#2a2a2a6b] cursor-pointer "
    >
      <div className="flex justify-start items-center gap-3">
        <p className="">{id + 1}</p>
        <div className="w-[32px] object-cover">
          <img className="w-full h-full" src={songImg} alt="song" />
        </div>
        <p className="ml-2">{name}</p>
      </div>
      <p>{albumName}</p>
      <p className="hidden md:block ">5 days ago</p>
      <p className="hidden lg:block">{duration}</p>
    </div>
  );
}

export default AlbumSongItem;
