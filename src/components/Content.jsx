import React from "react";
import Counter from "./Counter";

const Content = ({ count, setCount }) => {
  return (
    <div>
      <Counter count={count} setCount={setCount} />
    </div>
  );
};

export default Content;
