import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./components/Products";
import { Checkout } from "./components/Checkout";
import { CartProvider } from "./components/ProductContext/ProductContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
