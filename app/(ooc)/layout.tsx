import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ooc.css"
import Menu from "../components/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shelters of Europe",
  description: "Deutsches Cyberpunk-Rollenspiel mit Charme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " overflow-hidden"}>
        <div className="w-[100%] h-[100%]">
          <Menu />
          {children}
        </div>
      </body>
    </html>
  );
}
