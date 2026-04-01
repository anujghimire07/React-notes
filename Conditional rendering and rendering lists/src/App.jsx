import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [showbtn, setshowbtn] = useState(false);
 

  /* function Todo() { //similar to App() function
    return (<><div>i am todo</div></>);
  }
    */
  return (
    <>
      {/*  <Todo></Todo> */}
      <button
        onClick={() => {
          setshowbtn(!showbtn); //if true => false;  if false => true
        }}
      >
        show
      </button>
      <div>
        {/*suitable for one expected outcome*/}
        {showbtn && <p>i will be shown if show button is clicked </p>}

        {/* {showbtn? <p>show button was clicked</p>: <p>nothing</p>} */}
      </div>

    </>
  );
}

export default App;
