import styles from "./Extension.module.css";

function Extension({ name }) {
  let value;

  switch (name) {
    case "Chrome":
      value = (
        <div className={styles.card}>
          <img src="/logo-chrome.svg" alt="chrome img" className={styles.brand} />
          <h3 className={styles.heading}>Add to Chrome</h3>
          <p className={styles.version}>Minimum version 62</p>
          <img src="/bg-dots.svg" alt="dots img" className={styles.dots} />
          <button className={styles.btn}>Add & install Extension</button>
        </div>
      );
      break;

    case "Firefox":
      value = (
        <div className={styles.card}>
          <img src="/logo-firefox.svg" alt="firefox img" className={styles.brand}/>
          <h3 className={styles.heading}>Add to Firefox</h3>
          <p className={styles.version}>Minimum version 55</p>
          <img src="/bg-dots.svg" alt="dots img" className={styles.dots}/>
          <button className={styles.btn}>Add & install Extension</button>
        </div>
      );
      break;

    case "Opera":
      value = (
        <div className={styles.card}>
          <img src="/logo-opera.svg" alt="opera img" className={styles.brand}/>
          <h3 className={styles.heading}>Add to Opera</h3>
          <p className={styles.version}>Minimum version 46</p>
          <img src="/bg-dots.svg" alt="dots img" className={styles.dots} />
          <button className={styles.btn}>Add & install Extension</button>
        </div>
      );
      break;
  }
  return value;
}

export default Extension;
