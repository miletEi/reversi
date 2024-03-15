import style from "../assets/styles/Piece.module.css";

type PieceProps = {
  playerColor: PlayerColor;
};

export default function Piece({ playerColor }: PieceProps) {
  const pieceStyle = `${style.piece} ${style[playerColor]}`;
  return <div className={pieceStyle}></div>;
}
