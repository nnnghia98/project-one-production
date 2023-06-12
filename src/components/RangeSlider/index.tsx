import { useState, useEffect } from "react";

import { IRangeSliderProps } from "interfaces";

import "./styles.scss";

const RangeSlider = ({
  min = 0,
  max = 99999,
  value,
  step,
  onChange,
}: IRangeSliderProps) => {
  const [minValue, setMinValue] = useState(value ? value.min : min || 0);
  const [maxValue, setMaxValue] = useState(value ? value.max : max || 99999);

  useEffect(() => {
    if (value) {
      setMinValue(value.min);
      setMaxValue(value.max);
    }
  }, [value]);

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newMinVal = Math.min(+event.target.value, maxValue - step);
    if (!value) setMinValue(newMinVal);
    onChange({ min: newMinVal, max: maxValue });
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newMaxVal = Math.max(+event.target.value, minValue + step);
    if (!value) setMaxValue(newMaxVal);
    onChange({ min: minValue, max: newMaxVal });
  };

  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className="wrapper">
      <div className="input-wrapper">
        <input
          className="input"
          type="range"
          value={minValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMinChange}
        />
        <input
          className="input"
          type="range"
          value={maxValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMaxChange}
        />
      </div>

      <div className="control-wrapper">
        <div className="control" style={{ left: `${minPos}%` }} />
        <div className="rail">
          <div
            className="inner-rail"
            style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
          />
        </div>
        <div className="control" style={{ left: `${maxPos}%` }} />
      </div>
    </div>
  );
};

export default RangeSlider;
