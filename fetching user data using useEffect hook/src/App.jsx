import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setdata] = useState([]);
  const [load, setload] = useState(false);
  useEffect(() => {
    if (load) {
      async function getdata() {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let d = await res.json();
        setdata(d);
      }
      getdata();
    }
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
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ol>
    </>
  );
}

export default App;
