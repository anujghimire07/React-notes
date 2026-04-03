import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Navbar";
import { createBrowserRouter } from "react-router-dom";
function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element:""
    }, {}, 
  ]);
  return (
    <>
    <div> this is a paragraph</div>
      <Nav />
    </>
  );
}

export default App;
