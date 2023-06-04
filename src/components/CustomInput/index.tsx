import { forwardRef } from "react";

import { ICustomInputProps } from "interfaces";

import "./styles.scss";

const CustomInput = (
  props: ICustomInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  return (
    <div className="custom-input">
      <input
        {...props}
        className={props.errorMessage ? `error` : undefined}
        ref={ref}
      />
      {props.errorMessage && (
        <div className="error-message">{props.errorMessage}</div>
      )}
    </div>
  );
};

export default forwardRef(CustomInput);
