import { useState } from "react";
import "./App.css";
function App() {
  let [counter, countfunc] = useState(0);
  return (
    <>
      <div>
        <div>count = {counter}</div>
        <button
          onClick={() => {
            countfunc(counter + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            countfunc(counter - 1);
          }}
        >
          -
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            countfunc(0);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
