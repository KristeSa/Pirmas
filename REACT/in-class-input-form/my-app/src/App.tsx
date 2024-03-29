import logo from "./logo.svg";
import "./App.css";
import { Form } from "./Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Form />
      </main>
    </div>
  );
}

export default App;
