import { useRef } from "react";
import { useParams } from "react-router-dom";

import { Button } from "components";
import { useWindowDimensions, getStorageItem, setStorageItem } from "utils";
import { IProductItemProps } from "interfaces/ShoppingCenter";

import productBanner from "assets/img/product-banner.png";

import "./styles.scss";

const renderMobileView = (
  ref: React.MutableRefObject<HTMLInputElement | null>,
  item: IProductItemProps,
  handleAddToCart: () => void
) => (
  <div className="mobile">
    <div className="name">{item.name}</div>
    <div className="img-wrapper">
      <img src={productBanner} alt="productBanner" />
    </div>
    <div className="button-group flex">
      <input ref={ref} type="number" placeholder="Quantity" min={0} />
      <div className="cost">${item.cost}</div>
    </div>
    <div className="in-stock">In stock: {item.quantity}</div>
    <Button
      name="Add to cart"
      onClick={handleAddToCart}
      outerClassName="add-to-cart"
    />
    <div className="properties flex column">
      <div className="property flex">
        <div className="bold">Wax:</div>
        {` Top grade Soy wax that delivers a smoke less, consistent burn`}
      </div>
      <div className="property flex">
        <div className="bold">Fragrance:</div>
        {` Premium quality ingredients with natural essential oils`}
      </div>
      <div className="last flex row">
        <div className="property flex">
          <div className="bold">Burning Time:</div>
          {` 70-75 hours`}
        </div>
        <div className="property flex">
          <div className="bold">Dimension:</div>
          {` 10cm x 5cm`}
        </div>
        <div className="property flex">
          <div className="bold">Weight:</div>
          {` 400g`}
        </div>
      </div>
    </div>
    <div className="quote">
      All hand-made with natural soy wax, Candleaf is made for your pleasure
      moments.
    </div>
  </div>
);

const renderWideView = (
  ref: React.MutableRefObject<HTMLInputElement | null>,
  item: IProductItemProps,
  handleAddToCart: () => void
) => (
  <div className="wide flex">
    <div className="left flex column">
      <div className="img-wrapper">
        <img src={productBanner} alt="productBanner" />
      </div>
      <div className="quote">
        All hand-made with natural soy wax, Candleaf is made for your pleasure
        moments.
      </div>
    </div>
    <div className="right">
      <div className="name">{item.name}</div>
      <div className="cost">${item.cost}</div>
      <div className="properties flex column">
        <div className="property flex">
          <div className="bold">Wax:</div>
          {` Top grade Soy wax that delivers a smoke less, consistent burn`}
        </div>
        <div className="property flex">
          <div className="bold">Fragrance:</div>
          {` Premium quality ingredients with natural essential oils`}
        </div>
        <div className="last flex row">
          <div className="property flex">
            <div className="bold">Burning Time:</div>
            {` 70-75 hours`}
          </div>
          <div className="property flex">
            <div className="bold">Dimension:</div>
            {` 10cm x 5cm`}
          </div>
          <div className="property flex">
            <div className="bold">Weight:</div>
            {` 400g`}
          </div>
        </div>
      </div>
      <div className="button-group flex">
        <input ref={ref} type="number" placeholder="Quantity" min={0} />
        <Button
          name="Add to cart"
          onClick={handleAddToCart}
          outerClassName="add-to-cart"
        />
      </div>
      <div className="in-stock">In stock: {item.quantity}</div>
    </div>
  </div>
);

const isExistentInCart = (cart: Array<IProductItemProps>, id: string) =>
  cart.some((item: IProductItemProps) => item.id === id);

const ProductDetail = () => {
  const { id } = useParams();
  const { isMobile } = useWindowDimensions();
  const quantityInputRef = useRef<HTMLInputElement | null>(null);

  const products = getStorageItem("products");
  const product = products.filter(
    (product: IProductItemProps) => product.id === id
  );

  const handleAddToCart = () => {
    const quantityInputValue = Number(quantityInputRef.current?.value);

    if (!quantityInputValue) {
      return alert(
        "Please input valid quantity (must be a non-float positive number)!"
      );
    }

    if (quantityInputValue > product[0].quantity) {
      return alert("Please input quantity less than in stock!");
    }

    const item: IProductItemProps = {
      id: product[0].id,
      name: product[0].name,
      cost: product[0].cost,
    };

    const cart = getStorageItem("cart") || [];

    if (isExistentInCart(cart, item.id)) {
      cart.map((itm: IProductItemProps) => {
        if (itm.id === id) {
          return {
            ...itm,
            quantity: itm.quantity ? itm.quantity + quantityInputValue : 0,
          };
        }

        return itm;
      });

      setStorageItem("cart", cart);
    }

    cart.push({
      ...item,
      quantity: quantityInputValue,
    });

    products.map((product: IProductItemProps) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity
            ? product.quantity - quantityInputValue
            : 0,
        };
      }

      return product;
    });

    setStorageItem("products", products);
    setStorageItem("cart", cart);

    return alert("Item has been added to cart!");
  };

  return (
    <div className="product-detail">
      <div className="content">
        {isMobile
          ? renderMobileView(quantityInputRef, product[0], handleAddToCart)
          : renderWideView(quantityInputRef, product[0], handleAddToCart)}
      </div>
    </div>
  );
};

export default ProductDetail;
