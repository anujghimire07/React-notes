import { useState, useEffect } from "react";

const useFetch = (url, load) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    if (load) {
      async function getdata() {
        let res = await fetch(url);
        let final = await res.json();
        setdata(final);
      }
      getdata();
    } else {
      setdata([]);
    }
  }, [load, url]);

  return data;
};

export default useFetch;