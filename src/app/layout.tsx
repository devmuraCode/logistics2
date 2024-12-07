import Navbar from "@/components/Navbar/Navbar";
import "./globals.scss";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

const font = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Logistics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
