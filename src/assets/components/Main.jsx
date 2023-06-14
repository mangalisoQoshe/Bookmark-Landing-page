import Extension from "./Extension";
import styles from "./Main.module.css";

function Main() {
  return (
    <main>
      <section className={styles.featues}>
        <h2>Features</h2>
        <p className={styles["features-p"]}>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </section>
      <section>
        <h1>Courasel thing</h1>
      </section>
      <section className={styles.download}>
        <h2>Download the extention</h2>
        <p>
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
        <Extension name="Chrome" />
        <Extension name="Firefox" />
        <Extension name="Opera" />
      </section>
      <section className={styles.questions}>
        <h2>Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
        <div className={styles["question-answe"]}>
          <h3>
            What is Bookmark?
            <span>
              <img src="/icon-arrow.svg" alt="arrow icon" />
            </span>
          </h3>
          <p className={styles.answer}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </p>
        </div>
        <div className={styles["question-answe"]}>
          <h3>
            How can I request a new browser?
            <span>
              <img src="/icon-arrow.svg" alt="arrow icon" />
            </span>
          </h3>
          <p className={styles.answer}>
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </p>
        </div>
        <div className={styles["question-answe"]}>
          <h3>
            Is there a mobile app?
            <span>
              <img src="/icon-arrow.svg" alt="arrow icon" />
            </span>
          </h3>
          <p className={styles.answer}>
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </p>
        </div>
        <div className={styles["question-answe"]}>
          <h3>
            What about other Chromium browsers?
            <span>
              <img src="/icon-arrow.svg" alt="arrow icon" />
            </span>
          </h3>
          <p className={styles.answer}>
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
            mi, at euismod dui. Aliquam vitae neque eget nisl gravida
            pellentesque non ut velit.
          </p>
        </div>
      </section>
      <button>More Info</button>
    </main>
  );
}

export default Main;
