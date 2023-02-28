import { type FC, useContext } from "react";
import { ProductContext } from "../ProductContext";
import type { TProductProps } from "./types";

export const Product: FC<TProductProps> = ({ product }) => {
  const { dispatch } = useContext(ProductContext);

  return (
    <div>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>

      <button
        onClick={() =>
          dispatch({ type: "addProduct", payload: { productId: product.id } })
        }
      >
        Add to Cart
      </button>
    </div>
  );
};
