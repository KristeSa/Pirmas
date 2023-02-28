import { useReducer } from "react";
import { ProductContext, MainRouter, productsReducer } from "./components";

export const App = () => {
  const [state, dispatch] = useReducer(productsReducer, {
    fetchedProducts: [],
    cartProducts: [],
  });

  return (
    <div>
      <ProductContext.Provider value={{ ...state, dispatch }}>
        <MainRouter />
      </ProductContext.Provider>
    </div>
  );
};
