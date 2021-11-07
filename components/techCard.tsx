import React, { FC } from "react";

interface techCardProps {
  title: string;
  body: string;
  img?: string;
}

const TechCard: FC<techCardProps> = ({ title, body, img }) => {
  return (
    <div className="tech-card">
      <img src={img} alt="img" />
      <h2 className="tech-card-title"> {title} </h2>
      <p className="tech-card-body"> {body} </p>
    </div>
  );
};

export default TechCard;
