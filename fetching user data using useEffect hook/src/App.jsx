import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setdata] = useState([]);
  const [load, setload] = useState(false)
  useEffect(() => {
    setdata = fetch("https://jsonplaceholder.typicode.com/users").json();
  }, [load]);

  return (
    <>
      <button
        onClick={() => {
          setload(true);
        }}
      >
        Load Users
      </button>

      <ol>
        {data.map()}
      </ol>
    </>
  );
}

export default App;
