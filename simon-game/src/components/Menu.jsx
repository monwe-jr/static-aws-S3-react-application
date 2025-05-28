import "../styles/Menu.css";

export default function Menu({ onStart }) {
  return (
    <div className="menu">
      <div className="instructions">
        <h1 id="menu-title">Welcome to the Simon Game!</h1>
        <p>
          Press "Start" to begin. Watch the color sequence carefully, then
          repeat it by clicking the buttons in the same order. Each round adds a
          new color to the pattern. Try to keep up as it gets faster and harder!
          One mistake, and it's game over — good luck!
        </p>
        <div id="play" onClick={onStart}>
          Start
        </div>
      </div>
    </div>
  );
}
