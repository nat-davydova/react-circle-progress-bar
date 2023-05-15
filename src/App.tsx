import "./App.css";
import { Header } from "./Components/Header/Header.tsx";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="content"></div>
      </div>
    </div>
  );
}

export default App;
