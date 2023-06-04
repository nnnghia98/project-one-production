import "./styles.scss";
import { useNavigate, useLocation } from "react-router-dom";

import { Button } from "components";

import doneSvg from "assets/svg/paymentSuccess.svg";

const renderRejectedLayout = () => (
  <div className="title error">Payment Rejected</div>
);

const Done = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const navigateHome = () => navigate("/shopping-center");

  return (
    <div className="done flex">
      <div className="content flex column">
        {state?.isSucceeded ? (
          <>
            <div className="svg-wrapper">
              <img src={doneSvg} alt="doneSvg" />
            </div>
            <div className="title">
              {state?.method === "atm"
                ? `Payment Confirmed`
                : `Order Confirmed`}
            </div>
            <div className="order-number">ORDER #2039</div>
            <div className="thankyou-letter">
              Thank you Nghia for ordering New Candle. The nature is grateful to
              you. Now that your order is confirmed it will be ready to ship in
              2 days. Please check your inbox in the future for your order
              updates.
            </div>
          </>
        ) : (
          renderRejectedLayout()
        )}
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
