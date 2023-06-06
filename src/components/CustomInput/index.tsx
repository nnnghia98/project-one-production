import { forwardRef } from "react";

import { ICustomInputProps } from "interfaces";

import "./styles.scss";

const CustomInput = (
  props: ICustomInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const { errorMessage, ...rest } = props;

  return (
    <div className="custom-input">
      <input
        {...rest}
        className={errorMessage ? `error` : undefined}
        ref={ref}
      />
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default forwardRef(CustomInput);
