import { useState, useEffect } from "react";
import Para from "./paragraph";
import "./App.css";

function App() {
  const [count, setcount] = useState(0);
  const [int, setint] = useState(-1);

  //case 1: executes only on first render
  useEffect(() => {
    alert("runs on first render");
  }, []);

  //case 2: executes on every render
  useEffect(() => {
    alert("runs on every render");
  });

  //case 3: executes only when certain value changes
  useEffect(() => {
    alert(`count was changed to ${count}`);
    setint(int + 1);
  }, [count]);

  return (
    <>
      <Para integer={int} />
      <p>count is {count}</p>
      <button onClick={() => setcount(count + 1)}>add</button>
    </>
  );
}

export default App;
