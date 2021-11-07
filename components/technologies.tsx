import React, { FC } from "react";
import Section from "../layout/section";
import { TECHNOLOGIES } from "../constants/config";
import { TechCard } from ".";

const { subtitle, stack } = TECHNOLOGIES;

const Technologies: FC = () => {
  return (
    <Section>
      <div className="technologies">
        <h1>Technologies</h1>
        <h2> {subtitle} </h2>
        <div className="tech-container">
          {stack?.map(({ title, body, img, technologies }, i) => (
            <TechCard
              title={title}
              body={body}
              img={img}
              key={i}
              technologies={technologies}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Technologies;
