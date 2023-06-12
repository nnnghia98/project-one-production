import { useState, useRef, useContext } from "react";
import { useParams } from "react-router-dom";

import { Button, CustomInput } from "components";
import { useWindowDimensions, getStorageItem, setStorageItem } from "utils";
import { IProductItemProps, ICartItemProps } from "interfaces";
import { AppContext } from "context";

import productBanner from "assets/img/product-banner.png";

import "./styles.scss";

const renderMobileView = (
  ref: React.MutableRefObject<HTMLInputElement | null>,
  item: IProductItemProps,
  inStock: number,
  handleAddToCart: () => void
) => (
  <div className="mobile">
    <div className="name">{item.name}</div>
    <div className="img-wrapper">
      <img src={productBanner} alt="productBanner" />
    </div>
    <div className="button-group flex">
      <CustomInput ref={ref} type="number" placeholder="Quantity" min={0} />
      <div className="cost">${item.cost}</div>
    </div>
    <div className="in-stock">In stock: {inStock}</div>
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
  inStock: number,
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
        <CustomInput ref={ref} type="number" placeholder="Quantity" min={0} />

        <Button
          name="Add to cart"
          onClick={handleAddToCart}
          outerClassName="add-to-cart"
        />
      </div>
      <div className="in-stock">In stock: {inStock}</div>
    </div>
  </div>
);

const isExistentInCart = (cart: Array<ICartItemProps>, id: string) =>
  cart.some((item: ICartItemProps) => item.id === id);

const ProductDetail = () => {
  const { id } = useParams();
  const { isMobile } = useWindowDimensions();
  const { globalState, setGlobalState } = useContext(AppContext);

  const quantityInputRef = useRef<HTMLInputElement | null>(null);

  const products = getStorageItem("products");
  const product = products.find(
    (product: IProductItemProps) => product.id === id
  );

  const [inStock, setInStock] = useState<number>(product.quantity);

  const handleAddToCart = () => {
    const quantityInputValue = Number(quantityInputRef.current?.value);

    if (quantityInputValue <= 0 || quantityInputValue > product.quantity) {
      return alert(
        "Please input valid number (quantity more than 0 or less than in stock!)"
      );
    }

    const item: IProductItemProps = {
      id: product.id,
      name: product.name,
      cost: product.cost,
      quantity: product.quantity,
    };

    const cart: Array<ICartItemProps> = getStorageItem("cart") || [];

    if (isExistentInCart(cart, item.id)) {
      const newCart = cart.map((itm: ICartItemProps) => {
        if (itm.id === id) {
          return {
            ...itm,
            quantity: itm.quantity ? itm.quantity + quantityInputValue : 0,
          };
        }

        return itm;
      });

      setStorageItem("cart", newCart);
      if (setGlobalState) setGlobalState({ ...globalState, inCart: newCart });
    } else {
      cart.push({
        ...item,
        cost: Number(item.cost),
        quantity: quantityInputValue,
      });

      setStorageItem("cart", cart);
      if (setGlobalState) setGlobalState({ ...globalState, inCart: cart });
    }

    const newProducts = products.map((product: IProductItemProps) => {
      if (product.id === id) {
        setInStock(inStock - quantityInputValue);

        return {
          ...product,
          quantity: product.quantity
            ? product.quantity - quantityInputValue
            : 0,
        };
      }

      return product;
    });

    setStorageItem("products", newProducts);

    return alert("Item has been added to cart!");
  };

  return (
    <div className="product-detail">
      <div className="content">
        {isMobile
          ? renderMobileView(
              quantityInputRef,
              product,
              inStock,
              handleAddToCart
            )
          : renderWideView(quantityInputRef, product, inStock, handleAddToCart)}
      </div>
    </div>
  );
};

export default ProductDetail;
