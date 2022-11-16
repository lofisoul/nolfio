import styles from "./index.module.scss";

export function Footer() {
  function getYear() {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  }
  return (
    <footer className={styles.footer}>
      © {getYear()} <span>Jason Nolfi</span>
    </footer>
  );
}
