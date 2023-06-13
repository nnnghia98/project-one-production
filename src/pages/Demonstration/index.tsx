import { useState, useRef } from "react";

import { Button, Checkbox, RadioButton, RangeSlider } from "components";
import { setStorageItem } from "utils";

import "./styles.scss";

const DROPDOWN_DATA = [
  {
    createdAt: "2023-06-11T00:54:56.498Z",
    name: "Thai",
    value: "Pixiebob",
    id: "1",
  },
  {
    createdAt: "2023-06-10T14:12:36.513Z",
    name: "Manx",
    value: "Burmese",
    id: "2",
  },
  {
    createdAt: "2023-06-10T07:31:43.797Z",
    name: "Siberian",
    value: "Tonkinese",
    id: "3",
  },
  {
    createdAt: "2023-06-10T12:23:55.042Z",
    name: "American Curl",
    value: "Korat",
    id: "4",
  },
  {
    createdAt: "2023-06-10T23:57:30.187Z",
    name: "Ojos Azules",
    value: "Turkish Van",
    id: "5",
  },
  {
    createdAt: "2023-06-10T20:50:20.087Z",
    name: "Snowshoe",
    value: "Chartreux",
    id: "6",
  },
  {
    createdAt: "2023-06-10T20:55:11.678Z",
    name: "Scottish Fold",
    value: "Pixiebob",
    id: "7",
  },
  {
    createdAt: "2023-06-11T06:55:40.593Z",
    name: "Peterbald",
    value: "Exotic Shorthair",
    id: "8",
  },
  {
    createdAt: "2023-06-10T10:29:35.331Z",
    name: "British Shorthair",
    value: "Birman",
    id: "9",
  },
  {
    createdAt: "2023-06-10T19:01:12.421Z",
    name: "Donskoy",
    value: "Sphynx",
    id: "10",
  },
  {
    createdAt: "2023-06-11T06:55:57.075Z",
    name: "Japanese Bobtail",
    value: "Ragdoll",
    id: "11",
  },
  {
    createdAt: "2023-06-10T19:06:48.976Z",
    name: "Egyptian Mau",
    value: "Norwegian Forest Cat",
    id: "12",
  },
  {
    createdAt: "2023-06-11T06:02:14.142Z",
    name: "Pixiebob",
    value: "Sphynx",
    id: "13",
  },
  {
    createdAt: "2023-06-11T02:23:28.646Z",
    name: "Serengeti",
    value: "Abyssinian",
    id: "14",
  },
  {
    createdAt: "2023-06-10T07:29:29.664Z",
    name: "Ocicat",
    value: "Maine Coon",
    id: "15",
  },
  {
    createdAt: "2023-06-10T11:25:01.990Z",
    name: "LaPerm",
    value: "Bengal",
    id: "16",
  },
  {
    createdAt: "2023-06-10T18:11:25.276Z",
    name: "Bombay",
    value: "British Shorthair",
    id: "17",
  },
  {
    createdAt: "2023-06-10T14:15:45.425Z",
    name: "Thai",
    value: "Selkirk Rex",
    id: "18",
  },
  {
    createdAt: "2023-06-10T21:28:45.917Z",
    name: "Norwegian Forest Cat",
    value: "Savannah",
    id: "19",
  },
  {
    createdAt: "2023-06-10T22:25:40.617Z",
    name: "Toyger",
    value: "Himalayan",
    id: "20",
  },
];

interface IDemostrationFormValues {
  saveInformation?: boolean;
  showMethod?: string;
  name?: string;
  min?: number;
  max?: number;
}

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
            title="Choose an option"
            data={JSON.stringify(DROPDOWN_DATA)}
            // ref={dropdownItemRef}
            onchange={String(() => {})}
          ></x-dropdown>
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
