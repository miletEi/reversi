import player from "../assets/images/player.png";
import ai from "../assets/images/ai.png";
import style from "../assets/styles/PlayerCard.module.css";

interface PlayerCardProps {
  playerScore: number;
  user: string;
}

export default function PlayerCard({ playerScore, user }: PlayerCardProps) {
  const userName = user === "computer" ? "Cindy" : "Mindy";
  const img =
    user === "computer" ? (
      <img className={style.img} src={ai} alt="Player image" />
    ) : (
      <img className={style.img} src={player} alt="Player image" />
    );
  return (
    <>
      <div className={style.playerCard}>
        <div className={style.playerImg}>{img}</div>
        <div className={style.playerInfo}>
          <span className={style.playerName}>{userName}</span>
          <span className={style.playerScore}>{playerScore}</span>
        </div>
      </div>
    </>
  );
}
