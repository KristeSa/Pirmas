import { Box, Grid, Typography } from "@mui/material";
import { FC, useContext, useEffect, useState } from "react";
import { ProductContext } from "../ProductContext";
import { ProductActionButton } from "../Products/ProductActionButton";

export const Cart = () => {
  const { cartProducts } = useContext(ProductContext);
  const [isEmptyCart, setIsEmptyCart] = useState(true);

  const currencyFormat = new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: "EUR",
  });

  const totalPrice = cartProducts.reduce(
    (curPrice, cartProduct) =>
      curPrice + (cartProduct.price || 0) * cartProduct.amount,
    0
  );

  useEffect(() => {
    setIsEmptyCart(cartProducts.length === 0);
  }, []);

  return (
    <>
      {isEmptyCart ? (
        <Typography
          component="h3"
          variant="h3"
          padding={2}
          fontSize="1.5rem"
          textAlign="center"
          borderTop="1px solid black"
          role="empty cart message"
        >
          Your cart is empty
        </Typography>
      ) : (
        <Box>
          <ul>
            {cartProducts.map((product) => (
              <li>
                <Grid
                  aria-label="cart-products"
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
                    <Typography aria-label="product title">
                      {product.title}
                    </Typography>
                  </Grid>

                  <Grid item xs={3} display="flex" gap={"20px"}>
                    <ProductActionButton
                      color="success"
                      title="+"
                      type="addProduct"
                      aria-label="add button"
                      productId={product.id}
                    />

                    <Typography textAlign={"center"}>
                      {product.amount}
                    </Typography>

                    <ProductActionButton
                      color="error"
                      title="-"
                      type="removeProduct"
                      aria-label="remove button"
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

          <Typography
            variant="h4"
            textAlign="right"
            mt="20px"
            aria-label="total price"
          >
            Total price: {currencyFormat.format(totalPrice)}
          </Typography>
        </Box>
      )}
    </>
  );
};
