"use client";

import Link from "next/link";
import styles from "./SideBar.module.scss";
import { sideBarContent } from "@/constants";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const SideBar = () => {
  const router = useRouter();
  // Simulating logOut
  const logout = () => {
    setTimeout(() => {
      router.push("/sign-in");
    }, 3000);
  };

  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.divider}>
        <div className={styles.logo}>
          <img src="/icons/briefcase.png" alt="briefcase" />
          <h2>Switch Organization</h2>
          <img src="/icons/arrow-down1.png" alt="arrow-down" />
        </div>

        <div className={styles.dashboard}>
          <img src="/icons/home.png" alt="home" />
          <Link href={"/"}>
            <h2>Dashboard</h2>
          </Link>
        </div>

        <section className={styles.sideLinks}>
          <div>
            <h2>Customers</h2>

            <ul>
              {sideBarContent.customers.map((item) => {
                const isActive =
                  pathname === item.href || pathname.startsWith(item.href);

                return (
                  <Link
                    href={item.href}
                    key={item.text}
                    className={`${styles.link} ${isActive ? styles.active : ""}`}
                  >
                    {/* <img src={item.icon} alt={item.text} /> */}
                    <Image
                      src={item.icon}
                      width={12}
                      height={12}
                      alt={item.text}
                      className={styles.image}
                    />
                    <p>{item.text}</p>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div>
            <h2>Businesses</h2>

            <ul>
              {sideBarContent.businesses.map((item) => (
                <Link href={item.href} key={item.text} className={styles.link}>
                  {/* <img src={item.icon} alt={item.text} /> */}
                  <Image
                    src={item.icon}
                    width={12}
                    height={12}
                    alt={item.text}
                    className={styles.image}
                  />
                  <p>{item.text}</p>
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <h2>Settings</h2>

            <ul>
              {sideBarContent.settings.map((item) => (
                <Link href={item.href} key={item.text} className={styles.link}>
                  {/* <img src={item.icon} alt={item.text} /> */}
                  <Image
                    src={item.icon}
                    width={12}
                    height={12}
                    alt={item.text}
                    className={styles.image}
                  />
                  <p>{item.text}</p>
                </Link>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <div className={styles.logout}>
        <div className="" onClick={logout}>
          <img src="/icons/sign-out.png" alt="sign-out" />
          <h2>Logout</h2>
        </div>
        <p>holardeeps v1.2.1</p>
      </div>
    </aside>
  );
};

export default SideBar;
