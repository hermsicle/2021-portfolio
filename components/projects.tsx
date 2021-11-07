import React, { FC } from "react";
import Section from "../layout/section";
import { PROJECTS } from "../constants/config";
import ProjectCard from "./projectCard";
const Projects: FC = () => {
  return (
    <Section>
      <div className="projects">
        <h1>Projects</h1>
        <div className="projects-container">
          {PROJECTS.map(({ id, title, content, github, url, img, tags }) => (
            <ProjectCard
              key={id}
              title={title}
              content={content}
              github={github}
              url={url}
              img={img}
              tags={tags}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
