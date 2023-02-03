import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AddOrder } from "./Add-order";
import { Table } from "./Table";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Link to={"/"}>Home</Link>
        <Link to={"/add"}>Add order</Link>
      </header>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/add" element={<AddOrder />} />
        <Route path="*" element={<p>Puslapis nerastas!</p>} />
      </Routes>
    </BrowserRouter>
  );
};
