import "./App.css";
import { Navigation } from "./components/Navigation";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";

export const App = () => {
  return (
    <div className="App">
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </div>
  );
};
