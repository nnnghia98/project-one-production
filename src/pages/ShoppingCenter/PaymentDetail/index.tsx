import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Checkbox,
  Button,
  RadioButton,
  CustomInput,
  Dropdown,
  Loading,
} from "components";
import { setStorageItem } from "utils";
import { ICountriesResponse } from "interfaces";
import { fetchCountries } from "api";

import "./styles.scss";

const PaymentDetail = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isSaveShippingDetail, setIsSaveShippingDetail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (paymentMethod === "atm") {
      return navigate("card-detail");
    }

    return navigate("/shopping-center/checkout/done", {
      state: {
        method: "cod",
        isSucceeded: true,
      },
    });
  };

  const radioChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

  const checkboxChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsSaveShippingDetail(event.target.checked);
  };

  const getAllCountries = () => {
    fetchCountries()
      .then((res: ICountriesResponse) => {
        setStorageItem("countries", res.data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    setIsLoading(true);
    getAllCountries();
  }, []);

  return (
    <div className="payment-detail flex">
      {isLoading ? (
        <Loading />
      ) : (
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
              <Dropdown name="Country" />
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
      )}
    </div>
  );
};

export default PaymentDetail;
