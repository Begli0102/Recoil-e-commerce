import React, { useEffect } from "react";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { useRecoilState } from "recoil";
import { CartState, TotalPrice } from "../Recoil/recoil";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [cart] = useRecoilState(CartState);

  const [total, setTotal] = useRecoilState(TotalPrice);

  useEffect(() => {
    setTotal(cart.reduce((acc, item) => acc + item.price, 0));
  }, [cart]);

  return (
    <div className="navbar-container">
      <Link style={{ textDecoration: "none", color: "black" }} to="/">
        <h1 className="title">Shopping</h1>
      </Link>
      <div className="navbar-items">
        <span className="total">Total Price: {total} $</span>
        <Link to="/cart">
          <Badge
            overlap="rectangular"
            badgeContent={cart.length}
            color="primary"
          >
            <ShoppingCartOutlined style={{ color: "black" }} />
          </Badge>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
