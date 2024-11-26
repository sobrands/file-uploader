import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.navbarLogo}>
          FileUploader
        </Link>
        <div className={styles.navLinks}>
          <Link to="/log-in" className={styles.navLink}>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
