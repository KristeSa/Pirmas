import { useContext } from "react";
import { AiFillShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ProductsContext } from "./ProductContext/ProductContext";

export const Router = () => {
  const items = useContext(ProductsContext);

  return (
    <nav>
      <Link to={"/"}>
        <h1>Clothing</h1>
      </Link>
      <Link to={"/checkout"}>
        <div className="cart">
          <AiFillShopping />
          <span>{items.length}</span>
        </div>
      </Link>
    </nav>
  );
};
