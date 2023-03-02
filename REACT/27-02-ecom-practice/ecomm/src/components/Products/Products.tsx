import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../ProductContext";
import axios from "axios";
import { Product } from "./Product";
import { ImageList } from "@mui/material";

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
        <ImageList
          cols={3}
          gap={30}
          sx={{
            height: "100%",
            width: 600,
            margin: "auto",
          }}
        >
          {fetchedProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ImageList>
      )}
    </>
  );
};
