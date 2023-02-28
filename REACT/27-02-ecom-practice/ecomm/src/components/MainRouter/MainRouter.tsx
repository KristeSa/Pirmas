import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Cart, NoPageFound, Products } from "..";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Link to="/cart">Cart</Link>
      <Link to="/">Home</Link>

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </BrowserRouter>
  );
};
