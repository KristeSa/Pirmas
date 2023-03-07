import { Box, Grid, ImageListItem, ImageListItemBar } from "@mui/material";
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
    <>
      <Box sx={{ display: "flex" }}>
        <img
          width={"250px"}
          src={product.image}
          // src={`${product.image}?w=248&fit=crop&auto=format`}
          // srcSet={`${product.image}?w=248&h&fit=crop&auto=format&dpr=2 2x`}
          // loading="lazy"
        />
      </Box>
      <ImageListItemBar>
        title={product.title}
        subtitle={<span>PRICE: {product.price}</span>}
        position="top"
      </ImageListItemBar>

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
    </>
  );
};
