import { type FC, useContext } from "react";
import { ProductContext } from "../ProductContext";
import type { TProductProps } from "./types";
import { Box, ImageListItem, ImageListItemBar } from "@mui/material";
import { ProductActionButton } from "./ProductActionButton";

export const Product: FC<TProductProps> = ({ product }) => {
  const { cartProducts } = useContext(ProductContext);

  //toDo: naudoti objekta:
  const isProductinCart = cartProducts.some(
    (cartProducts) => cartProducts.id === product.id
  );

  return (
    <ImageListItem>
      <img
        src={`${product.image}?w=248&fit=crop&auto=format`}
        srcSet={`${product.image}?w=248&h&fit=crop&auto=format&dpr=2 2x`}
        loading="lazy"
      />

      <ImageListItemBar
        title={product.title}
        subtitle={<span>PRICE: {product.price}</span>}
        position="below"
      />

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="30px"
        sx={{ "& button": { width: "50px" } }}
      >
        <ProductActionButton
          title="+"
          type="addProduct"
          productId={product.id}
        />

        {isProductinCart ? (
          <ProductActionButton
            title="-"
            type="removeProduct"
            productId={product.id}
          />
        ) : null}
      </Box>
    </ImageListItem>
  );
};
