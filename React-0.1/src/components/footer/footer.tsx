import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>TechBlog</h4>
          <p>Your source for tech insights and tutorials.</p>
        </div>
        <div className="footer-section">
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
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-links">
            <span>Follow us on social media</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 TechBlog. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
