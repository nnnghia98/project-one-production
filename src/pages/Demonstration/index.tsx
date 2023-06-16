import { useState, useRef, ChangeEvent } from "react";

import { Button, Checkbox, RadioButton, RangeSlider } from "components";
import { ICountry } from "interfaces";
import { setStorageItem, getStorageItem } from "utils";

import "./styles.scss";

interface IDemostrationFormValues {
  saveInformation?: boolean;
  showMethod?: string;
  name?: string;
  min?: number;
  max?: number;
}

const COUNTRIES = getStorageItem("countries");

const Demonstration = () => {
  const [formValues, setFormValues] = useState<IDemostrationFormValues>({});

  const [errorMessages, setErrorMessages] = useState<IDemostrationFormValues>(
    {}
  );

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [showMethod, setShowMethod] = useState<string>("yes");

  const [sliderValue, setSliderValue] = useState({ min: 0, max: 100 });

  const inputRef = useRef<HTMLInputElement | null>(null);
  // const dropdownItemRef = useRef<HTMLDivElement | null>();
  const [selectedCountry, setSelectedCountry] = useState<string>();

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowMethod(event.target.value);
  };

  const handleDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  const handleSubmit = () => {
    const inputValues: IDemostrationFormValues = {};

    inputValues.saveInformation = isChecked;
    inputValues.showMethod = showMethod;
    inputValues.min = sliderValue.min;
    inputValues.max = sliderValue.max;
    inputValues.name = inputRef.current?.value;

    if (!inputValues.name) {
      return setErrorMessages({
        ...errorMessages,
        name: "Your name must be provided!",
      });
    }

    setFormValues(inputValues);

    alert(`Your name: ${inputValues.name}
Your range: ${inputValues.min} ~ ${inputValues.max}
You selected ${inputValues.showMethod === "yes" ? "Yes" : "Another yes"}
${inputValues.saveInformation ? "Your data is kept" : ""}`);

    if (isChecked) {
      setStorageItem("demonstrationForm", formValues);
    }

    return;
  };

  return (
    <div className="demonstration">
      <div className="content flex column">
        <h5 className="heading-5">Demonstration</h5>
        <div className="xinput-wrapper">
          <x-input
            type="text"
            placeholder="Your name"
            ref={inputRef}
            errormessage="This field is required!"
            required
            invalid={errorMessages.name}
          ></x-input>
        </div>
        <div className="dropdown-wrapper">
          <x-dropdown
          // title="Choose an option"
          // data={JSON.stringify(DROPDOWN_DATA)}
          // ref={dropdownItemRef}
          // onchange={String(() => {})}
          >
            <select
              slot="dropdown"
              value={selectedCountry}
              onChange={handleDropdownChange}
            >
              {COUNTRIES.map((country: ICountry) => (
                <option value={country.iso3} key={country.iso3}>
                  {country.country}
                </option>
              ))}
            </select>
          </x-dropdown>
        </div>
        <RangeSlider
          min={0}
          max={100}
          step={5}
          value={sliderValue}
          onChange={setSliderValue}
        />
        <div>
          The min value is: <>{sliderValue.min}</>
        </div>
        <div>
          The max value is: <>{sliderValue.max}</>
        </div>
        <h6 className="heading-6">Select an option</h6>
        <div className="radio-wrapper flex">
          <RadioButton
            changed={handleSelect}
            id="1"
            isSelected={showMethod === "yes"}
            label="Yes"
            value="yes"
          />
          <RadioButton
            changed={handleSelect}
            id="2"
            isSelected={showMethod === "anotherYes"}
            label="Another yes"
            value="anotherYes"
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
          <Button name="Gotcha" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Demonstration;
