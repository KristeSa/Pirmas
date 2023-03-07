import { Button } from "@mui/material";
import { useContext, type FC } from "react";
import { ProductContext } from "../ProductContext";
import type { TProductActionButtonProps } from "./types";

export const ProductActionButton: FC<TProductActionButtonProps> = ({
  title,
  type,
  productId,
  color,
}) => {
  const { dispatch } = useContext(ProductContext);

  return (
    <Button
      variant="outlined"
      color={color}
      sx={{ width: "30px", height: "30px" }}
      onClick={() => dispatch({ type, payload: { productId } })}
    >
      {title}
    </Button>
  );
};
