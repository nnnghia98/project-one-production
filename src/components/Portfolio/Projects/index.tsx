import React from "react";

import Project from "./Project";

import awsLandingPage from "assets/img/aws-landing-page-screenshot.png";
import haloLighting from "assets/img/halo-lighting.png";

import "./styles.scss";

const Projects = () => {
  return (
    <div>
      <div className="projects" id="projects">
        <div className="flex column">
          <div className="title">Projects</div>
          <div className="description">
            Some things I’ve worked (or am working) on
          </div>
          <div className="list">
            <div className="item flex row">
              <Project
                bannerSrc={haloLighting}
                name="HALO Lighting"
                shortDes="Main technologies: Next.js, Vue.js, PHP, JavaScript.
Main work: Build frontend for an e-commerce site on Next.js.
"
                repoUrl="https://github.com/phongtran231/halo-client"
                websiteUrl="https://thietkedentrangtri.com/"
              />
            </div>
            <div className="item flex row">
              <Project
                bannerSrc={awsLandingPage}
                name="Personal Landing Page"
                shortDes="Main technologies: React.js.
                Main work: Build frontend on React.js based on an example Figma.
"
                repoUrl="https://github.com/nnnghia98/aws-courses-adv-landing-page"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
