import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { albumsData, assets, songsData } from "../assets/assets";
import AlbumSongItem from "./AlbumSongItem";

function DisplayAlbum() {
  const { id } = useParams();
  const displayRef = useRef();

  useEffect(() => {
    displayRef.current.style.background = `linear-gradient(${albumsData[id].bgColor}, #121212)`;
  });
  return (
    <div
      ref={displayRef}
      style={{
        overflow: "scroll",
      }}
      className={`h-full w-full bg-[#121212]  rounded p-5 text-white`}
    >
      <Navbar />
      <div className="mt-10 flex flex-wrap gap-10 items-end">
        <img
          className="w-48 min-w-[192px] rounded"
          src={albumsData[id].image}
          alt="albumImage"
        />
        <div className="flex flex-col gap-2">
          <p>Playlist</p>
          <h1 className="text-6xl font-bold">{albumsData[id].name}</h1>
          <p>{albumsData[id].desc}</p>
          <div className="flex justify-center items-center gap-1">
            <img className="w-4" src={assets.spotify_logo} alt="logo" />
            <b>Spotify</b>
            <p>&#x2022;</p>
            <p>1,23,254 likes</p>
            <p>&#x2022;</p>
            <b>50 songs</b>
            <p>&#x2022;</p>
            <p>about 2 hr 30 mins</p>
          </div>
        </div>
      </div>

      <div className="w-full mt-10 text-[#9F9F9F] text-sm">
        <div className="grid grid-cols-4 justify-center items-center p-2">
          <div className="flex gap-5">
            <p>#</p>
            <p>Title</p>
          </div>
          <p>Album</p>
          <p>Date Added</p>
          <img className="w-4" src={assets.clock_icon} alt="" />
        </div>
        <hr className="mt-4 border-none h-[1px] bg-[#9F9F9F]" />
        {songsData.map((song) => {
          return (
            <AlbumSongItem
              key={song.id}
              id={song.id}
              albumName={albumsData[id].name}
              desc={song.desc}
              name={song.name}
              duration={song.duration}
              songImg={song.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DisplayAlbum;
