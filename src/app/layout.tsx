import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Header from "./components/header";
const notojp = Noto_Sans_JP({
  weight: ["300", "400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "About yumazak",
  description: "yumazak's Portfolio site",
};

export const runtime = "edge"; // 'nodejs' (default) | 'edge'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={notojp.className}>
          <Header />
          {children}
        </body>
      </html>
    </>
  );
}
