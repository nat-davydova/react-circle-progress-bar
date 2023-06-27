export function SettingsForm() {
  return (
    <div>
      <h2>Pick Progress Bar Settings</h2>
      <form name="progress-settings">
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
      </form>
    </div>
  );
}
