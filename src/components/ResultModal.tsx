import { useState } from "react";
import winImg from "../assets/images/win.png";
import loseImg from "../assets/images/lose.png";
import drawImg from "../assets/images/draw.png";
import style from "../assets/styles/ResultModal.module.css";

interface ResultModalProps {
  winner: PlayerColor | null;
  onRestart: () => void;
  onQuit: () => void;
}

export default function ResultModal({
  winner,
  onRestart,
  onQuit,
}: ResultModalProps) {
  const [modalVisible, setModalVisible] = useState(true);
  const handleRestart = () => {
    setModalVisible(false);
    onRestart();
  };
  let resultImg;
  let winnerStatement;
  if (winner) {
    if (winner === "purple") {
      resultImg = <img src={winImg} alt="Win" />;
      winnerStatement = "Victory!!!";
    } else {
      resultImg = <img src={loseImg} alt="Lost" />;
      winnerStatement = "You Lose!!!";
    }
  } else {
    resultImg = <img src={drawImg} alt="Draw" />;
  }
  return (
    <>
      {modalVisible && (
        <div className={style.modal}>
          <div className={style.content}>
            <div className={style.header}>
              <h1>{winner ? winnerStatement : "It's Draw"}</h1>
            </div>
            <div>
              <div>{resultImg}</div>
            </div>
            <div className={style.button}>
              <button className={style.secondaryButton} onClick={onQuit}>
                Quit
              </button>
              <button className={style.primaryButton} onClick={handleRestart}>
                Play Again
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
