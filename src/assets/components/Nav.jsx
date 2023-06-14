import styles from "./Nav.module.css";
import { useState } from "react";

function Nav() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <nav className={styles["primary-nav"]}>
      <img
        className={styles.logo}
        src="/logo-bookmark.svg"
        alt="bookmark logo"
      />
      <div className={`${styles.ulxbtn} ${isActive ? styles.active : ""}`}>
        <ul className={styles["nav-list"]}>
          <li className={styles["navList-link"]}>
            <a className={styles["navList-item"]} href="">
              FEATURES
            </a>
          </li>
          <li className={styles["navList-link"]}>
            <a className={styles["navList-item"]} href="">
              PRICINGS
            </a>
          </li>
          <li className={styles["navList-link"]}>
            <a className={styles["navList-item"]} href="">
              CONTACT
            </a>
          </li>
        </ul>
        <button role="login-btn" className={styles["navList-btn"]}>
          LOGIN
        </button>
        <div className={styles.socials}>
          <a href="">
            <img src="./icon-facebook.svg" alt="facebook icon" />
          </a>
          <a href="">
            <img src="./icon-twitter.svg" alt="twitter icon" />
          </a>
        </div>
      </div>

      <div
        role="hamburger"
        className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
        onClick={handleClick}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </nav>
  );
}

export default Nav;
