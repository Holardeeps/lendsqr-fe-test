import Image from "next/image";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className="">
      <section className="">
        <div className="">
          <Image
            src={"/images/logo.png"}
            alt="Lendsqr Logo"
            width={144.4}
            height={30}
          />
        </div>
        <div className=""></div>
        <div className=""></div>
      </section>
    </nav>
  );
};

export default Navbar;
