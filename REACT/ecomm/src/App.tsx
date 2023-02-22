import { useState } from "react";
import "./App.css";
import { MainRouter } from "./components/MainRouter";
import { ProductContext } from "./components/ProductContext";
import { INITIAL_PRODUCTS } from "./utils/initialProducts";

function App() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      <MainRouter />
    </ProductContext.Provider>
  );
}
export default App;
