import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

export const Header: FC = () => {
  return (
    <Box component="header">
      <Typography component="h1" variant="h2">
        Products
      </Typography>

      <Grid
        container
        textAlign="center"
        mb={2}
        sx={{
          "& a": {
            color: "darkgreen",
            textDecoration: "none",

            ":hover": { color: "lightgreen" },
          },
        }}
      >
        <Grid item xs={6} justifyContent="center">
          <Link to="/">Home</Link>
        </Grid>

        <Grid item xs={6}>
          <Link to="/cart">Cart</Link>
        </Grid>
      </Grid>
    </Box>
  );
};
