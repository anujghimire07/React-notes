import { useState } from "react";
export default function MyNum() {
  const [num, setNum] = useState([1, 2, 3]);
  return (
    <>
      {num.join(",")}
      <div>
        <button
          onClick={() => {
            setNum([...num, num.length + 1]);
          }}
        >
          add
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setNum(num.slice(0, -1));
            if ((num = [])) {
              setNum = [1];
            }
          }}
        >
          delete
        </button>
      </div>
      <div>
        <button onClick={() => setNum([1, 2, 3])}>Reset</button>
      </div>
    </>
  );
}
