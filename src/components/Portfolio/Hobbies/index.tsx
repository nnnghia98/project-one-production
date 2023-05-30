import React from "react";

import controllerSvg from "assets/svg/controller.svg";
import guitarAcousticSvg from "assets/svg/guitarAcoustic.svg";
import musicBoxOutlineSvg from "assets/svg/musicBoxOutline.svg";
import soccerFieldSvg from "assets/svg/soccerField.svg";

import "./styles.scss";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <div className="title">Hobbies</div>
      <div className="content flex">
        <img src={controllerSvg} alt="controllerSvg" />
        <img src={guitarAcousticSvg} alt="guitarAcousticSvg" />
        <img src={musicBoxOutlineSvg} alt="musicBoxOutlineSvg" />
        <img src={soccerFieldSvg} alt="soccerFieldSvg" />
      </div>
    </div>
  );
};

export default Hobbies;
