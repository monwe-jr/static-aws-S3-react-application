import "../styles/Game.css";

export default function Game({ level, gameOver, onButtonClick }) {
  return (
    <div className="game">
      <h1 id="level-title">
        {gameOver ? "Game Over, Press Any Key to Restart" : `Level ${level}`}
      </h1>
      <div className="container">
        <div className="row">
          <div
            id="green"
            className="btn green"
            onClick={() => onButtonClick("green")}
          />
          <div
            id="red"
            className="btn red"
            onClick={() => onButtonClick("red")}
          />
        </div>
        <div className="row">
          <div
            id="yellow"
            className="btn yellow"
            onClick={() => onButtonClick("yellow")}
          />
          <div
            id="blue"
            className="btn blue"
            onClick={() => onButtonClick("blue")}
          />
        </div>
      </div>
    </div>
  );
}
