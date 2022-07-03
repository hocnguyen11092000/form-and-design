import React from "react";
import { render } from "react-dom";
import Demo from "./demo";
import "./app.css";
import RootRoute from "./routes/RootRoute";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter>
    <RootRoute></RootRoute>
  </BrowserRouter>,
  document.getElementById("root")
);
