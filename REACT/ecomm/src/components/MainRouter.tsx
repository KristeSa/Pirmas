import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./cart/Cart";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { Products } from "./products/Products";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};
