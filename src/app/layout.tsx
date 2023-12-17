import "./globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Header from "./components/header";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "About yumazak",
  description: "yumazak's Portfolio site",
};

// export const runtime = "edge"; // 'nodejs' (default) | 'edge'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={fontSans.className}>
          <Header />
          {children}
        </body>
      </html>
    </>
  );
}
