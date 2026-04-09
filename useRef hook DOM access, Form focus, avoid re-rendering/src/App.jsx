import { useState, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [count, setcount] = useState(0);
  let a = useRef(0); //avoiding re-rendering
  let btn = useRef(); //DOM manipulation using useRef
  let inp = useRef();
  let targetdiv = useRef();
  useEffect(() => {
    a.current = a.current + 1;
    console.log(`re-rendering => a : ${a.current}`);
  }, [count]);

  useEffect(() => {
    btn.current.style.backgroundColor = "red";
    btn.current.style.color = "white";
  }, []);
  useEffect(() => {
    inp.current.focus(); //targeting form elements
  }, []);
  useEffect(() => {
    targetdiv.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      {count}
      <br></br>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        add
      </button>
      <button ref={btn}>DOM Access</button>
 <input type="text" ref={inp} />
      <div className="scroll">this is a div</div>
      <div className="scroll">this is a div</div>
      <div className="scroll">this is a div</div>
      <div className="scroll">this is a div</div>
      <div className="scroll">this is a div</div>
      <div className="scroll">this is a div</div>
      <div className="scroll">this is a div</div>
      <div className="scroll">this is a div</div>
      <div className="scroll">this is a div</div>
      <div className="scroll" ref={targetdiv}>
        i want to scroll up to here
      </div>
     
    </>
  );
}

export default App;
