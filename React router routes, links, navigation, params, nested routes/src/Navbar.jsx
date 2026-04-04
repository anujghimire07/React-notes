import React from "react";

import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <nav>
        <NavLink
          className={(e) => {
            return e.isActive ? "bgcolor" : "";
          }}
          to="/"
        >
          <li>home</li>
        </NavLink>
        <NavLink
          className={(e) => {
            return (e.isActive ? "bgcolor" : "");
          }}
          to="/login"
        >
          <li>Login</li>
        </NavLink>
        <NavLink
          className={(e) => {
            return e.isActive ? "bgcolor" : "";
          }}
          to="/about"
        >
          <li>About</li>
        </NavLink>
        <NavLink
          className={(e) => {
            return e.isActive ? "bgcolor" : "";
          }}
          to="/users"
        >
          <li>Users</li>
        </NavLink>
      </nav>
    </>
  );
}
