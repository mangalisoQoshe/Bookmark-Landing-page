import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <section className={styles["contact-us"]}>
        <h5 className={styles["contact-heading"]}> 35,000+ ALREADY JOINED</h5>
        <h2 className={styles["contact_second-heading"]}>
          Stay up-to-date with what we{`'`}re are doing
        </h2>
        <form className={styles.form}>
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className={styles["form-input"]}
          />
          <button className={styles.btn}>Contact Us</button>
        </form>
      </section>
      <section className={styles["secondary-nav"]}>
        <div className={styles["secondary-logo"]}></div>
       
          <ul className={styles.links} role="list">
            <li>
              <a href="" className={styles.link}>
                FEATURES
              </a>
            </li>
            <li>
              <a href="" className={styles.link}>
                PRICING
              </a>
            </li>
            <li>
              <a href="" className={styles.link}>
                CONTACT
              </a>
            </li>
          </ul>
 
        <div className={styles.socials}>
          <a href="">
            <img src="./icon-facebook.svg" alt="facebook icon" />
          </a>
          <a href="">
            <img src="./icon-twitter.svg" alt="twitter icon" />
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
