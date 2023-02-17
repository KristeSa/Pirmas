import { IoShirtOutline } from "react-icons/io5";
import { AiFillShopping } from "react-icons/ai";
import { useContext } from "react";
import { ProductsContext } from "./ProductContext/ProductContext";

export const Card = (name, price) => {
  const addToCart = useContext(ProductsContext);

  return (
    <div onClick={() => addToCart(name, price)} className="card">
      <div className="product-box">
        <IoShirtOutline />
      </div>
      <div className="purchase">
        <h3>{name}</h3>
        <AiFillShopping />
      </div>
      <h4>${price}</h4>
    </div>
  );
};
