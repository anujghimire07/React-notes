import { useState, useCallback } from "react";

import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  const [count, setcount] = useState(0);
  const [message, setmessage] = useState("good")
const getMessage = useCallback(() => {
  return "another" +count
}
, [/*count */])//changes when count changes ie. count is the dependency



  return (
    <>
      <Navbar value={"good"} send={getMessage} />
      <div>
        <button
          onClick={() => {
            setcount(count + 1);
          }}
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
