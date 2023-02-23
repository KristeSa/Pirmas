import CartItem from "../../assets/shoppingCart.svg";
import "./CartLogo.css";

export const CartLogo = () => {
  return (
    <div className="icon-container">
      <img
        className="shopping-cart-icon"
        src={CartItem}
        alt="shopping-cart-icon"
      />
    </div>
  );
};
