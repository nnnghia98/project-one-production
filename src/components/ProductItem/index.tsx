import { useNavigate } from "react-router-dom";

import { IProductItemProps } from "interfaces/ShoppingCenter";

import productThumbnail from "assets/img/product-thumbnail.png";

import "./styles.scss";

const Item = ({ id, name, cost }: IProductItemProps) => {
  const navigate = useNavigate();

  const navigateProductDetail = () =>
    navigate(`/shopping-center/product/${Number(id)}`);

  return (
    <div className="product-item" onClick={navigateProductDetail}>
      <div className="img-wrapper">
        <img src={productThumbnail} alt="thumbnail" />
      </div>
      <div className="detail">
        <div className="name">{name}</div>
        <div className="cost">{cost}$</div>
      </div>
    </div>
  );
};

export default Item;
