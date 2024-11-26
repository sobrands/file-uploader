import styles from "./Login.module.css";

import { Link } from "react-router-dom";

function Login() {
  return (
    <div className={styles.loginBody}>
      <div className={styles.loginContainer}>
        <h1>Log In</h1>
        <p>
          Don&apos;t have an account? Sign up <Link to="/sign-up">here</Link>.
        </p>
        <form>
          <div className={styles.formInput}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formInput}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
