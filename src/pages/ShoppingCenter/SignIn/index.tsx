import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import isEqual from "lodash/isEqual";

import { Button, CustomInput } from "components";
import { EMAIL_REGEXP } from "constant";
import { setStorageItem } from "utils";
import { AppContext } from "context";

import "./styles.scss";

const SignIn = () => {
  const navigate = useNavigate();
  const { globalState, setGlobalState } = useContext(AppContext);

  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = () => {
    if (!EMAIL_REGEXP.test(emailInputRef.current?.value || "")) {
      return alert("Invalid email!");
    }

    if (isEqual(passwordInputRef.current?.value, "")) {
      return alert("Invalid password!");
    }

    setStorageItem("email", emailInputRef.current?.value);
    setStorageItem("password", passwordInputRef.current?.value);
    setStorageItem("isSignedIn", true);

    if (setGlobalState) setGlobalState({ ...globalState, isSignedIn: true });

    alert("Signed in!");
    navigate(-1);
  };

  return (
    <div className="sign-in flex">
      <div className="content flex column">
        <div className="title">Sign in</div>
        <div>
          <div className="input-group flex column">
            <CustomInput
              name="email"
              type="text"
              ref={emailInputRef}
              placeholder="Email"
            />
            <CustomInput
              name="password"
              type="password"
              ref={passwordInputRef}
              placeholder="Password"
            />
          </div>
        </div>
        <div className="button-wrapper">
          <Button name="Sign in" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
