import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { VisitsCount } from "./VisitsCount";

export const MainRouter = (props: any) => {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Link to={"/"}>Home</Link>
        <Link to={"/asdasd"}>Nera tokio linko</Link>
      </header>

      {props.children}
      <VisitsCount />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<p>Puslapis nerastas!</p>} />
      </Routes>
    </BrowserRouter>
  );
};
