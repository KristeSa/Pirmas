import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../ProductContext";
import axios from "axios";
import { Product } from "./Product";
import Grid from "@mui/material/Grid";

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
        <Grid container justifyContent="center" display="flex">
          {fetchedProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Grid>
      )}
    </>
  );
};
