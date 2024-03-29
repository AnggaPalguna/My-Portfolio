import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: " ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body className={`${inter.className } dark:bg-black `}>
        {children}</body>
    </html>
  );
}
