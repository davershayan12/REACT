import { useState } from "react";

export const BatchingCounter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [active, isActive] = useState(false);

  const handleClick = () => {
    setCount((prev) => {
      return prev + 1;
    });
    setCount((prev) => {
      return prev + 6;
    });
    setCount((prev) => {
      return prev + 7;
    });
    setTimeout(() => {}, 2000);
  };
  setName("Update");
  isActive(true);
  return (
    <div>
      <h2>Count: {count}</h2>
      <p>name:{name}</p>
      <h3>active:{active ? "yes" : "no"}</h3>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
