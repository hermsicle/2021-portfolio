import React, { FC, useState } from "react";
import Tooltip from "@mui/material/Tooltip";

interface technology {
  name: string;
  src: string;
}

interface techCardProps {
  title: string;
  body: string;
  img?: string;
  technologies: technology[];
}

const TechCard: FC<techCardProps> = ({ title, body, img, technologies }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleCardEnter = () => {
    setIsFlipped(true);
  };
  const handleCardLeave = () => {
    setIsFlipped(false);
  };
  return (
    <div className="scene" onMouseLeave={handleCardLeave}>
      <div
        className={
          isFlipped ? "tech-card-wrapper is-flipped" : "tech-card-wrapper"
        }
        onMouseEnter={handleCardEnter}
      >
        <div className="tech-card front">
          <img src={img} alt="img" />
          <h2 className="tech-card-title"> {title} </h2>
          <p className="tech-card-body"> {body} </p>
        </div>
        <div className="tech-card back">
          <h2 className="tech-card-title"> {title} </h2>
          <div className="tech-list">
            {technologies?.map(({ name, src }, i) => (
              <Tooltip key={i} title={name}>
                <img src={src} className="tech-icon" alt="dev-icon" />
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechCard;

// Make the cards hover and turn 180deg showing tech stack
