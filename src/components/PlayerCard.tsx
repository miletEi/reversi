import player from "../assets/images/player.png";
import ai from "../assets/images/ai.png";
import style from "../assets/styles/PlayerCard.module.css";

interface PlayerCardProps {
  playerScore: number;
  user: string;
  currentPlayer: PlayerColor;
}

export default function PlayerCard({
  playerScore,
  user,
  currentPlayer,
}: PlayerCardProps) {
  const userName = user === "blue" ? "Cindy" : "Mindy";
  const img =
    user === "blue" ? (
      <img className={style.img} src={ai} alt="Player image" />
    ) : (
      <img className={style.img} src={player} alt="Player image" />
    );

  const isCurrentPlayer = currentPlayer === user;

  return (
    <>
      <div
        className={`${style.playerCard} ${isCurrentPlayer ? style.active : ""}`}
      >
        <div className={style.playerImg}>{img}</div>
        <div className={style.playerInfo}>
          <span className={style.playerName}>{userName}</span>
          <span className={style.playerScore}>{playerScore}</span>
        </div>
      </div>
    </>
  );
}
