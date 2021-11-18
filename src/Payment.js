import React, { useState, useEffect } from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./reducer";
import axios from "./axios";
import { useHistory } from "react-router-dom";



function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  const history = useHistory();

  const MyComponent = (props) => {
    const stripe = useStripe();
    const elements = useElements();

    // rest of the component
  };
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getCartTotal(cart) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [cart]);
  console.log(clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
       
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_CART",
        });
        history.replace("/orders");
      });
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className='payment'>
      <div className='payment_container'>
        <h1>
          Checkout (<Link to='/checkout'>{cart?.length} items</Link>)
        </h1>
        {/*payment section-delivery  */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>

          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>Kranjska cesta 61b, Kranj</p>
          </div>
        </div>
      </div>
      {/*payment section-Review  */}
      <div className='payment__section'>
        <div className='payment__title'>
          <h3>Review items and delivery</h3>
        </div>
        <div className='payment__items'>
          {cart.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              stock={item.stock}
            />
          ))}
        </div>
      </div>
      {/*payment section-payment method  */}
      <div className='payment__section'>
        <div className='payment__details'>
          <h3>Payment method</h3>
        </div>
        <div className='payment__details'>
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />

            <div className='payment_priceContainer'>
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <h3>Order total:{value}</h3>
                  </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"€"}
              />{" "}
              <button disabled={processing || disabled || succeeded}>
                <span>{processing ? <p>Proccesing</p> : "Buy now"}</span>
              </button>
            </div>
            {/* error */}
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
