import React, { createContext, Dispatch, FC, useReducer } from "react";
import { Actions, cartReducer, State } from "../products/cartReducer";
import { TProductContext } from "./types";

//const initialValue: TProductContext = { products: [], setProducts: () => {} };

const initialState = {
  counter: 0,
  products: [],
};

export const INITIAL_VALUE: TProductContext = {
  products: [],
  setProducts: () => {},
  cartProducts: [],
  setCartProducts: () => {},
};

export const ShoppingContext = createContext<{
  state: State;
  dispatch: Dispatch<Actions>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const ShoppingProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <ShoppingContext.Provider value={{ state, dispatch }}>
      {children}
    </ShoppingContext.Provider>
  );
};

// const INITIAL_VALUE = {
//   products: [],
//   setProducts: () => {},
//   cartProducts: [],
//   setCartProducts: () => {},
// } satisfies TProductContext;

// const INITIAL_VALUE = {
//   products: [],
//   setProducts: () => {},
//   cartProducts: [],
//   setCartProducts: () => {},
// } as TProductContext;

export const ProductContext = createContext(INITIAL_VALUE);
