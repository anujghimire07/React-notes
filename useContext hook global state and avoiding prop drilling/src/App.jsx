import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { CounterContext } from "./components/Context";
function App() {
  const [count, setcount] = useState(4);
  return (
    <>
      <CounterContext.Provider value={count}>
        <Navbar />
      </CounterContext.Provider>
    </>
  );
}

export default App;
