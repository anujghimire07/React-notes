import React from "react";
import { useState, useEffect } from "react";
import {createBrowserRouter} from 'react-router-dom'

export default function Nav() {
  return (
    <>
      <nav>
        <a href="/"><li>home</li></a>
        <a href="/"><li>about</li></a>
        <a href="/"><li>contact us</li></a>
      </nav>
    </>
  );
}
