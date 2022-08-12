import React, { useState } from "react";

export default function CounterButton() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Counter: {count}
      </button>
    </>
  );
}
