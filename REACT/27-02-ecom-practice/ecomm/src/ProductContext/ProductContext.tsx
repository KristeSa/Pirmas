import { createContext } from "react";
import { TProductContext } from "./types";

const INITIAL_VALUE = {
  fetchedProducts: [],
  cartProducts: [],
  dispatch: () => {},
} as const;

export const ProductContext = createContext<TProductContext>(INITIAL_VALUE);
