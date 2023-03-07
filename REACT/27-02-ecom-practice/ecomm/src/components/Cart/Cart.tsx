import { Box, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { ProductContext } from "../ProductContext";
import { ProductActionButton } from "../Products/ProductActionButton";

export const Cart = () => {
  const { cartProducts } = useContext(ProductContext);

  const currencyFormat = new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: "EUR",
  });

  const totalPrice = cartProducts.reduce(
    (curPrice, cartProduct) =>
      curPrice + (cartProduct.price || 0) * cartProduct.amount,
    0
  );

  return (
    <Box>
      <ul>
        {cartProducts.map((product) => (
          <li>
            <Grid
              item
              xs={12}
              container
              padding={"10px"}
              justifyContent={"space-between"}
              bgcolor="cream"
              border="1px solid black"
              mx="auto"
              sx={{ "& MuiTypography-root": { fontSize: "20px" } }}
            >
              <Grid item xs={6}>
                <Typography>{product.title}</Typography>
              </Grid>

              <Grid item xs={3} display="flex" gap={"20px"}>
                <ProductActionButton
                  color="success"
                  title="+"
                  type="addProduct"
                  productId={product.id}
                />

                <Typography textAlign={"center"}> {product.amount}</Typography>

                <ProductActionButton
                  color="error"
                  title="-"
                  type="removeProduct"
                  productId={product.id}
                />
              </Grid>

              <Grid item xs={3}>
                {product.price ? (
                  <Typography textAlign="right">
                    {currencyFormat.format(product.price)}
                  </Typography>
                ) : null}
              </Grid>
            </Grid>
          </li>
        ))}
      </ul>

      <Typography variant="h4" textAlign="right" mt="20px">
        Total price: {currencyFormat.format(totalPrice)}
      </Typography>
    </Box>
  );
};
