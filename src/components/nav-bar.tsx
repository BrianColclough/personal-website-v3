import styles from "./nav-bar.module.css";

export const NavBar = () => {
  return (
    <nav class={styles["nav-bar"]}>
      <div class={styles["nav-bar-wrapper"]}>
        <span class={styles.navTitle}>Brian Colclough</span>
        <ul class={styles["nav-bar-list"]}>
          <li class={styles["nav-bar-item"]}>
            <a href="/">Home</a>
          </li>
          <li class={styles["nav-bar-item"]}>
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
