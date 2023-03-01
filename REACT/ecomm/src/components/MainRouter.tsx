import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./cart/Cart";
import { Products } from "./cart/Products";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

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
