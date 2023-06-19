import styles from "./Intro.module.css";

function Intro() {
  return (
    <header>
      <div className={`illustration ${styles["illustration"]}`}>
        <img
          className={`hero-img ${styles["hero-img"]}`}
          src="/illustration-hero.svg"
          alt="illustration hero image"
        />
        <div className={`blue-thing ${styles["blue-thing"]}`}></div>
      </div>
      <div className={styles["intro-content"]}>
        <h1 className={styles["intro-heading"]}>A Simple Bookmark Manager</h1>
        <p className={styles["intro-txt"]}>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div>
          <button className={`${styles.btn} ${styles["btn-1"]} `}> Get it on Chrome</button>
          <button className={`${styles.btn} ${styles["btn-2"]}`}>Get it on Firefox</button>
        </div>
      </div>
    </header>
  );
}

export default Intro;
