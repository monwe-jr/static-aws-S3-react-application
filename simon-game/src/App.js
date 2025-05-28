import { useState, useEffect } from "react";
import Menu from "./components/Menu";
import Game from "./components/Game";
import "./styles/App.css";

const buttonColours = ["red", "blue", "green", "yellow"];

export default function App() {
  const [gamePattern, setGamePattern] = useState([]);
  const [userPattern, setUserPattern] = useState([]);
  const [level, setLevel] = useState(0);
  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [flashGameOver, setFlashGameOver] = useState(false);
  const [menu, setMenu] = useState(true);

  useEffect(() => {
    if (userPattern.length && userPattern.length === gamePattern.length) {
      const match = userPattern.every((val, i) => val === gamePattern[i]);
      if (match) {
        setTimeout(nextSequence, 1000);
      } else {
        handleGameOver();
      }
    }
  }, [userPattern]);

  useEffect(() => {
    const handleKeyPress = () => {
      if (gameOver) {
        setGameOver(false);
        handleStart();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [gameOver]);

  const handleStart = () => {
    setMenu(false);
    setStarted(true);
    setGamePattern([]);
    setUserPattern([]);
    nextSequence();
  };

  const nextSequence = () => {
    const randomColor = buttonColours[Math.floor(Math.random() * 4)];
    setGamePattern((prev) => [...prev, randomColor]);
    setUserPattern([]);
    setTimeout(() => {
      playSound(randomColor);
      animatePress(randomColor);
    }, 100);
    setLevel((prev) => prev + 1);
  };

  const handleButtonClick = (color) => {
    if (!started) return;
    setUserPattern((prev) => [...prev, color]);
    playSound(color);
    animatePress(color);

    const index = userPattern.length;
    if (gamePattern[index] !== color) {
      handleGameOver();
    }
  };

  const handleGameOver = () => {
    playSound("wrong");
    setGameOver(true);
    setStarted(false);
    setLevel(0);
    setGamePattern([]);
    setUserPattern([]);

    setFlashGameOver(true);
    setTimeout(() => {
      setFlashGameOver(false);
    }, 200);
  };

  const playSound = (name) => {
    const audio = new Audio(`./sounds/${name}.mp3`);
    audio.play();
  };

  const animatePress = (color) => {
    const el = document.getElementById(color);
    if (el) {
      el.classList.add("pressed");
      setTimeout(() => el.classList.remove("pressed"), 200);
    }
  };

  return (
    <div className={`App ${flashGameOver ? "game-over" : ""}`}>
      {menu ? (
        <Menu onStart={handleStart} />
      ) : (
        <Game
          level={level}
          gameOver={gameOver}
          onButtonClick={handleButtonClick}
        />
      )}
    </div>
  );
}
