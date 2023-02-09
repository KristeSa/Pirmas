import logo from "../logo.svg";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Pets } from "./Pets";
import { Footer } from "./Footer";
import { NewMedication } from "./NewMedication";
import { NewPet } from "./NewPet";
import { PetLog } from "./PetLog";
import { AddLog } from "./AddLog";
import { AddPrescription } from "./AddPrescription";
import { Meds } from "./Meds";

export const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="header-links">
            <Link className="link" to={"/pets"}>
              Pets
            </Link>
            <Link className="link" to={"/meds"}>
              Medications
            </Link>
          </div>
        </header>
        <Routes>
          <Route path="/pets" element={<Pets />} />
          <Route path="/add-pet" element={<NewPet />} />
          <Route path="/meds" element={<Meds />} />
          <Route path="/add-med" element={<NewMedication />} />
          <Route path="/logs/:id" element={<PetLog />} />
          <Route path="/add-log" element={<AddLog />} />
          <Route path="/add-prescription" element={<AddPrescription />} />
          <Route path="*" element={<p>Puslapis nerastas!</p>} />
        </Routes>
      </BrowserRouter>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};
