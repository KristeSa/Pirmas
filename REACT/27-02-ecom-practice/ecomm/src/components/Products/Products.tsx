import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../ProductContext";
import axios from "axios";
import { Product } from "./Product";
import { Container, ImageList } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";

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
        <Box py={2}>
          <Grid sx={{ justifyContent: "center" }}>
            <Grid item xs={12}>
              {fetchedProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};
