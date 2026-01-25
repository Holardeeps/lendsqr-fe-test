import styles from "./layout.module.scss";
import Navbar from "@/components/nav/Navbar";
import SideBar from "@/components/sidebar/SideBar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* Navbar component shared between this route group */}
      <Navbar />
      <main className={styles.home}>
        {/* Sidebar for the dashboard */}
        <SideBar />
        {children}
      </main>
    </div>
  );
}
