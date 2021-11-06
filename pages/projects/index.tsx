import React, { FC } from "react";
import Link from "next/link";

const Projects: FC = () => {
  return (
    <>
      <h1>VIEW ALL PROJECTS</h1>
      <Link href="/projects/cryptoverse"> Cryptoverse </Link>
      <Link href="/projects/audiophile"> Audiophile </Link>
      <Link href="/projects/arcane404"> Arcane404 </Link>
      <Link href="/projects/netflix-clone"> Netflix Clone </Link>
    </>
  );
};

export default Projects;
