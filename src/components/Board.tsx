import { useCallback, useEffect, useState } from "react";
import style from "../assets/styles/Board.module.css";
import Cell from "./Cell";
import {
  calculateValidMoves,
  flipPieces,
  initializeBoard,
} from "../modules/GameSetup";
import { NUM_OF_COLUMNS, NUM_OF_ROWS } from "../utils/Constant";
import PlayerCard from "./PlayerCard";
import { calculateWinner } from "../modules/GameRules";
import ResultModal from "./ResultModal";

interface BoardProps {
  quitGame: () => void;
}

export default function Board({ quitGame }: BoardProps) {
  const [board, setBoard] = useState<BoardState>(() => initializeBoard());
  const [currentPlayer, setCurrentPlayer] = useState<PlayerColor>("purple");
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [winner, setWinner] = useState<PlayerColor | null>(null);
  const [scores, setScores] = useState({ purple: 0, blue: 0 });

  const validMoves = calculateValidMoves(board, currentPlayer);

  const handleMove = useCallback(
    (row: number, col: number) => {
      if (validMoves[row][col]) {
        setBoard((prevBoard) => flipPieces(row, col, currentPlayer, prevBoard));
        setCurrentPlayer(currentPlayer === "purple" ? "blue" : "purple");
      }
    },
    [currentPlayer, validMoves]
  );

  function resetGame() {
    setBoard(initializeBoard());
    setCurrentPlayer("purple");
    setGameOver(false);
    setWinner(null);
  }

  function countPieces(board: BoardState): { purple: number; blue: number } {
    let purpleCount = 0;
    let blueCount = 0;

    for (let row = 0; row < NUM_OF_ROWS; row++) {
      for (let col = 0; col < NUM_OF_COLUMNS; col++) {
        if (board[row][col] === "purple") {
          purpleCount++;
        } else if (board[row][col] === "blue") {
          blueCount++;
        }
      }
    }

    return { purple: purpleCount, blue: blueCount };
  }

  useEffect(() => {
    const makeAIMove = () => {
      const availableMoves = [];
      for (let row = 0; row < NUM_OF_ROWS; row++) {
        for (let col = 0; col < NUM_OF_COLUMNS; col++) {
          if (calculateValidMoves(board, "blue")[row][col]) {
            availableMoves.push([row, col]);
          }
        }
      }

      if (availableMoves.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableMoves.length);
        const [row, col] = availableMoves[randomIndex];
        handleMove(row, col);
      }
    };

    const currentPlayerMoves = calculateValidMoves(board, currentPlayer);
    const hasAvailableMoves = currentPlayerMoves.some((rowMoves) =>
      rowMoves.some((move) => move)
    );

    if (!hasAvailableMoves) {
      const nextPlayer = currentPlayer === "purple" ? "blue" : "purple";
      const nextPlayerMoves = calculateValidMoves(board, nextPlayer);

      if (!nextPlayerMoves.some((rowMoves) => rowMoves.some((move) => move))) {
        const winner = calculateWinner(board);
        if (winner) {
          setGameOver(true);
          setWinner(winner);
        } else if (
          !nextPlayerMoves.some((rowMoves) => rowMoves.some((move) => move))
        ) {
          setGameOver(true);
          setWinner(null);
        }
      } else {
        setCurrentPlayer(nextPlayer);
        if (nextPlayer === "blue") {
          setTimeout(makeAIMove, 1000);
        }
      }
    } else {
      if (currentPlayer === "blue") {
        setTimeout(makeAIMove, 1000);
      }
    }

    const pieceCounts = countPieces(board);
    setScores(pieceCounts);
  }, [currentPlayer, board]);

  return (
    <>
      <div className={style.game}>
        <div>
          {gameOver && (
            <ResultModal
              winner={winner}
              onRestart={resetGame}
              onQuit={quitGame}
            />
          )}
        </div>
        <div className={style.board}>
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className={style.row}>
              {row.map((_, colIndex) => (
                <Cell
                  key={`${rowIndex}-${colIndex}`}
                  piece={board[rowIndex][colIndex]}
                  isValidMove={validMoves[rowIndex][colIndex]}
                  onClick={() => handleMove(rowIndex, colIndex)}
                  currentPlayer={currentPlayer}
                />
              ))}
            </div>
          ))}
        </div>
        <div className={style.playerInfo}>
          <PlayerCard
            user="purple"
            playerScore={scores.purple}
            currentPlayer={currentPlayer}
          />
          <PlayerCard
            user="blue"
            playerScore={scores.blue}
            currentPlayer={currentPlayer}
          />
        </div>
      </div>
    </>
  );
}
