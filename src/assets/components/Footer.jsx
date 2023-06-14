import styles from "./Footer.module.css";
import Nav from "./Nav";

function Footer() {
  return (
    <footer>
      <section className={styles["contact-us"]}>
        <h6> 35,000+ already joined</h6>
        <h3>Stay up-to-date with what we're doing</h3>
        <form>
          <input type="email" placeholder="example@gmail/com" required />
          <button>Contact Us</button>
        </form>
      </section>
      <section className={styles["secondary-nav"]}>
        <img src="/logo-bookmark.svg" alt="logo" />
        <ul>
          <li>
            <a href="">FEATURES</a>
          </li>
          <li>
            <a href="">PRICING</a>
          </li>
          <li>
            <a href="">CONTACT</a>
          </li>
        </ul>
        <div className={styles.socials}>
        <a>
            <img src="./icon-facebook.svg" alt="facebook icon" />
          </a>
          <a>
            <img src="./icon-twitter.svg" alt="twitter icon" />
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
