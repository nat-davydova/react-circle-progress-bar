import "./App.css";
import { useContext } from "react";

import { CircleProgressBar } from "./Components/CircleProgressBar/CircleProgressBar.tsx";
import { Header } from "./Components/Header/Header.tsx";
import { SettingsForm } from "./Components/SettingsForm/SettingsForm.tsx";
import { SettingsContext } from "./contexts/SettingsContext.tsx";

function App() {
  const settings = useContext(SettingsContext);
  const {
    strokeWidth,
    progressPercents,
    strokeLineCaps,
    textContent,
    surface,
  } = settings;

  const { show } = surface;

  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="content">
          <SettingsForm />
          <div className="progressBar-container">
            <CircleProgressBar
              strokeWidth={strokeWidth}
              progressPercents={progressPercents}
              strokeLineCaps={strokeLineCaps}
              textLabel={{
                content: textContent || "",
              }}
              surface={{
                show,
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
