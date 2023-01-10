import axios from "axios";
import { atom, selector } from "recoil";

export const products = selector({
  key: "products",
  get: async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data.slice(0, 6));
      return await response.data.slice(0, 6);
    } catch (error) {
      console.log(error.message);
    }
  },
});

export const CartState = atom({
  key: "CartState",
  default: [],
});

export const TotalPrice = atom({
  key: "TotalPrice",
  default: 0,
});
