import React from "react";
import { Routes, Route } from "react-router-dom";
import Diary from "../components/diary/Diary";
import Demo from "../demo";

function RootRoute() {
  return (
    <Routes>
      <Route path="/" element={<Diary />}></Route>
      <Route path="/demo" element={<Demo></Demo>}></Route>
    </Routes>
  );
}

export default RootRoute;
