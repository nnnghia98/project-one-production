import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Button, CustomInput } from "components";
import { ICartItemProps } from "interfaces";
import {
  getStorageItem,
  setStorageItem,
  useWindowDimensions,
  // useDebounce,
  formatCurrency,
} from "utils";
import { AppContext } from "context";

import productThumbnail from "assets/img/product-thumbnail.png";

import "./styles.scss";

const getSubTotal = (cart: Array<ICartItemProps>) => {
  const total = cart.reduce(
    (total, item) => Number(item.cost) * (item.quantity || 1) + total,
    0
  );

  return formatCurrency(total);
};

const Cart = () => {
  const { isMobile } = useWindowDimensions();
  const navigate = useNavigate();
  const { globalState, setGlobalState } = useContext(AppContext);

  const quantityInputRef = useRef<HTMLInputElement | null>(null);

  // const debouncedValue = useDebounce<number>(Item, 2000);

  const handleNavigate = () => {
    if (!globalState.inCart.length) {
      return alert("No item in cart!");
    }

    if (getStorageItem("isSignedIn")) {
      setStorageItem("total", getSubTotal(globalState.inCart));

      return navigate("/shopping-center/checkout");
    }

    return navigate("/shopping-center/sign-in");
  };

  const handleRemoveItem = (id: string) => {
    const newCart = globalState.inCart
      ? globalState.inCart.filter((itm: ICartItemProps) => itm.id !== id)
      : [];

    setStorageItem("cart", newCart);
    setStorageItem("total", getSubTotal(globalState.inCart));
    if (setGlobalState) setGlobalState({ ...globalState, inCart: newCart });
  };

  return (
    <div className="cart">
      <div className="content">
        <div className="title">Your cart item</div>
        <table className="table">
          <thead>
            <tr className="table-header">
              <th className="header-product">Product</th>
              {!isMobile && (
                <>
                  <th className="header-price">Price</th>
                  <th className="header-quantity">Quantity</th>
                </>
              )}
              <th className="header-total">Total</th>
            </tr>
          </thead>
          <tbody>
            {globalState.inCart.map((item: ICartItemProps) => (
              <tr className="table-item" key={item.id}>
                <td className="product flex">
                  <div className="img-wrapper">
                    <img src={productThumbnail} alt="productThumbnail" />
                  </div>
                  <div className="detail flex column">
                    <div className="name">{item.name}</div>
                    <div
                      className="remove-item"
                      onClick={() => handleRemoveItem(String(item.id))}
                    >
                      Remove item
                    </div>
                  </div>
                </td>
                {!isMobile && (
                  <>
                    <td className="price">${Number(item.cost)}</td>
                    <td className="quantity">
                      <CustomInput
                        ref={quantityInputRef}
                        type="number"
                        placeholder="Quantity"
                        min={0}
                        max={item.quantity}
                        defaultValue={item.quantity}
                        // onChange={(item) => {handle}}
                      />
                    </td>
                  </>
                )}
                <td className="total">
                  ${Number(item.cost) * (item.quantity || 1)}
                  {isMobile && (
                    <td className="quantity">
                      <CustomInput
                        ref={quantityInputRef}
                        type="number"
                        placeholder="Quantity"
                        min={0}
                        max={item.quantity}
                        defaultValue={item.quantity}
                        // onChange={(item) => {handle}}
                      />
                    </td>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="checkout-panel flex">
          <div className="text-wrapper flex column">
            <div className="subtotal flex">
              <div>Sub-total</div>
              <div>${getSubTotal(globalState.inCart)}</div>
            </div>
            <div className="shipping-fee flex">
              <div>Shipping fee</div>
              <div>${getSubTotal(globalState.inCart) === "0" ? 0 : 2.99}</div>
            </div>
          </div>
          <div className="button-wrapper">
            <Button
              name="Checkout"
              onClick={handleNavigate}
              outerClassName="checkout"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
