import Navbar from "@/components/Navbar/Navbar";
import "./globals.scss";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Logistics",
};

export default async function RootLayout({
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
