import "./App.css";
import { MainRouter } from "./components/MainRouter";

function App() {
  return (
    <div className="App">
      <MainRouter>
        <button>Submit</button>
      </MainRouter>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
