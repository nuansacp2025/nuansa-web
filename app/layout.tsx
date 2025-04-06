import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Link from "next/link";
import Footer from "./components/footer";
import ScrollToTopButton from "@/app/components/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nuansa 2025: The Crying Stone",
  description: "Buy the tickets now!",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
