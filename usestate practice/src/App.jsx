import { useState } from "react";
import "./App.css";

function App() {
  let [text, settext] = useState("");
  let [list, setlist] = useState([]);

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => settext(e.target.value)}
      />
      <button
        onClick={() => {
          if (text === "") {
            alert("add something");
          } else {
            setlist([...list, text]);
          }
          settext("");
        }}
      >
        add
      </button>
      <button onClick={() => setlist([])}>delete all</button>
      <ol>
        {list.map((item, index) => (
          <li key={index}>
            <input type="checkbox" />
            {item}
            <button onClick={() => setlist(list.filter((_, i) => i !== index))}>
              delete
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
