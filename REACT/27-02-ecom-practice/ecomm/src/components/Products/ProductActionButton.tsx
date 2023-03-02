import { Button } from "@mui/material";
import { useContext, type FC } from "react";
import { ProductContext } from "../ProductContext";
import type { TProductActionButtonProps } from "./types";

export const ProductActionButton: FC<TProductActionButtonProps> = ({
  title,
  type,
  productId,
}) => {
  const { dispatch } = useContext(ProductContext);

  return (
    <Button
      variant="outlined"
      sx={{ width: "30px" }}
      onClick={() => dispatch({ type, payload: { productId } })}
    >
      {title}
    </Button>
  );
};
