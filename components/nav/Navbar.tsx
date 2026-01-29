"use client";

import Image from "next/image";
import styles from "./Navbar.module.scss";
import Input from "../shared/Input";
import Link from "next/link";
import { useUiStore } from "@/store/uiStore";

const Navbar = () => {
  const toggleSidebar = useUiStore((state) => state.toggleSideBar);
  const isOpen = useUiStore((state) => state.isSideBarOpen);

  return (
    <header className={styles.header}>
      {/* Top navbar */}
      <nav className={styles.nav}>
        {/* Lendsqr logo */}
        <div className={styles.logo}>
          <Image
            src={"/images/logo.png"}
            alt="Lendsqr Logo"
            width={144.4}
            height={30}
          />
        </div>
        {/* Input component  */}
        <Input />

        {/* Right side of the top nav */}
        <div className={styles.rightBox}>
          <Link href={"/"} className={styles.link}>
            Docs
          </Link>
          <img src="/icons/bell.png" alt="" className={styles.icon} />

          {/* User image and name box */}
          <div className={styles.userBox}>
            <Image
              src={"/images/avatar.png"}
              alt="user profile image"
              width={30}
              height={30}
              className={styles.avatar}
            />
            <h2>Adedeji</h2>
            <img src="/icons/dropdown.png" alt="" className="" />
            {isOpen ? (
              <img
                src="/icons/cancel.svg"
                alt=""
                className={styles.hamburger}
                onClick={toggleSidebar}
              />
            ) : (
              <img
                src="/icons/nav.png"
                alt=""
                className={styles.hamburger}
                onClick={toggleSidebar}
              />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
