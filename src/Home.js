import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { CartState, products } from "./Recoil/recoil";

const Home = () => {
  const [cart, setCart] = useRecoilState(CartState);
  const items = useRecoilValue(products);

  const addToCart = (newProduct) => {
    setCart([...cart, newProduct]);
  };

  return (
    <div className="items-container">
      <div className="items-wrapper">
        {items.map((item) => (
          <div key={item.id} className="items">
            <img className="image" src={item.image} alt="productImage" />
            <span>{item.title.substring(0, 24)}...</span>
            <span>{item.price} $</span>
            <button className="items-button" onClick={() => addToCart(item)}>
              ADD
            </button>
          </div>
        ))}
      </div>
    </div>
    //
  );
};

export default Home;
