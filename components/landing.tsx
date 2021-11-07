/* eslint-disable @next/next/link-passhref */
import React, { FC } from "react";
import { BackgroundAnimation } from ".";
import Section from "../layout/section";
import Link from "next/link";

const Landing: FC = () => {
  return (
    <Section>
      <div className="landing">
        <div className="landing-details">
          <h1 className="landing-title">Hi! 👋🏻</h1> 
          <br />
          <h1 className="landing-title">I'm Herman</h1>
          <br />
          <p>
            a full-stack software engineer with a focus in front-end
            development, specializing in building awesome web apps with React :)
          </p>
          <Link href="#about">
            <button className="button-1"> Learn More </button>
          </Link>
        </div>
        <div className="animated-bg">
          <BackgroundAnimation />
        </div>
      </div>
    </Section>
  );
};

export default Landing;
