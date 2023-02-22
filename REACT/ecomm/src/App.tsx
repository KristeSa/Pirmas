import { useState } from "react";
import "./App.css";
import { MainRouter } from "./components/MainRouter";
import {
  ShoppingContext,
  ShoppingProvider,
} from "./components/ProductContext/ProductContext";
import CartLogo from "./components/cartLogo/CartLogo";
import { Cart } from "./components/Cart/Cart";
import { Products } from "./components/products/Products";

const App = () => {
  const [isShoppingCartShown, showShoppingCart] = useState<boolean>(false);

  return (
    <ShoppingContext.Provider>
      <MainRouter />
      <CartLogo
        onClick={() => {
          showShoppingCart(!isShoppingCartShown);
        }}
      />
      {isShoppingCartShown ? <Cart /> : <Products />}
    </ShoppingContext.Provider>
  );
};
export default App;
