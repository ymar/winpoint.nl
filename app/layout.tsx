import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Winpoint - Deal Recovery & Sales Improvement",
  description: "Helping sales teams recover lost deals and maximize revenue potential through systematic analysis and strategic re-engagement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lexend.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
