import type { Metadata } from "next";
import { Cherry_Bomb_One } from "next/font/google";
import "./globals.css";

const cherryBomb = Cherry_Bomb_One({
  variable: "--font-cherry-bomb",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "My 3D Playground",
  description: "A playground for 3D experiments and creations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cherryBomb.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
