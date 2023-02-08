import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <div className="App"></div>
        <Navigation />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
