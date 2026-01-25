import Navbar from "@/components/nav/Navbar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* Navbar component shared between this route group */}
      <Navbar />
      {children}
    </div>
  );
}
