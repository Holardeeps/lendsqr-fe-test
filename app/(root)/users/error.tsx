"use client";

import Link from "next/link";
import { useEffect } from "react";
import styles from "./page.module.scss";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Users page error:", error);
  }, [error]);

  return (
    <div className={styles.error}>
      <h2>Something went wrong...</h2>

      <p>Error loading the users list right now.</p>

      <div className={styles.action}>
        <button>Retry</button>
        <Link href={"/"} className={styles.link}>
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
