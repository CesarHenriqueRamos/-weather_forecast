import logo from "./logo.svg";
import "./App.css";
import { Search } from "./components/Search";

function App() {
  return (
    <div className="App">
      <Search placeholder="Digite a Cidade" />
    </div>
  );
}

export default App;
