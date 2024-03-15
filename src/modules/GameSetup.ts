import { DIRECTIONS, NUM_OF_COLUMNS, NUM_OF_ROWS } from "../utils/Constant";
import { calculateValidMoves } from "./GameRules";

export function initializeBoard() {
  const initialBoard: BoardState = new Array(NUM_OF_ROWS)
    .fill(null)
    .map(() => new Array(NUM_OF_COLUMNS).fill(null));

  initialBoard[3][3] = "purple";
  initialBoard[3][4] = "blue";
  initialBoard[4][3] = "blue";
  initialBoard[4][4] = "purple";

  return initialBoard;
}

export const flipPieces = (
  row: number,
  col: number,
  currentPlayer: PlayerColor,
  currentBoard: BoardState
) => {
  const updatedBoard = [...currentBoard];
  updatedBoard[row][col] = currentPlayer;
  for (const [dx, dy] of DIRECTIONS) {
    let x = row + dx;
    let y = col + dy;
    const flippedPiece = [];

    while (x >= 0 && x < NUM_OF_ROWS && y >= 0 && y < NUM_OF_COLUMNS) {
      if (updatedBoard[x][y] === currentPlayer) {
        flippedPiece.forEach(([row, col]) => {
          updatedBoard[row][col] = currentPlayer;
        });
        break;
      } else if (updatedBoard[x][y] === null) {
        break;
      } else {
        flippedPiece.push([x, y]);
      }
      x += dx;
      y += dy;
    }
  }
  return updatedBoard;
};

export function handleMove(
  row: number,
  col: number,
  currentPlayer: PlayerColor,
  board: BoardState
): BoardState {
  const validMoves = calculateValidMoves(board, currentPlayer);
  if (validMoves[row][col]) {
    return flipPieces(row, col, currentPlayer, board);
  }
  return board;
}
export { calculateValidMoves };
