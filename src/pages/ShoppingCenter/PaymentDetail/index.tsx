import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import isEmpty from "lodash/isEmpty";

import {
  Checkbox,
  Button,
  RadioButton,
  CustomInput,
  Dropdown,
} from "components";
import {
  setStorageItem,
  getStorageItem,
  validateValues,
  removeStorageItem,
} from "utils";
import {
  ICountriesResponse,
  ICountry,
  IPaymentDetailFormValues,
  IPaymentDetailFormError,
} from "interfaces";
import { fetchCountries } from "api";
import { AppContext, toggleLoading, setCart } from "context";

import "./styles.scss";

const PaymentDetail = () => {
  const [errorMessages, setErrorMessage] = useState<IPaymentDetailFormError>();
  const [formValues, setFormValues] = useState<IPaymentDetailFormValues>({});
  const { dispatch } = useContext(AppContext);

  const navigate = useNavigate();

  const total = getStorageItem("total");

  // Form inputs
  const [selectedCountry, setSelectedCountry] = useState<ICountry>();
  const firstNameInputRef = useRef<HTMLInputElement | null>(null);
  const lastNameInputRef = useRef<HTMLInputElement | null>(null);
  const addressInputRef = useRef<HTMLInputElement | null>(null);
  const phoneNumberInputRef = useRef<HTMLInputElement | null>(null);
  const cityInputRef = useRef<HTMLInputElement | null>(null);
  const postalCodeInputRef = useRef<HTMLInputElement | null>(null);
  const shippingNoteInputRef = useRef<HTMLInputElement | null>(null);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isSaveShippingDetail, setIsSaveShippingDetail] = useState(false);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formValues: IPaymentDetailFormValues = {
      firstName: firstNameInputRef.current?.value,
      lastName: lastNameInputRef.current?.value,
      address: addressInputRef.current?.value,
      phoneNumber: phoneNumberInputRef.current?.value,
      country: selectedCountry,
      city: cityInputRef.current?.value,
      postalCode: postalCodeInputRef.current?.value,
      shippingNote: shippingNoteInputRef.current?.value,
      isSaveShippingDetail: isSaveShippingDetail,
    };

    const errors = validateValues(formValues);

    setErrorMessage(errors);

    if (!isEmpty(errors)) {
      return;
    }

    dispatch(setCart([]));
    removeStorageItem("cart");
    if (isSaveShippingDetail) {
      setStorageItem("payment_detail", formValues);
    }

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

  useEffect(() => {
    dispatch(toggleLoading(true));

    const getAllCountries = () => {
      fetchCountries()
        .then((res: ICountriesResponse) => {
          setStorageItem("countries", res.data);
          dispatch(toggleLoading(false));
        })
        .catch((error) => console.error(error));
    };

    getAllCountries();
  }, [dispatch]);

  return (
    <>
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
                  ref={firstNameInputRef}
                  errorMessage={errorMessages?.firstName}
                  required
                />
                <CustomInput
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  errorMessage={errorMessages?.lastName}
                  ref={lastNameInputRef}
                  required
                />
              </div>
              <CustomInput
                type="text"
                name="address"
                placeholder="Address and number"
                errorMessage={errorMessages?.address}
                ref={addressInputRef}
                required
              />
              <CustomInput
                type="text"
                name="phoneNumber"
                placeholder="Phone number"
                errorMessage={errorMessages?.phoneNumber}
                ref={phoneNumberInputRef}
                required
              />
              <Dropdown
                name="Country"
                selectedItem={selectedCountry}
                setSelectedItem={setSelectedCountry}
                errorMessage={errorMessages?.country}
              />
              <div className="row-2 flex">
                <CustomInput
                  type="text"
                  name="city"
                  placeholder="City"
                  errorMessage={errorMessages?.city}
                  ref={cityInputRef}
                  required
                />
                <CustomInput
                  type="text"
                  name="postalCode"
                  placeholder="Postal code"
                  errorMessage={errorMessages?.postalCode}
                  ref={postalCodeInputRef}
                  required
                />
              </div>
              <CustomInput
                type="text"
                name="shippingNote"
                placeholder="Shipping note (optional)"
                ref={shippingNoteInputRef}
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
            <div className="total">Total: ${total ? total : 0}</div>
            <div className="button-wrapper">
              <Button
                name={paymentMethod === "cod" ? "Place order" : "Next"}
                onClick={handleSubmit}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PaymentDetail;
