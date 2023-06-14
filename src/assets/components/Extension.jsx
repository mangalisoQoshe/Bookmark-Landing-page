import styles from "./Extension.module.css";

function Extension({ name }) {
  let value;

  switch (name) {
    case "Chrome":
      value = (
        <div>
          <img src="/logo-chrome.svg" alt="chrome img" />
          <p className={styles.version}>Minimum version 62</p>
          <img src="/bg-dots.svg" alt="dots img" />
          <button>Add & install Extension</button>
        </div>
      );
      break;

    case "Firefox":
      value = (
        <div>
          <img src="/logo-firefox.svg" alt="firefox img" />
          <p className={styles.version}>Minimum version 55</p>
          <img src="/bg-dots.svg" alt="dots img" />
          <button>Add & install Extension</button>
        </div>
      );
      break;

    case "Opera":
      value = (
        <div>
          <img src="/logo-opera.svg" alt="opera img" />
          <p className={styles.version}>Minimum version 46</p>
          <img src="/bg-dots.svg" alt="dots img" />
          <button>Add & install Extension</button>
        </div>
      );
      break;
  }
  return value;
}

export default Extension;
