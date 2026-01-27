import type { Metadata } from "next";
import { Grandiflora_One } from "next/font/google";
import "./globals.css";

const grandiflora = Grandiflora_One({
  variable: "--font-grandiflora",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "블렌더 컬렉션",
  description: "A playground for 3D experiments and creations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${grandiflora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
