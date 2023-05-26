import React from "react";

import { IFlipCardProps } from "interfaces";

import "./styles.scss";

const FlipCard = ({ cover, detail }: IFlipCardProps) => {
  return (
    <div className="flipCard">
      <div className="front">{cover}</div>
      {/* <div className="back">ascasckmnalscjbas</div> */}
    </div>
  );
};

export default FlipCard;
