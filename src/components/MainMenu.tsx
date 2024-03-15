import style from "../assets/styles/MainMenu.module.css";
interface MainMenuProps {
  startGame: () => void;
}

export default function MainMenu({ startGame }: MainMenuProps) {
  return (
    <>
      <div className={style.mainMenu}>
        <h1 className={style.title}>REVERSI</h1>
        <span className={style.opt} onClick={startGame}>
          Start Game
        </span>
      </div>
    </>
  );
}
