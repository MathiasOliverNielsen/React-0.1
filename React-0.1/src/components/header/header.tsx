import "./header.css";
import NavBar from "../navBar/navBar";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>TechBlog</h1>
        <p className="tagline">Exploring the world of technology and innovation</p>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
