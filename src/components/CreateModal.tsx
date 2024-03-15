import style from "../assets/styles/Modal.module.css";

export default function CreateModel() {
  return (
    <div className={style.modal}>
      <div className={style.content}>
        <div className={style.header}>
          <h1>Create Account</h1>
          <p>Before starting the game, please create your account</p>
        </div>

        <form>
          <div className={style.name}>
            <div className={style.field}>
              <label htmlFor="firstName">First Name</label>
              <input name="firstName" type="text" placeholder="First Name" />
            </div>
            <div className={style.field}>
              <label htmlFor="lastName">Last Name</label>
              <input name="lastName" type="text" placeholder="Last Name" />
            </div>
          </div>
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
          <div className={style.field}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="(retype your password)"
            />
          </div>
        </form>

        <span>success message/error message</span>
        <div className={style.button}>
          <button className={style.secondaryButton}>Cancel</button>
          <button className={style.primaryButton}>Create</button>
        </div>
      </div>
    </div>
  );
}
