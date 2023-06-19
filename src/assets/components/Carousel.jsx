import styles from "./Carousel.module.css";

function Carousel({ active }) {
  let content;
  switch (active) {
    case "bookmarking":
      content = (
        <div className={styles.content}>
          <p className={`${styles.option}`}>
            <span className={styles.active}>Simple Bookmarking</span>
          </p>

          <p className={styles.option}>Speedy Searching</p>
          <p className={styles.option}>Easy Sharing</p>
          <div className={styles["content-2"]}>
            <div className={`illustration ${styles["illustration"]}`}>
              <img
                className={`hero-img ${styles["hero-img"]}`}
                src="/illustration-features-tab-1.svg"
                alt="illustration hero image"
              />
              <div className={`blue-thing ${styles["blue-thing"]}`}></div>
            </div>
            <h2>Bookmark in one click</h2>
            <p className={styles["bookmark-p"]}>
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
            <button className={styles["more-info"]}>More Info</button>
          </div>
        </div>
      );

      break;

    case "searching":
      content = (
        <div className={styles.content}>
          <p className={styles.option}>Simple Bookmarking</p>
          <p className={styles.option}>
            <span className={styles.active}> Speedy Searching</span>
          </p>
          <p className={styles.option}>Easy Sharing</p>
          <div className={styles["content-two"]}>
            <div className={`illustration ${styles["illustration"]}`}>
              <img
                className={`hero-img ${styles["hero-img"]}`}
                src="/illustration-features-tab-2.svg"
                alt="illustration hero image"
              />
              <div className={`blue-thing ${styles["blue-thing"]}`}></div>
            </div>
            <h2>Intelligent search</h2>
            <p className={styles["bookmark-p"]}>
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
            <button className={styles["more-info"]}>More Info</button>
          </div>
        </div>
      );

      break;

    case "sharing":
      content = (
        <div className={styles.content}>
          <p className={styles.option}>Simple Bookmarking</p>

          <p className={styles.option}>Speedy Searching</p>
          <p className={styles.option}>
            <span className={styles.active}>Easy Sharing</span>
          </p>
          <div className={styles["content-2"]}>
            <div className={`illustration ${styles["illustration"]}`}>
              <img
                className={`hero-img ${styles["hero-img"]}`}
                src="/illustration-features-tab-3.svg"
                alt="illustration hero image"
              />
              <div className={`blue-thing ${styles["blue-thing"]}`}></div>
            </div>
            <h2>Share your bookmarks</h2>
            <p className={styles["bookmark-p"]}>
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </p>
            <button className={styles["more-info"]}>More Info</button>
          </div>
        </div>
      );

      break;

    default:
      break;
  }

  return <>{content}</>;
}

export default Carousel;
