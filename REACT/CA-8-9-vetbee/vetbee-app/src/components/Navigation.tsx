import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Medications } from "../Medications";
import { Pets } from "../Pets";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Link className="link" to={"/pets"}>
          Pets
        </Link>
        <Link className="link" to={"/meds"}>
          Meds
        </Link>
      </header>
      <Routes>
        <Route path="/pets" element={<Pets />} />
        <Route path="/meds" element={<Medications />} />
        <Route path="*" element={<p>Puslapis nerastas!</p>} />
      </Routes>
    </BrowserRouter>
  );
};
