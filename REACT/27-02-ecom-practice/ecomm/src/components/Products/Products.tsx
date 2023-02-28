import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../ProductContext";
import axios from "axios";
import { Product } from "./Product";

export const Products = () => {
  const { dispatch, fetchedProducts } = useContext(ProductContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) =>
        dispatch({
          type: "setProducts",
          payload: { fetchedProducts: res.data },
        })
      )
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <p>Loading products...</p>
      ) : (
        <div>
          <h1>Products</h1>
          {fetchedProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};
