import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./Cart/Cart";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
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
