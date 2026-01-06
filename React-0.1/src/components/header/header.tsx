import styles from "./header.module.scss";
import { NavBar } from "../navBar/navBar";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1>TechBlog</h1>
        <p className={styles.tagline}>Exploring the world of technology and innovation</p>
      </div>
      <NavBar />
    </header>
  );
}

export { Header };
