import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Checkout } from "../../pages/Checkout/Checkout";
import { Home } from "../../pages/Home/Home";
import { NavBar } from "../NavBar/NavBar";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};
