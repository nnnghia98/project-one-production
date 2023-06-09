import { useState, useRef } from "react";

import { Button, Checkbox, RadioButton } from "components";
import { setStorageItem, getStorageItem } from "utils";

import "./styles.scss";

interface IDemostrationFormValues {
  saveInformation?: boolean;
  showMethod?: string;
}

const renderResult = (result: IDemostrationFormValues) => {
  if (result.showMethod === "alert") {
  }

  return <></>;
};

const Demonstration = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [showMethod, setShowMethod] = useState<string>("render");
  const [formValues, setFormValues] = useState<IDemostrationFormValues>(
    getStorageItem("demonstrationForm")
  );

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowMethod(event.target.value);
  };

  const handleSubmit = () => {
    const inputValues: IDemostrationFormValues = {};

    inputValues.saveInformation = isChecked;
    inputValues.showMethod = showMethod;

    setFormValues(inputValues);
    // console.log(inputValues);

    if (showMethod === "alert") {
      return alert(`Form: ${inputValues}`);
    }

    if (isChecked) {
      setStorageItem("demonstrationForm", formValues);
    }

    return;
  };

  return (
    <div className="demonstration">
      <div className="content flex column">
        <h5 className="heading-5">All inputs are required</h5>
        <div className="xinput-wrapper">
          <x-input
            type="text"
            placeholder="Type string"
            ref={inputRef}
            error-message="This field is required!"
            required
          ></x-input>
        </div>
        <div className="dropdown-wrapper">
          <x-dropdown title="Choose an option"></x-dropdown>
        </div>
        <h6 className="heading-6">Select the way result shown</h6>
        <div className="radio-wrapper flex">
          <RadioButton
            changed={handleSelect}
            id="1"
            isSelected={showMethod === "render"}
            label="Render"
            value="render"
          />
          <RadioButton
            changed={handleSelect}
            id="2"
            isSelected={showMethod === "alert"}
            label="Alert"
            value="alert"
          />
        </div>
        <div className="checkbox-wrapper">
          <Checkbox
            title={`Save information for next time`}
            onChange={handleCheck}
            htmlName="checkbox"
            checked={isChecked}
          />
        </div>
        <div className="button-wrapper">
          <Button name="Show" onClick={handleSubmit} />
        </div>
        {renderResult({})}
      </div>
    </div>
  );
};

export default Demonstration;
