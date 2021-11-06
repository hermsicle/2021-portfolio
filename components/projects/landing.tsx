import React, { FC } from "react";
import Link from "next/link";

interface LandingProps {
  title: string;
  content: string;
  //Options Prop use a ?:
  rating?: number;
}

const Landing: FC<LandingProps> = ({ title, content, rating }) => {
  return (
    <div className="project-landing">
      <Link href="/projects"> Back to projects </Link>
      <h1> {title} </h1>
      <h1> {content} </h1>
      <h1> {rating} </h1>
    </div>
  );
};

export default Landing;
