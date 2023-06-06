import { ICheckboxProps } from "interfaces/components";

import "./styles.scss";

const Checkbox = (props: ICheckboxProps) => {
  const { htmlName, title, onChange, checked = false } = props;

  return (
    <div className="checkbox flex">
      <input
        {...props}
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
