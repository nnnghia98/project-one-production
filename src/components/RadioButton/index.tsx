import { IRadioProps } from "interfaces/components";

import "./styles.scss";

const RadioButton = (props: IRadioProps) => {
  const { changed, id, isSelected, label, value, ...rest } = props;

  return (
    <div className="radio-button flex">
      <input
        {...rest}
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
