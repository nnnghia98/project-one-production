import React from "react";

import FlipCard from "components/FlipCard";

import "./styles.scss";

const Experiences = () => {
  return (
    <div className="experiences">
      <div className="content">
        <div className="title">Experiences</div>
        <div className="description">Click on a card to see detail</div>
        <div className="list">
          <div className="row">
            <FlipCard cover="Apr 2022 - Apr 2023" detail="" />
            <FlipCard cover="Apr 2021 - Apr 2022" detail="" />
          </div>
          <div className="row">
            <FlipCard cover="Jan 2020 - Mar 2021" detail="" />
            <FlipCard cover="Sep 2019 - Jan 2020" detail="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
