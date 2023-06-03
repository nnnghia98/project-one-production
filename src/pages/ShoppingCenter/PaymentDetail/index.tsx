import React, { useState } from "react";

import { Checkbox, Button, RadioButton } from "components";

import "./styles.scss";

const PaymentDetail = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isSaveShippingDetail, setIsSaveShippingDetail] = useState(false);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    alert(`Submit!`);
  };

  const radioChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

  const checkboxChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsSaveShippingDetail(event.target.checked);
  };

  return (
    <div className="payment-detail flex">
      <form className="content flex" onSubmit={handleSubmit}>
        <div className="shipping-address">
          <div className="title">Shipping address</div>
          <div className="input-group flex column">
            <div className="row-2 flex">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                required
              />
            </div>
            <input
              type="text"
              name="address"
              placeholder="Address and number"
              required
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone number"
              required
            />
            <div className="row-2 flex">
              <input type="text" name="city" placeholder="City" required />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal code"
                required
              />
            </div>
            <div>Country</div>
            <input
              type="text"
              name="shippingNote"
              placeholder="Shipping note (optional)"
            />
            <div className="checkbox-wrapper">
              <Checkbox
                title="Save this information for future payment"
                htmlName="checkbox"
                onChange={checkboxChangeHandler}
                checked={isSaveShippingDetail}
              />
            </div>
          </div>
        </div>
        <div className="payment-method flex column">
          <div className="title">Payment method</div>
          <div className="radio-wrapper flex column">
            <RadioButton
              changed={radioChangeHandler}
              id="1"
              isSelected={paymentMethod === "cod"}
              label="COD"
              value="cod"
            />
            <RadioButton
              changed={radioChangeHandler}
              id="2"
              isSelected={paymentMethod === "atm"}
              label="ATM"
              value="atm"
            />
          </div>
          <div className="total">Total: $30.95</div>
          <div className="button-wrapper">
            <Button name="Done" onClick={() => alert("Done")} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentDetail;
