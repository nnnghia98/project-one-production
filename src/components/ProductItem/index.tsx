import { useNavigate } from "react-router-dom";

import { IProductItemProps } from "interfaces/ShoppingCenter";

import "./styles.scss";

const Item = ({ id, thumbnail, name, cost }: IProductItemProps) => {
  const navigate = useNavigate();

  const navigateProductDetail = () =>
    navigate(`/shopping-center/product/${Number(id)}`);

  return (
    <div className="product-item" onClick={navigateProductDetail}>
      <div className="img-wrapper">
        <img src={thumbnail} alt="thumbnail" />
      </div>
      <div className="detail">
        <div className="name">{name}</div>
        <div className="cost">{cost}$</div>
      </div>
    </div>
  );
};

export default Item;
