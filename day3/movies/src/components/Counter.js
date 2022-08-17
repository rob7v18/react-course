import { useState } from "react";

function Counter() {
  console.log("RENDER Counter component");

  //      [readOnly, updater]
  const [count, setCount] = useState(0);

  console.log("Current count is ", count);

  return (
    <div>
      <h1>Counter!</h1>

      <div style={{ fontSize: "60px", fontWeight: "bold" }}>{count}</div>

      <button
        onClick={() => {
          const newAmount = count + 1;

          setCount(newAmount); // doesn't update here, instead it sets in a queue and only updates once the entire function completes

          console.log("did it update?", count);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
