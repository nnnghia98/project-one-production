import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Checkbox,
  Button,
  RadioButton,
  CustomInput,
  Dropdown,
} from "components";
import { setStorageItem, getStorageItem } from "utils";

import "./styles.scss";

const PaymentDetail = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isSaveShippingDetail, setIsSaveShippingDetail] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (paymentMethod === "atm") {
      return navigate("card-detail");
    }

    return navigate("/shopping-center/checkout/done");
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
              <CustomInput
                type="text"
                name="firstName"
                placeholder="First name"
                required
              />
              <CustomInput
                type="text"
                name="lastName"
                placeholder="Last name"
                required
              />
            </div>
            <CustomInput
              type="text"
              name="address"
              placeholder="Address and number"
              required
            />
            <CustomInput
              type="text"
              name="phoneNumber"
              placeholder="Phone number"
              required
            />
            <div className="row-2 flex">
              <CustomInput
                type="text"
                name="city"
                placeholder="City"
                required
              />
              <CustomInput
                type="text"
                name="postalCode"
                placeholder="Postal code"
                required
              />
            </div>
            <Dropdown name="Country" />
            <CustomInput
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
            <Button
              name={paymentMethod === "cod" ? "Place order" : "Next"}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentDetail;
