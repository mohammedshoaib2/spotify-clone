import React from "react";

function SongItem({ id, name, desc, image }) {
  return (
    <div className="min-w-[180px] flex flex-col p-2 rounded gap-2 justify-center items-center hover:bg-[#242424] cursor-pointer">
      <img className="w-42 rounded" src={image} alt="album" />
      <div className=" w-42 flex flex-col gap-1 items-start">
        <b>{name}</b>
        <p className=" font-light text-sm/tight">{desc}</p>
      </div>
    </div>
  );
}

export default SongItem;
