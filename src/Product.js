import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, stock }) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        stock: stock,
      },
    });
  };
  return (
    <div className='product'>
      <img src={image} alt='' />
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>€</small>
          <strong>{price}</strong>
        </p>
        <div className='product__stock'>
          {Array(stock)
            .fill()
            .map((_, i) => (
              <p>In stock</p>
            ))}
        </div>
      </div>

      <button className='btn btn-orange' onClick={addToCart}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
