import { useState, useRef } from "react";

import { Button, Checkbox, RadioButton } from "components";

import "./styles.scss";

const renderResult = (result: any) => <></>;

const Demonstration = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [showMethod, setShowMethod] = useState<string>("render");

  const stringInputRef = useRef<HTMLInputElement | undefined>();
  const numberInputRef = useRef();

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowMethod(event.target.value);
  };

  const handleSubmit = () => {
    if (showMethod === "alert") {
      return alert("Form:");
    }

    return;
  };

  return (
    <form className="demonstration">
      <div className="content flex column">
        <h5 className="heading-5">All inputs are required</h5>

        <div className="input-group">
          <x-input label="String" type="text" placeholder="String"></x-input>
          <x-input label="Number" type="number"></x-input>
        </div>
        <h6 className="heading-6">Select the way result are shown</h6>
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
            title={`Save form values for next time`}
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
    </form>
  );
};

export default Demonstration;
