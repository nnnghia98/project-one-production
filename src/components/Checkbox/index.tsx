import { ICheckboxProps } from "interfaces/components";

import Tick from "assets/svg/Tick";

import "./styles.scss";

const Checkbox = ({
  htmlName,
  title,
  onChange,
  checked = false,
}: ICheckboxProps) => {
  return (
    <div className="checkbox flex">
      <input
        type="checkbox"
        id={`custom-checkbox-${htmlName}`}
        name={htmlName}
        checked={checked}
        onChange={onChange}
      />
      <span />
      <label htmlFor={`custom-checkbox-${htmlName}`}>{title}</label>
    </div>
  );
};

export default Checkbox;
