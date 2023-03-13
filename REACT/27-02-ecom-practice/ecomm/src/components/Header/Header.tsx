import { Box, Grid, Typography } from "@mui/material";
import { FC, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../ProductContext";

export const Header: FC = () => {
  const { cartProducts } = useContext(ProductContext);
  const { pathname } = useLocation();
  const isOnCartLink = pathname.includes("/cart");

  let cartAmount = 0;

  cartProducts.forEach((product) => {
    cartAmount += product.amount;
  });

  return (
    <Box component="header" textAlign="center" margin="0 auto" width="600px">
      <Typography variant="h3" padding={2} fontWeight="600px">
        {isOnCartLink ? "CART" : "PRODUCTS"}
      </Typography>

      <Grid
        role="navigation"
        container
        textAlign="center"
        mb={2}
        sx={{
          "& a": {
            color: "purple",
            textDecoration: "none",

            ":hover": { color: "lightgreen" },
          },
        }}
      >
        <Grid item xs={12} sm={6}>
          <Link to="/">
            <Typography aria-label="home link">Home</Typography>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Link to="/cart">
            <Typography aria-label="cart link">Cart ({cartAmount})</Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
