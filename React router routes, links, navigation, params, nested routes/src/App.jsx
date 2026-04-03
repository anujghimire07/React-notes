import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import { createBrowserRouter } from "react-router-dom";
function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  s;
  return (
    <>
      <div> this is a paragraph</div>
      <Nav />
    </>
  );
}

export default App;
