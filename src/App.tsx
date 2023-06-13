import "./App.css";
import { CircleProgressBar } from "./Components/CircleProgressBar/CircleProgressBar.tsx";
import { Header } from "./Components/Header/Header.tsx";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="content">
          <CircleProgressBar
            strokeWidth={4}
            progressPercents={65}
            strokeLineCap="round"
            surface={{
              show: true,
            }}
            progressBar={{
              bgColor: "orange",
              bgGradientPoints: {
                0: "red",
                100: "orange",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
