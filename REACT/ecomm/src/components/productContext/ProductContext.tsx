import { createContext } from "react";
import { TProductContext } from "./types";

export const ProductContext = createContext<TProductContext>({
  products: [],
  setProducts: () => {},
});
