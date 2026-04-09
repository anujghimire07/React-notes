import { useState } from "react";
import "./App.css";
import useFetch from "./useFetch";

function App() {
  const [load, setload] = useState(false);

  const data = useFetch(
    "https://jsonplaceholder.typicode.com/users",
    load
  );

  return (
    <>
      <button onClick={() => setload(!load)}>
        {load ? "Unload Data" : "Load Data"}
      </button>

      <ol>
        {data.map((i) => (
          <li key={i.id}>{i.name}</li>
        ))}
      </ol>
    </>
  );
}

export default App;