import { useNavigate } from "react-router-dom";

import { Button, CustomInput } from "components";

import creditCardSvg from "assets/svg/creditCard.svg";

import "./styles.scss";

const CardDetail = () => {
  const navigate = useNavigate();

  const handleSubmit = () =>
    navigate("/shopping-center/checkout/done", {
      state: {
        method: "atm",
        isSucceeded: Math.random() < 0.5,
      },
    });

  const navigateBack = () => navigate(-1);

  return (
    <div className="card-detail flex">
      <div className="content flex column">
        <div className="title">Card detail</div>
        <form className="card-detail-form" onSubmit={handleSubmit}>
          <div className="card-header flex">
            <span className="svg-wrapper">
              <img src={creditCardSvg} alt="creditCardSvg" />
            </span>
            Credit Card
          </div>
          <div className="input-group flex column">
            <CustomInput
              type="number"
              name="cardNumber"
              placeholder="Card number"
              required
            />
            <CustomInput
              type="text"
              name="holderName"
              placeholder="Holder name"
              required
            />
            <div className="row-2 flex">
              <CustomInput
                type="text"
                name="expirationDate"
                placeholder="Expiration (MM/YY)"
                required
              />
              <CustomInput
                type="text"
                pattern="[0-9]*"
                name="ccv"
                placeholder="CCV"
                required
              />
            </div>
          </div>
        </form>
        <div className="done flex">
          <div className="go-back" onClick={navigateBack}>
            Back to shipping
          </div>
          <div className="button-wrapper">
            <Button name="Done" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
