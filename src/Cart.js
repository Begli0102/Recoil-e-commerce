import React from "react";
import { useRecoilState } from "recoil";
import { CartState } from "./Recoil/recoil";

const Cart = () => {
  const [cart, setCart] = useRecoilState(CartState);

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="items-wrapper">
      {cart.length === 0 ? (
        <h1>No product found</h1>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="items">
              <img className="image" src={item.image} alt="productImage" />
              <span>{item.title.substring(0, 24)}...</span>
              <span>{item.price} $</span>
              <button
                className="cart-button"
                onClick={() => removeFromCart(item.id)}
              >
                REMOVE
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Cart;
