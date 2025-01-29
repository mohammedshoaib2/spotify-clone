import React from "react";

function AlbumSongItem({ id, name, desc, songImg, albumName, duration }) {
  return (
    <div className="grid grid-cols-4 justify-center items-center p-2 text-white hover:bg-[#2a2a2a6b] cursor-pointer ">
      <div className="flex justify-start items-center gap-3">
        <p className="">{id + 1}</p>
        <img className="w-8" src={songImg} alt="song" />
        <p className="ml-2">{name}</p>
      </div>
      <p>{albumName}</p>
      <p>5 days ago</p>
      <p>{duration}</p>
    </div>
  );
}

export default AlbumSongItem;
