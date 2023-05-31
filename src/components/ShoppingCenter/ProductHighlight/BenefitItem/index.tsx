import React from "react";

import { IBenefitItemProps } from "interfaces/ShoppingCenter";

import doneSvg from "assets/svg/done.svg";

import "./styles.scss";

const BenefitItem = ({ benefit }: IBenefitItemProps) => {
  return (
    <div className="benefit-item flex">
      <div className="svg-wrapper flex">
        <img src={doneSvg} alt="doneSvg" />
      </div>
      {benefit}
    </div>
  );
};

export default BenefitItem;
