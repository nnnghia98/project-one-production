import React from "react";

import { Button } from "components";
import { ICartItemProps } from "interfaces/ShoppingCenter";
import { useWindowDimensions } from "utils/window";

import productThumbnail from "assets/img/product-thumbnail.png";

import "./styles.scss";

const DUMMY_DATA = [
  {
    id: 1,
    imgSrc: productThumbnail,
    name: "New Candle",
    price: 9.99,
    quantity: 1,
  },
  {
    id: 2,
    imgSrc: productThumbnail,
    name: "New Candle",
    price: 9.99,
    quantity: 2,
  },
];

const Cart = () => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className="cart">
      <div className="content">
        <div className="title">Your cart item</div>
        <table className="table">
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
          {DUMMY_DATA.map((item: ICartItemProps) => (
            <tr className="table-item" key={item.id}>
              <td className="product flex">
                <div className="img-wrapper">
                  <img src={item.imgSrc} alt="productThumbnail" />
                </div>
                <div className="detail flex column">
                  <div className="name">New Candle</div>
                  <div className="remove-item">Remove item</div>
                </div>
              </td>
              {!isMobile && (
                <>
                  <td className="price">${item.price}</td>
                  <td className="quantity">{item.quantity}</td>
                </>
              )}
              <td className="total">
                ${item.price * item.quantity}
                {isMobile && <td className="quantity">{item.quantity}</td>}
              </td>
            </tr>
          ))}
        </table>
        <div className="checkout-panel flex">
          <div className="text-wrapper flex column">
            <div className="subtotal flex">
              <div>Sub-total</div>
              <div>$29.96</div>
            </div>
            <div className="shipping-fee flex">
              <div>Shipping fee</div>
              <div>$0.99</div>
            </div>
          </div>
          <div className="button-wrapper">
            <Button
              name="Checkout"
              onClick={() => {}}
              outerClassName="checkout"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
