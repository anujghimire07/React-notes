import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Navbar";
import Home from "./Home";
import { createBrowserRouter } from "react-router-dom";
function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {},
  ]);
  return (
    <>
      <div> this is a paragraph</div>
      <Nav />
    </>
  );
}

export default App;
