import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="subtotal subtotal__grey">
      <CurrencyFormat
        renderText={(value) => (
         
            <p>
              Subtotal:{cart?.length} items: <strog>{value}</strog>
            </p> )}
           
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />{" "}
      <button className='btn' onClick={e => history.push('/payment')} >Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
