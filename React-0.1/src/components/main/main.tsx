import "./main.css";

function Main() {
  return (
    <main className="main-content">
      <section className="hero">
        <h2>Welcome to Our Tech Space</h2>
        <p>Discover the latest trends in web development, AI, and digital innovation.</p>
      </section>

      <section className="articles">
        <div className="article-grid">
          <article className="article-card">
            <h3>The Future of React Development</h3>
            <p>React continues to evolve with new features and improved performance. Learn about the latest updates and how they can improve your development workflow.</p>
            <span className="read-time">5 min read</span>
          </article>

          <article className="article-card">
            <h3>CSS Grid vs Flexbox</h3>
            <p>Understanding when to use CSS Grid versus Flexbox can make your layouts more efficient and maintainable. Here's a practical comparison.</p>
            <span className="read-time">3 min read</span>
          </article>

          <article className="article-card">
            <h3>JavaScript ES2024 Features</h3>
            <p>The latest JavaScript features are here! From new array methods to improved async operations, discover what's new in the language.</p>
            <span className="read-time">7 min read</span>
          </article>
        </div>
      </section>

      <section className="newsletter">
        <h3>Stay Updated</h3>
        <p>Get the latest tech insights delivered to your inbox.</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </section>
    </main>
  );
}

export default Main;
