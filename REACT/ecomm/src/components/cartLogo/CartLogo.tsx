import { FC, useContext } from "react";
import { ShoppingContext } from "../ProductContext/ProductContext";
import CartItem from "../../assets/shoppingCart.svg";
import "./CartLogo.css";

interface ShoppingCartIconProps {
  onClick: () => void;
}

const ShoppingCartIcon: FC<ShoppingCartIconProps> = ({ onClick }) => {
  const { state } = useContext(ShoppingContext);

  return (
    <div className="icon-container" onClick={onClick}>
      <img
        className="shopping-cart-icon"
        src={CartItem}
        alt="shopping-cart-icon"
      />
      <span className="number-of-items-in-cart">{state.counter}</span>
    </div>
  );
};

export default ShoppingCartIcon;
