import type { Metadata } from "next";
import "./globals.scss";
import { montserrat, workSans } from "./fonts";

export const metadata: Metadata = {
  title: "Lendsqr",
  description: "Loan Management Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
