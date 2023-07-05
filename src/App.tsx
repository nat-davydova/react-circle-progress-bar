import "./App.css";
import { useContext } from "react";

import { CircleProgressBar } from "./Components/CircleProgressBar/CircleProgressBar.tsx";
import { Header } from "./Components/Header/Header.tsx";
import { SettingsForm } from "./Components/SettingsForm/SettingsForm.tsx";
import { SettingsContext } from "./contexts/SettingsContext.tsx";

function App() {
  const settings = useContext(SettingsContext);
  const { strokeWidth } = settings;

  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="content">
          <SettingsForm />
          <div className="progressBar-container">
            <CircleProgressBar
              strokeWidth={strokeWidth}
              progressPercents={65}
              strokeLineCap="round"
              textLabel={{
                content: "65%",
              }}
              surface={{
                show: true,
              }}
              progressBar={{
                bgColor: "orange",
                bgGradientPoints: {
                  0: "red",
                  100: "orange",
                },
                gradientCoords: {
                  x1: 0,
                  x2: 1,
                  y1: 0,
                  y2: 1,
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
