import styles from "./SettingsForm.module.css";

export function SettingsForm() {
  return (
    <div>
      <h2>Pick Progress Bar Settings</h2>
      <form className={styles.form} name="progress-settings">
        <div>
          <label htmlFor="percentage">Percentage:</label>
          <input id="percentage" type="number" min={0} max={100} value={65} />
        </div>
        <div>
          <label htmlFor="strokeWidth">Stroke width:</label>
          <input id="strokeWidth" type="number" min={1} max={50} value={4} />
        </div>
        <div>
          <h3>Stroke Line Caps</h3>
          <label htmlFor="caps-round">Round: </label>
          <input
            id="caps-round"
            type="radio"
            name="caps"
            value="round"
            checked
          />

          <label htmlFor="caps-square">Square: </label>
          <input id="caps-square" type="radio" name="caps" value="square" />
        </div>
        <div>
          <h3>Surface</h3>
          <label htmlFor="show-surface">Show Surface: </label>
          <input id="show-surface" type="checkbox" value="show" checked />

          <label htmlFor="surface-color">Surface Color: </label>
          <input id="surface-color" type="color" value="#e3e3e3" />
        </div>
        <div>
          <h3>Progress Bar</h3>
          <label htmlFor="progress-bg">Plain Background: </label>
          <input
            id="progress-bg"
            type="radio"
            name="progress"
            value="bg"
            checked
          />

          <label htmlFor="progress-gradient">Gradient: </label>
          <input
            id="progress-gradient"
            type="radio"
            name="progress"
            value="gradient"
          />

          <label htmlFor="progress-color">Progress Color: </label>
          <input id="progress-color" type="color" value="#fff000" />

          <div>
            <label htmlFor="percent-0">Percent: </label>
            <input id="percent-0" type="number" min={0} max={100} value={65} />
            <input id="percent" type="color" value="#cccbbb" />
            <button>Add Point</button>
          </div>

          <div>
            <h3>Text Content</h3>
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
