import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [showbtn, setshowbtn] = useState(false);
  const [student, setstudent] = useState([
    {
      rollno: "1",
      id: "I",
      grade: "A",
    },
    {
      rollno: "2",
      id: "II",
      grade: "B",
    },
    {
      rollno: "3",
      id: "III",
      grade: "C",
    },
  ]);

  /* function Todo() { //similar to App() function
    return (<><div>i am todo</div></>);
  }
    */
  return (
    <>
      {/*  <Todo></Todo> */}
      <button
        onClick={() => {
          setshowbtn(!showbtn); //toggle between true and false. if true => false;  if false => true
        }}
      >
        show
      </button>
      <div>
        {/*suitable for one expected outcome*/}
        {showbtn && <p>i will be shown if show button is clicked </p>}

        {/* suitable for if else type of situations */}
        {/* {showbtn? <p>show button was clicked</p>: <p>nothing</p>} */}
      </div>

      <div>
        {student.map((s) => {
          return (
            <p key={s.rollno}>
              {/*function must return a key*/}
              {s.id},{s.grade}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default App;
