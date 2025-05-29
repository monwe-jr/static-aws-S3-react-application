import "../styles/Game.css";

export default function Game({
  level,
  gameOver,
  onButtonClick,
  started,
  isUserTurn,
}) {
  const handleInput = (color, e) => {
    e.preventDefault(); // Prevent double-trigger
    if (!started || !isUserTurn) return;
    onButtonClick(color);
  };

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
            onTouchStart={(e) => handleInput("green", e)}
            onClick={(e) => handleInput("green", e)}
          />
          <div
            id="red"
            className="btn red"
            onTouchStart={(e) => handleInput("red", e)}
            onClick={(e) => handleInput("red", e)}
          />
        </div>
        <div className="row">
          <div
            id="yellow"
            className="btn yellow"
            onTouchStart={(e) => handleInput("yellow", e)}
            onClick={(e) => handleInput("yellow", e)}
          />
          <div
            id="blue"
            className="btn blue"
            onTouchStart={(e) => handleInput("blue", e)}
            onClick={(e) => handleInput("blue", e)}
          />
        </div>
      </div>
    </div>
  );
}
