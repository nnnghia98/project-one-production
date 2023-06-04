import React from "react";

import FlipCard from "components/FlipCard";

import "./styles.scss";

const Experiences = () => {
  return (
    <div className="experiences" id="experiences">
      <div className="content">
        <div className="title">Experiences</div>
        <div className="description">Click on a card to see detail</div>
        <div className="list">
          <div className="row">
            <FlipCard
              cover="Apr 2022 - Apr 2023"
              title="Software Engineer
at EPAM System"
              detail={`Main technologies: React, React Native and TypeScript.
React Developer in EPAM client project (5 months).
React Developer in EPAM APAC project (11 months).
React Native Developer in EPAM PoC project.
Experienced working in Scrum and Agile.`}
            />
            <FlipCard
              cover="Apr 2021 - Apr 2022"
              title="Junior Software Engineer
at EPAM System"
              detail={`Main technologies: React, React Native and TypeScript.
Trainee in 3-month training.
Implemented and updated application modules under the direction of Senior.
Experienced working in Scrum and Agile.`}
            />
          </div>
          <div className="row">
            <FlipCard
              cover="Jan 2020 - Mar 2021"
              title="Web Developer
at ZIGEXN VeNtura"
              detail={`Main technologies: Ruby on Rails, MySQL, jQuery.
Developed and maintained back-end system.
Experienced working on Linux/Ubuntu env.
Experienced working in Scrum and Agile.`}
            />
            <FlipCard
              cover="Sep 2019 - Jan 2020"
              title="Web Developer Intern
at ZIGEXN VeNtura"
              detail={`Technologies: Ruby on Rails, MySQL, RESTful API design.
Developed a basic Rails application based on course’s requirements.`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
