import { useState } from "react";
import MyCar from "./useState in objects";
import MyNum from "./useState in arrays";

function App() {
  //useState hook
  const [brand, setBrand] = useState("ford");
  return (
    <>
      <div>It is a {brand} car.</div>
      <div>
        <MyCar />
      </div>
      <div>
        <MyNum />
      </div>
    </>
  );
}

export default App;
