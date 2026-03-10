import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Folachadé Alex CAPO-CHICHI | Ingénieur Logiciel",
  description: "Portfolio professionnel de Folachadé Alex CAPO-CHICHI - Ingénieur Logiciel Fullstack & IA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
