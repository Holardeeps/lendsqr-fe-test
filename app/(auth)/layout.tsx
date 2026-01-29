import Image from "next/image";
import styles from "./layout.module.scss";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={styles.layout}>
      <section className={styles.leftSide}>
        <div className="">
          <Image
            src={"/images/logo.png"}
            width={174}
            height={36}
            alt="lendsqr logo"
            className=""
          />
          <Image
            src={"/images/auth-banner.png"}
            width={600}
            height={338}
            alt="auth banner image"
            className=""
          />
        </div>
      </section>
      {children}
    </main>
  );
}
