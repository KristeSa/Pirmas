import { BrowserRouter, Route, Routes } from "react-router-dom";

export const MainRouter = () => {
  return;
  <BrowserRouter>
    <header className="App-header">
      <Link to={"/"}>Home</Link>
      <Link to={"/add"}>Add order</Link>
    </header>
    <Routes>
      <Route path="/" element={} />
      <Route path="/add" element={} />
      <Route path="*" element={<p>Puslapis nerastas!</p>} />
    </Routes>
  </BrowserRouter>;
};
