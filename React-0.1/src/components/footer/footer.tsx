import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>TechBlog</h4>
          <p>Your source for tech insights and tutorials.</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms of Service</a>
            </li>
            <li>
              <a href="#sitemap">Sitemap</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Connect</h4>
          <div className={styles.socialLinks}>
            <span>Follow us on social media</span>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2026 TechBlog. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
