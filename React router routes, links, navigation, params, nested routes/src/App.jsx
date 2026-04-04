import "./App.css";
import Nav from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./Users";
function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Nav /> <Home />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Nav /> <Login />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Nav />
          <About />
        </>
      ),
    },
    {
      path: "/users/:username",
      element: (
        <>
          <Nav />
          <Users />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
