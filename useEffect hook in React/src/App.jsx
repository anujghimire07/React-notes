import { useState, useEffect } from "react";
import Para from "./paragraph";
import "./App.css";

function App() {
  const [count, setcount] = useState(0);
  const [int, setint] = useState(-1);

  //executes every time the app.jsx renders
  useEffect(() => {
    alert("welcome to the page");
  }, []);

  //executes each time the value of count changes
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
