import styles from "./page.module.scss";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <img
        src="/images/lendsqr.png"
        alt="lendsqr logo"
        className={styles.loadingLogo}
      />
      <p>Please wait while loading users...</p>
    </div>
  );
}
