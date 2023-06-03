import { IRadioProps } from "interfaces/components";

import "./styles.scss";

const RadioButton = ({
  changed,
  id,
  isSelected,
  label,
  value,
}: IRadioProps) => {
  return (
    <div className="radio-button flex">
      <input
        id={id}
        onChange={changed}
        value={value}
        type="radio"
        checked={isSelected}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioButton;
