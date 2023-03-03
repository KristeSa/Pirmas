import { type FC, useContext } from "react";
import { ProductContext } from "../ProductContext";
import type { TProductProps } from "./types";
import {
  Box,
  Card,
  CardMedia,
  Grid,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import { ProductActionButton } from "./ProductActionButton";
import { Container } from "@mui/system";
import ImageList from "@mui/material/ImageList";

export const Product: FC<TProductProps> = ({ product }) => {
  const { cartProducts } = useContext(ProductContext);

  //toDo: naudoti objekta:
  const isProductinCart = cartProducts.some(
    (cartProducts) => cartProducts.id === product.id
  );

  return (
    <Card>
      <img src={product.image} />

      <CardMedia component="img" src={product.image} />

      <Box py={1} px={2}>
        <Grid container alignItems="center">
          <Grid item xs={9}>
            <Typography
              gutterBottom
              variant="body1"
              component="h2"
              style={{ textTransform: "capitalize" }}
            >
              {product.title}
            </Typography>
            <Typography variant="body2" component="span">
              ${product.price}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <ProductActionButton title="+" type="addProduct" productId={product.id} />

      {isProductinCart ? (
        <ProductActionButton
          title="-"
          type="removeProduct"
          productId={product.id}
        />
      ) : null}
    </Card>
  );
};
