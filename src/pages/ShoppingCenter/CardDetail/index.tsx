import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "components";

import creditCardSvg from "assets/svg/creditCard.svg";

import "./styles.scss";

const CardDetail = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {};

  const navigateBack = () => navigate(-1);

  return (
    <div className="card-detail flex">
      <div className="content flex column">
        <div className="title">Card detail</div>
        <form className="card-detail-form" onSubmit={handleSubmit}>
          <div className="card-header flex">
            <span className="svg-wrapper">
              <img src={creditCardSvg} alt="creditCardSvg" />
            </span>
            Credit Card
          </div>
          <div className="input-group flex column">
            <input
              type="number"
              name="cardNumber"
              placeholder="Card number"
              required
            />
            <input
              type="text"
              name="holderName"
              placeholder="Holder name"
              required
            />
            <div className="row-2 flex">
              <input
                type="text"
                name="expirationDate"
                placeholder="Expiration (MM/YY)"
                required
              />
              <input
                type="text"
                pattern="[0-9]*"
                name="ccv"
                placeholder="CCV"
                required
              />
            </div>
          </div>
        </form>
        <div className="done flex">
          <div className="go-back" onClick={navigateBack}>
            Back to shipping
          </div>
          <div className="button-wrapper">
            <Button name="Done" onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
