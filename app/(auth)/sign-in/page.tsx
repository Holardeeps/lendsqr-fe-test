"use client";

import { useState } from "react";
import styles from "./page.module.scss";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    router.push("/");
  };

  return (
    <section className={styles.signIn}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1 className="">Welcome!</h1>
          <h2 className="">Enter details to login.</h2>
        </div>
        <div className={styles.form}>
          <div className="">
            <input type="text" placeholder="Email" />
          </div>
          <div className="">
            <input type={show ? "text" : "password"} placeholder="Password" />
            <button onClick={() => setShow(!show)}>show</button>
          </div>

          <h2 className={styles.forgotPassword}>forgot password?</h2>

          <button
            className={styles.login}
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "logging in..." : "log in"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
