import React, { FC, useState } from "react";
import Link from "next/link";

const About: FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <Link href="/"> Home </Link>
      <h1>About Page</h1>
      <h1>Create a simple counter with typescript react</h1>
      <h1> {count} </h1>
      <button onClick={increment}> Increment </button>
      <button> Decrement </button>
    </>
  );
};

export default About;
