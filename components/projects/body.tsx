import React, { FC } from "react";
import Image from "next/image";

interface techStack {
  name: string;
  src: string;
}

interface BodyProps {
  technologies: techStack[];
}

const Body: FC<BodyProps> = ({ technologies }) => {
  return (
    <>
      <h1> Tech Stack: </h1>
      <ul>
        {technologies?.map((t, i) => (
          <div key={i}>
            <li> {t.name} </li>
            <img
              src={t.src}
              alt="Picture of the author"
              className="tech-icons"
            />
          </div>
        ))}
      </ul>
    </>
  );
};

export default Body;
