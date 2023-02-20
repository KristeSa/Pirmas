import { Link } from "react-router-dom";
import { CartLogo } from "../cartLogo/CartLogo";
import { ShopLogo } from "../shopLogo/ShopLogo";
import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <ShopLogo />
      <Link to="/">
        <h2 className="product-button">Products</h2>
      </Link>
      <Link to="/cart">
        <CartLogo />
      </Link>
    </div>
  );
};
