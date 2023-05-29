import React from "react";

import Project from "components/Project";

import haloLighting from "assets/img/halo-lighting.png";

import "./styles.scss";

const Projects = () => {
  return (
    <div>
      <div className="projects">
        <div className="content">
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
              />
            </div>
            {/* <div className="item">
              <Project />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
