import { useState } from "react";
import MainLayout from "../components/MainLayout";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const counterPlusHandler = () => setCounter((prev) => prev + 1);

  const counterMinusHandler = () => setCounter((prev) => prev - 1);

  return (
    <MainLayout title="counter">
      <h1 className="counter"> {counter}</h1>
      <button onClick={counterPlusHandler}>+</button>
      <button onClick={counterMinusHandler}>-</button>
    </MainLayout>
  );
};

export default Counter;
