import React, { FC } from "react";
import { Body, Landing } from "../../components/projects";
import { PROJECTS } from "../../config/config";

const Audiophile: FC = () => {
  return (
    <>
      <Landing title="Audiophile" content="An e commerce web app" />
      <Body technologies={PROJECTS.audiophile.technologies} />
    </>
  );
};

export default Audiophile;
