{
  /* some events demonstration
  import { useState } from "react";
import "./App.css";

function App() {
  function handle() {
    alert("hey, you clicked the button");
  }

  function changediv() {
    alert("hey, you hovered over the mouse");
  }

  function input(e) {
    setname(e.target.value);
  }
  const [name, setname] = useState("");

  return (
    <>
      <div className="button">
        <button onClick={handle}>click me</button>
      </div>

      {/*<div className="red" onMouseOver={changediv}>
        i am a div
      </div>

      <input type="text" value={name} onChange={input} />

      
    </>
  );
}

export default App;
 */
}
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [form, setform] = useState({
    email: "",
    phone: "",
  });

  function handlechange(e) {
    setform({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  }
  return (
    <>
      <input
        type="text"
        value={form.email}
        name="email"
        onChange={handlechange}
      />
      <input
        type="text"
        value={form.phone}
        name="phone"
        onChange={handlechange}
      />
    </>
  );
}

export default App;
