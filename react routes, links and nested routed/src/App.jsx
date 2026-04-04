import { useState } from "react";
import { BrowserRouter, Routes, Link, Route, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  function Home() {
    return <h3>Home Page</h3>;
  }
  function Products() {
    return (
      <>
        <h3>Products Page</h3>
        <Link to="/products/cars">Cars</Link> {" | "}
        <Link to="/products/bikes">Bikes</Link>
        <Outlet />
      </>
    );
  }

  function Cars() {
    return (
      <>
        <h3>cars</h3>
        <li>jeep</li>
        <li>mercedes</li>
        <li>volvo</li>
      </>
    );
  }
  function Bikes() {
    return (
      <>
        <h3>Bikes</h3>
        <li>ducati</li>
        <li>kawasaki</li>
        <li>beneli</li>
      </>
    );
  }
  function Contact() {
    return <h3>contact Page</h3>;
  }

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/products">
            <li>Product</li>
          </Link>
          <Link to="/contact">
            <li>Contact us</li>
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}>
            <Route path="cars" element={<Cars />}></Route>
            <Route path="bikes" element={<Bikes />}></Route>
          </Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
