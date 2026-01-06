import styles from "./main.module.scss";

function Main() {
  return (
    <main className={styles.mainContent}>
      <section className={styles.hero}>
        <h2>Welcome to Our Tech Space</h2>
        <p>Discover the latest trends in web development, AI, and digital innovation.</p>
      </section>

      <section className={styles.articles}>
        <div className={styles.articleGrid}>
          <article className={styles.articleCard}>
            <h3>The Future of React Development</h3>
            <p>React continues to evolve with new features and improved performance. Learn about the latest updates and how they can improve your development workflow.</p>
            <span className={styles.readTime}>5 min read</span>
          </article>

          <article className={styles.articleCard}>
            <h3>CSS Grid vs Flexbox</h3>
            <p>Understanding when to use CSS Grid versus Flexbox can make your layouts more efficient and maintainable. Here's a practical comparison.</p>
            <span className={styles.readTime}>3 min read</span>
          </article>

          <article className={styles.articleCard}>
            <h3>JavaScript ES2024 Features</h3>
            <p>The latest JavaScript features are here! From new array methods to improved async operations, discover what's new in the language.</p>
            <span className={styles.readTime}>7 min read</span>
          </article>
        </div>
      </section>

      <section className={styles.newsletter}>
        <h3>Stay Updated</h3>
        <p>Get the latest tech insights delivered to your inbox.</p>
        <div className={styles.newsletterForm}>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </section>
    </main>
  );
}

export { Main };
