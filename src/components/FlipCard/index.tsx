import { useState } from "react";

import { IFlipCardProps } from "interfaces";

import "./styles.scss";

const FlipCard = ({ cover, title, detail }: IFlipCardProps) => {
  const [flip, setFlip] = useState(false);

  const flipCard = () => {
    setFlip(!flip);
  };

  return (
    <div
      className={`flip-card ${flip !== true ? "front-flip" : "back-flip"}`}
      onClick={flipCard}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">{cover}</div>
        <div className="flip-card-back">
          <div className="title">{title}</div>
          <div className="detail">{detail}</div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
