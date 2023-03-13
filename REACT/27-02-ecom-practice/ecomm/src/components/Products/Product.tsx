import { Box, Grid, Typography } from "@mui/material";
import { FC, useContext } from "react";
import { ProductContext } from "../ProductContext";
import { ProductActionButton } from "./ProductActionButton";
import { TProductProps } from "./types";

export const Product: FC<TProductProps> = ({ product }) => {
  const { cartProducts } = useContext(ProductContext);

  const isProductinCart = cartProducts.some(
    (cartProducts) => cartProducts.id === product.id
  );

  return (
    <Grid
      item
      xs={6}
      sm={3}
      padding="20px"
      boxShadow="0px 0px 8px 1px rgba(0, 0, 0, 0.1)"
      borderRadius="5px"
      textAlign="center"
      aria-label="product"
    >
      <Box
        display="flex"
        margin="0 auto"
        width="100px"
        height="200px"
        alignItems="center"
        aria-label="product image"
        sx={{
          "& img": { objectFit: "cover", width: "100%", maxHeight: "100%" },
        }}
      >
        <img role="img" width="150px" src={product.image} />
      </Box>

      <Box height="50px" overflow="clip">
        <Typography aria-label="product title">{product.title}</Typography>
        <Typography aria-label="product price">
          PRICE: {product.price}
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="30px"
        height="60px"
        // sx={{ "& button": { width: "40px" } }}
      >
        <ProductActionButton
          color="success"
          title="+"
          type="addProduct"
          productId={product.id}
        />

        {isProductinCart ? (
          <ProductActionButton
            color="error"
            title="-"
            type="removeProduct"
            productId={product.id}
          />
        ) : null}
      </Box>
    </Grid>
  );
};
