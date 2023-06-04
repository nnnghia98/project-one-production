import React from "react";

import { Button } from "components";
import { IProjectProps } from "interfaces/Portfolio";

import "./styles.scss";

const Project = ({
  bannerSrc,
  name,
  shortDes,
  repoUrl,
  websiteUrl,
}: IProjectProps) => {
  return (
    <div className="project flex">
      <div className="img-wrapper flex">
        <img src={bannerSrc} alt="web screenshot" />
      </div>
      <div className="detail flex column">
        <div className=" content flex column">
          <div className="name">{name}</div>
          <div className="short-des">{shortDes}</div>
        </div>
        <div className="button-wrapper flex">
          <Button name="View Project" url={repoUrl} />
          <Button name="View Website" url={websiteUrl} />
        </div>
      </div>
    </div>
  );
};

export default Project;
