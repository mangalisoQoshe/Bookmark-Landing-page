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
          <li className={styles["navList-item"]}>FEATURES</li>
          <li className={styles["navList-item"]}>PRICINGS</li>
          <li className={styles["navList-item"]}>CONTACT</li>
        </ul>
        <button className={styles["navList-btn"]}>LOGIN</button>
        <div className={styles.socials}>
            <button><img src="./icon-facebook.svg" alt="facebook icon" /></button>
            <button><img src="./icon-twitter.svg" alt="twitter icon" /></button>
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
