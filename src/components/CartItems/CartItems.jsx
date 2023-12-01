import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/Context";
import { Link } from "react-router-dom";
const CartItems = () => {
  const {
    product_list,
    cartItems,
    addToCart,
    removeFromCart,
    cartTotalAmount,
  } = useContext(ShopContext);
  return (
    <div className="cart-items">
      <div className="cartitem-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Add</p>
        <p>Remove</p>
      </div>
      <hr />
      {product_list.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitem-format cartitem-format-main">
                <img src={e.image} className="image-icon" alt="" />
                <p>{e.name}</p>
                <p>${e.price}</p>
                <button className="quantity">{cartItems[e.id]}</button>
                <p>${(e.price * cartItems[e.id]).toFixed(2)}</p>
                <button
                  onClick={() => {
                    addToCart(e.id);
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                >
                  -
                </button>
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${cartTotalAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${cartTotalAmount()}</h3>
            </div>
          </div>
          <Link to="/login">
            <button>PROCEED TO CHECKOUT</button>
          </Link>
        </div>
        <div className="promocode">
          <p>Having a promo code ? Enter it here</p>
          <div className="promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
