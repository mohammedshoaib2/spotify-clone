import React from "react";
import { useNavigate } from "react-router-dom";

function AlbumItem({ id, name, desc, image }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/album/${id}`);
      }}
      className="min-w-[180px] flex flex-col p-2 rounded gap-2 justify-center items-center hover:bg-[#242424] cursor-pointer"
    >
      <img className="w-42 rounded" src={image} alt="album" />
      <div className=" w-42 flex flex-col gap-1 items-start">
        <b>{name}</b>
        <p className=" font-light text-sm/tight">{desc}</p>
      </div>
    </div>
  );
}

export default AlbumItem;
