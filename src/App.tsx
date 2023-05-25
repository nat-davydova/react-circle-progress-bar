import "./App.css";
import { CircleProgressBar } from "./Components/CircleProgressBar/CircleProgressBar.tsx";
import { Header } from "./Components/Header/Header.tsx";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="content">
          <CircleProgressBar />
        </div>
      </div>
    </div>
  );
}

export default App;
