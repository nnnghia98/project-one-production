import { IButtonProps } from "interfaces/components";

import "./styles.scss";

const Button = (props: IButtonProps) => {
  const { name, url, outerClassName, onClick = () => {} } = props;

  const openInNewTab = () => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <button
      {...props}
      className={`my-button flex ${outerClassName}`}
      onClick={url ? openInNewTab : onClick}
    >
      {name}
    </button>
  );
};

export default Button;
