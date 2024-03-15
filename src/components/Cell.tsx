import style from "../assets/styles/Cell.module.css";
import Piece from "./Piece";

interface CellProps {
  isValidMove: boolean;
  piece: PlayerColor;
  onClick: () => void;
  currentPlayer: PlayerColor;
}

export default function Cell({
  piece,
  isValidMove,
  onClick,
  currentPlayer,
}: CellProps) {
  function handleClick() {
    if (currentPlayer === "purple") {
      onClick();
    }
  }

  return (
    <div
      className={`${style.cell} ${isValidMove ? style.validMove : ""}`}
      onClick={handleClick}
    >
      {piece && <Piece playerColor={piece} />}
    </div>
  );
}
