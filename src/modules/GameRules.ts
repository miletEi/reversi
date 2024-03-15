import { DIRECTIONS, NUM_OF_COLUMNS, NUM_OF_ROWS } from "../utils/Constant";

export function isValidMove(
  row: number,
  col: number,
  currentPlayer: PlayerColor,
  board: BoardState
): boolean {
  if (board[row][col] !== null) {
    return false;
  }

  let isValid = false;

  for (const [dx, dy] of DIRECTIONS) {
    let x = row + dx;
    let y = col + dy;
    let isSandwiched = false;

    while (x >= 0 && x < NUM_OF_ROWS && y >= 0 && y < NUM_OF_COLUMNS) {
      if (board[x][y] === currentPlayer) {
        if (isSandwiched) {
          isValid = true;
        } else {
          break;
        }
      } else if (board[x][y] === null) {
        break;
      } else {
        isSandwiched = true;
      }
      x += dx;
      y += dy;
    }
  }

  return isValid;
}

export function calculateValidMoves(
  board: PlayerColor[][],
  currentPlayer: PlayerColor
): boolean[][] {
  const validMoves = new Array(NUM_OF_ROWS)
    .fill(false)
    .map(() => new Array(NUM_OF_COLUMNS).fill(false));

  for (let row = 0; row < NUM_OF_ROWS; row++) {
    for (let col = 0; col < NUM_OF_COLUMNS; col++) {
      if (isValidMove(row, col, currentPlayer, board)) {
        validMoves[row][col] = true;
      }
    }
  }

  return validMoves;
}

export function calculateWinner(board: BoardState): PlayerColor | null {
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

  if (purpleCount > blueCount) {
    return "purple";
  } else if (blueCount > purpleCount) {
    return "blue";
  } else {
    return null;
  }
}
