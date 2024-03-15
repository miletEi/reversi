import { useState } from "react";
import "./assets/styles/App.css";
import Board from "./components/Board";
import MainMenu from "./components/MainMenu";

function App() {
  const [showGame, setShowGame] = useState(false);

  const startGame = () => {
    setShowGame(true);
  };

  const quitGame = () => {
    setShowGame(false);
  };
  return showGame ? (
    <Board quitGame={quitGame} />
  ) : (
    <MainMenu startGame={startGame} />
  );
}

export default App;
