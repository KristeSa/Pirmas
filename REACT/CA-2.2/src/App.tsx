import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Portfolio } from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header>
          <h1>Title</h1>
          <p>Add your own text</p>
          <button>Button</button>
        </Header>
      </header>
      <main>
        <section>
          <h2>Portfolio</h2>
          <p className="inner-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quis
            consequuntur, fuga aliquid, voluptatibus eius vel sunt unde,
            recusandae temporibus mollitia inventore vero sint itaque voluptate
            corrupti delectus magnam necessitatibus?
          </p>
        </section>
        <section className="porfolio-container">
          <Portfolio text="Lorem ipsum" />
          <Portfolio text="Lorem ipsum" />
          <Portfolio text="Lorem ipsum" />
          <Portfolio text="Lorem ipsum" />
          <Portfolio text="Lorem ipsum" />
          <Portfolio text="Lorem ipsum" />
        </section>
      </main>
    </div>
  );
}

export default App;
