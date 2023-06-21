import { useState } from "react";
import Carousel from "./Carousel";
import Extension from "./Extension";
import styles from "./Main.module.css";

function Main() {
  const [active, setActive] = useState(0);

  const handleClick = (num) => {
    if (active == num) {
      setActive(0);
      return;
    }
    setActive(num);
  };
  return (
    <main>
      <section className={styles.features}>
        <h2>Features</h2>
        <p className={styles["features-p"]}>
          Our aim is to make it quick and easy for you to access your <br />{" "}
          favourite websites. Your bookmarks sync between your devices
          <br /> so you can access them on the go.
        </p>
      </section>
      <section>
        <Carousel />
      </section>
      <section className={styles.downloads}>
        <h2 className={styles["downloads-heading"]}>Download the extention</h2>
        <p>
          We{`'`}ve got more browsers in the pipeline. Please do let us know if
          you{`'`}ve got a favourite you{`'`}d like us to prioritize.
        </p>
        <Extension />
      </section>
      <section className={styles.questions}>
        <h2 className={styles["questions-heading"]}>
          Frequently Asked Questions
        </h2>
        <p className={styles["questions-p"]}>
          Here are some of our FAQs. If you have any other questions you{`'`}d
          like answered please feel free to email us.
        </p>
        <div
          className={styles["question-answer"]}
          onClick={() => {
            handleClick(1);
          }}
        >
          <div className={styles.question}>
            <h3 className={styles.q}>What is Bookmark?</h3>
            <span
              className={active == 1 ? styles["arrow-active"] : styles.arrow}
            >
              <img
                src="/icon-arrow.svg"
                alt="arrow icon"
                className={
                  active == 1 ? styles["arrow-img-active"] : styles.arrow
                }
              />
            </span>
          </div>
          <p className={active == 1 ? styles["answer-active"] : styles.answer}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </p>
        </div>
        <div
          className={styles["question-answer"]}
          onClick={() => {
            handleClick(2);
          }}
        >
          <div className={styles.question}>
            <h3 className={styles.q}>How can I request a new browser?</h3>
            <span
              className={active == 2 ? styles["arrow-active"] : styles.arrow}
            >
              <img
                src="/icon-arrow.svg"
                alt="arrow icon"
                className={
                  active == 2 ? styles["arrow-img-active"] : styles.arrow
                }
              />
            </span>
          </div>
          <p className={active == 2 ? styles["answer-active"] : styles.answer}>
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </p>
        </div>
        <div
          className={styles["question-answer"]}
          onClick={() => {
            handleClick(3);
          }}
        >
          <div className={styles.question}>
            <h3 className={styles.q}>Is there a mobile app?</h3>
            <span
              className={active == 3 ? styles["arrow-active"] : styles.arrow}
            >
              <img
                src="/icon-arrow.svg"
                alt="arrow icon"
                className={
                  active == 3 ? styles["arrow-img-active"] : styles.arrow
                }
              />
            </span>
          </div>
          <p className={active == 3 ? styles["answer-active"] : styles.answer}>
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </p>
        </div>
        <div
          className={styles["question-answer"]}
          onClick={() => {
            handleClick(4);
          }}
        >
          <div className={styles.question}>
            <h3 className={styles.q}>What about other Chromium browsers?</h3>
            <span
              className={active == 4 ? styles["arrow-active"] : styles.arrow}
            >
              <img
                src="/icon-arrow.svg"
                alt="arrow icon"
                className={
                  active == 4 ? styles["arrow-img-active"] : styles.arrow
                }
              />
            </span>
          </div>
          <p className={active == 4 ? styles["answer-active"] : styles.answer}>
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
            mi, at euismod dui. Aliquam vitae neque eget nisl gravida
            pellentesque non ut velit.
          </p>
        </div>
      </section>
      <div className={styles["btn-container"]}>
        <button className={styles.btn}>More Info</button>
      </div>
    </main>
  );
}

export default Main;
