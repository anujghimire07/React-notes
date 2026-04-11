import React, { memo } from "react";

const Navbar = ({ value, send }) => {
  console.log("navbar is rendered");
  return (
    <div>
      <p>i am a {value} navbar</p>
      <button onClick={()=>{getMessage()}}>message</button>
    </div>
  );
};

export default memo(Navbar);
