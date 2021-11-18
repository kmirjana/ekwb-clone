import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <>
    <div className="checkout">
      <div className="checkout__left">
        {/*DropdownMenu*/}
        <h3>Hello,{user?.email}</h3>
        <div className="checkout__title">
          <h2>Your shopping cart</h2>
          <hr></hr>

          {cart.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              stock={item.stock}
            />
          ))}
        </div>
        <div className="checkout__right"></div>
      </div>
      <Subtotal />
      </div>
      </>
  );
}

export default Checkout;
