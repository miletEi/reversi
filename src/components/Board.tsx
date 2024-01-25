import "../assets/css/Board.css";
import { NUM_OF_COLUMNS, NUM_OF_ROWS } from "../utils/Constant";
import Cell from "./Cell";

export default function Board() {
  const initializeBoard: BoardState = new Array(NUM_OF_ROWS)
    .fill(null)
    .fill(null)
    .map(() => new Array(NUM_OF_COLUMNS).fill(null));

  return (
    <div className="board d-grid-template-8 ">
      {initializeBoard.map((row, rowIndex) => (
        <div key={rowIndex} className="d-flex">
          {row.map((_, colIndex) => (
            <Cell key={`${rowIndex}-${colIndex}`} />
          ))}
        </div>
      ))}
    </div>
  );
}
