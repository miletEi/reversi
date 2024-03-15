import style from "../assets/styles/Modal.module.css";

export default function LoadModel() {
  return (
    <div className={style.modal}>
      <div className={style.content}>
        <div className={style.header}>
          <h1>Enter Game ID</h1>
          <p>Please Enter your unique Game ID</p>
        </div>

        <form>
          <div className={style.field}>
            <label htmlFor="gameID">Game ID</label>
            <input
              name="gameID"
              type="text"
              placeholder="(minimum 5 character)"
            />
          </div>
          <div className={style.field}>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="(minimum 8 character)"
            />
          </div>
        </form>

        <span>success message/error message</span>
        <div className={style.button}>
          <button className={style.secondaryButton}>Cancel</button>
          <button className={style.primaryButton}>Load</button>
        </div>
      </div>
    </div>
  );
}
