import "./styles.scss";
import { useNavigate } from "react-router-dom";

import { Button } from "components";

import doneSvg from "assets/svg/paymentSuccess.svg";

const Done = () => {
  const navigate = useNavigate();

  const navigateHome = () => navigate("/shopping-center");

  return (
    <div className="done flex">
      <div className="content flex column">
        <div className="svg-wrapper">
          <img src={doneSvg} alt="doneSvg" />
        </div>
        <div className="title">Order Confirmed</div>
        <div className="order-number">ORDER #2039</div>
        <div className="thankyou-letter">
          Thank you Nghia for ordering New Candle. The nature is grateful to
          you. Now that your order is confirmed it will be ready to ship in 2
          days. Please check your inbox in the future for your order updates.
        </div>
        <div className="button-wrapper">
          <Button
            name="Back to home"
            onClick={navigateHome}
            outerClassName="outer"
          />
        </div>
      </div>
    </div>
  );
};

export default Done;
