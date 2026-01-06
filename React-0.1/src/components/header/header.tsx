import styles from "./header.module.scss";
import { DropDown } from "../dropDown/dropDown";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1>TechBlog</h1>
        <p className={styles.tagline}>Exploring the world of technology and innovation</p>
      </div>
      <DropDown />
    </header>
  );
}

export { Header };
