import React from "react";

import { Button } from "components";
import { IProjectProps } from "interfaces/Portfolio";

import "./styles.scss";

const Project = ({ bannerSrc, name, shortDes }: IProjectProps) => {
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
          <Button
            name="View Project"
            url="https://github.com/phongtran231/halo-client"
            onClick={() => console.log("hihi")}
          />
          <Button
            name="View Website"
            url="https://thietkedentrangtri.com/"
            onClick={() => console.log("hihi")}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
