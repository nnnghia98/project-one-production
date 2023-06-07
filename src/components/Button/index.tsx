import { IButtonProps } from "interfaces/components";

import "./styles.scss";

const Button = (props: IButtonProps) => {
  const { name, url, outerClassName, onClick = () => {}, ...rest } = props;

  const openInNewTab = () => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <button
      {...rest}
      className={`my-button flex ${outerClassName}`}
      onClick={url ? openInNewTab : onClick}
    >
      {name}
    </button>
  );
};

export default Button;
