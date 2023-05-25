import "./App.css";
import { Header } from "./Components/Header/Header.tsx";
import { ProgressBarCircle } from "./Components/ProgressBarCircle/ProgressBarCircle.tsx";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="content">
          <ProgressBarCircle />
        </div>
      </div>
    </div>
  );
}

export default App;
