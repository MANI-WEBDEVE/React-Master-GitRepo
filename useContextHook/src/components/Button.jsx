import React from "react";
import Component1 from "./component1";
import { useContext } from "react";
import { counterContext } from "../context/context";
const Button = () => {
  const value = useContext(counterContext);
  return (
    <>
      <div>
        <button onClick={() => value.setCount((count) => count + 1)}>button ho ma</button>
        <Component1/>
      </div>
    </>
  );
};

export default Button;
