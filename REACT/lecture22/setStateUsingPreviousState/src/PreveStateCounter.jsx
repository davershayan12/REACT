import { useState } from "react";

export const PrevStateCounter = () => {
  const [count, setCount] = useState(0);
  console.log("Render phase: Component rendering with count = ", count);

  const handleClick = () => {
    setCount((prev) => {
      console.log("before increment + 1: ", prev);
      return prev + 1;
    });
    console.log("After setCount(count + 1), count is: ", count);
    setCount((prev) => {
      console.log("increament before 6:", prev);
      return prev + 6;
    });
    console.log("After setCount(count + 5), count is: ", count);
    setCount((prev) => {
      console.log("increament 7 before:", prev);
      return prev + 7;
    });
    console.log("After setCount(count + 10), count is: ", count);
    setTimeout(() => {
      console.log("After 2 seconds, count is: ", count);
    }, 2000);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
