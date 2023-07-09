import { useContext } from "react";

import {
  onChangeProgressPercents,
  onChangeStrokeLineCaps,
  onChangeStrokeWidth,
} from "../../actions/settingsActions.ts";
import {
  SettingsContext,
  SettingsDispatchContext,
} from "../../contexts/SettingsContext.tsx";

import styles from "./SettingsForm.module.css";

export function SettingsForm() {
  const settings = useContext(SettingsContext);
  const dispatch = useContext(SettingsDispatchContext);
  const { strokeWidth, progressPercents } = settings;

  if (!dispatch) {
    return <></>;
  }

  return (
    <div>
      <h2>Pick Progress Bar Settings</h2>
      <form className={styles.form} name="progress-settings">
        <div className={styles.fieldsContainer}>
          <div className={styles.field}>
            <label htmlFor="percentage">Percentage:</label>
            <input
              id="percentage"
              type="number"
              min={0}
              max={100}
              value={progressPercents}
              onChange={(e) =>
                onChangeProgressPercents({
                  progressPercents: Number(e.target.value),
                  dispatch,
                })
              }
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="strokeWidth">Stroke width:</label>
            <input
              id="strokeWidth"
              type="number"
              min={1}
              max={25}
              value={strokeWidth}
              onChange={(e) =>
                onChangeStrokeWidth({ width: e.target.value, dispatch })
              }
            />
          </div>
        </div>

        <div>
          <h3>Stroke Line Caps</h3>

          <div className={styles.fieldsContainer}>
            <div className={styles.field}>
              <label htmlFor="caps-round">Round: </label>
              <input
                id="caps-round"
                type="radio"
                name="caps"
                value="round"
                checked
                onChange={(e) => {
                  console.log("wow");
                  onChangeStrokeLineCaps({
                    strokeLineCapsType: e.target.value,
                    dispatch,
                  });
                }}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="caps-square">Square: </label>
              <input
                id="caps-square"
                type="radio"
                name="caps"
                value="square"
                onChange={(e) => {
                  console.log("toto");
                  onChangeStrokeLineCaps({
                    strokeLineCapsType: e.target.value,
                    dispatch,
                  });
                }}
              />
            </div>
          </div>
        </div>

        <div>
          <h3>Surface</h3>

          <div className={styles.fieldsContainer}>
            <div className={styles.field}>
              <label htmlFor="show-surface">Show Surface: </label>
              <input id="show-surface" type="checkbox" value="show" checked />
            </div>

            <div className={styles.field}>
              <label htmlFor="surface-color">Surface Color: </label>
              <input id="surface-color" type="color" value="#e3e3e3" />
            </div>
          </div>
        </div>
        <div>
          <h3>Progress Bar</h3>

          <div className={styles.fieldsBlock}>
            <div className={styles.fieldsContainer}>
              <div className={styles.field}>
                <label htmlFor="progress-bg">Plain Background: </label>
                <input
                  id="progress-bg"
                  type="radio"
                  name="progress"
                  value="bg"
                  checked
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="progress-gradient">Gradient: </label>
                <input
                  id="progress-gradient"
                  type="radio"
                  name="progress"
                  value="gradient"
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="progress-color">Progress Color: </label>
              <input id="progress-color" type="color" value="#fff000" />
            </div>

            <div className={styles.fieldsContainer}>
              <div className={styles.field}>
                <label htmlFor="percent-0">Percent: </label>
                <input
                  id="percent-0"
                  type="number"
                  min={0}
                  max={100}
                  value={65}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="color-0">Color: </label>
                <input id="color-0" type="color" value="#cccbbb" />
              </div>
              <button>Add Point</button>
            </div>
          </div>
        </div>
        <div>
          <h3>Text Content</h3>
          <div className={styles.field}>
            <label htmlFor="content">Text Content:</label>
            <input
              id="content"
              type="text"
              value="65%"
              placeholder="Add Text Content"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
