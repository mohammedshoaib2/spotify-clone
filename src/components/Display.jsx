import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import DisplayHome from "./DisplayHome";

function Display() {
  return (
    <div className="w-full h-[100%] py-2 pr-2">
      <Routes>
        <Route path="/" element={<DisplayHome />}></Route>
      </Routes>
    </div>
  );
}

export default Display;
