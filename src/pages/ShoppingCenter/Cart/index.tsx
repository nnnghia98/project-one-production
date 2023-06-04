import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "components";
import { ICartItemProps, IProductItemProps } from "interfaces";
import { getStorageItem, setStorageItem, useWindowDimensions } from "utils";

import productThumbnail from "assets/img/product-thumbnail.png";

import "./styles.scss";

const getSubTotal = (cart: Array<ICartItemProps>) =>
  cart.reduce((total, item) => Number(item.cost) * item.quantity + total, 0);

const Cart = () => {
  const [cart, setCart] = useState(getStorageItem("cart") || []);
  const { isMobile } = useWindowDimensions();
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (getStorageItem("isSignedIn")) {
      return navigate("/shopping-center/checkout");
    }

    return navigate("/shopping-center/sign-in");
  };

  const handleRemoveItem = (id: string) => {
    const newCart = cart.filter((itm: IProductItemProps) => itm.id !== id);

    setStorageItem("cart", newCart);
    setCart(newCart);
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
            {cart.map((item: ICartItemProps) => (
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
                    <td className="quantity">{item.quantity}</td>
                  </>
                )}
                <td className="total">
                  ${Number(item.cost) * item.quantity}
                  {isMobile && <td className="quantity">{item.quantity}</td>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="checkout-panel flex">
          <div className="text-wrapper flex column">
            <div className="subtotal flex">
              <div>Sub-total</div>
              <div>${getSubTotal(cart)}</div>
            </div>
            <div className="shipping-fee flex">
              <div>Shipping fee</div>
              <div>${getSubTotal(cart) === 0 ? `0` : `2.99`}</div>
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
