import React, { FC } from "react";

interface cardProps {
  title: string;
  content: string;
  github: string;
  url?: string;
  img: string;
  tags: string[];
}

const ProjectCard: FC<cardProps> = ({
  img,
  title,
  content,
  github,
  url,
  tags,
}) => {
  return (
    <div className="card">
      <img src={img} alt="img" />
      <button className="read-more button-1">READ MORE</button>
    </div>
  );
};

export default ProjectCard;
