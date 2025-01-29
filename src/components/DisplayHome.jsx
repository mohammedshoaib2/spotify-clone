import React from "react";
import Navbar from "./Navbar";
import AlbumItem from "./AlbumItem";
import { albumsData, songsData } from "../assets/assets";
import SongItem from "./SongItem";

function DisplayHome() {
  return (
    <div
      style={{
        overflow: "scroll",
      }}
      className="w-full h-full bg-[#121212] rounded p-5"
    >
      <Navbar />
      {/* featured Section */}
      <div className="flex  flex-col my-5 gap-2 text-white">
        <h1 className="text-2xl font-bold ">Featured Charts</h1>
        <div
          style={{
            scrollBehavior: "smooth",
            overflow: "scroll",
          }}
          className="flex gap-10 p-3 "
        >
          {albumsData.map((album) => {
            return (
              <AlbumItem
                key={album.id}
                id={album.id}
                name={album.name}
                desc={album.desc}
                image={album.image}
              />
            );
          })}
        </div>
      </div>
      {/* featured Section */}

      {/* Songs Section */}

      <div className="flex flex-col gap-2 text-white">
        <h1 className="text-2xl font-bold ">Today's biggest hits</h1>
        <div
          style={{
            scrollBehavior: "smooth",
            overflowX: "scroll",
          }}
          className="flex gap-10 p-3"
        >
          {songsData.map((song) => {
            return (
              <SongItem
                key={song.id}
                id={song.id}
                name={song.name}
                desc={song.desc}
                image={song.image}
              />
            );
          })}
        </div>
      </div>
      {/* Songs Section */}
    </div>
  );
}

export default DisplayHome;
