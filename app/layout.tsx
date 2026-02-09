import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vinay Surwase | Portfolio",
  description: "Computer Science Engineering Student passionate about building elegant solutions through code.",
  keywords: ["Vinay Surwase", "Portfolio", "Computer Science", "Software Engineer", "Developer"],
  authors: [{ name: "Vinay Surwase" }],
  openGraph: {
    type: "website",
    title: "Vinay Surwase | Portfolio",
    description: "Computer Science Engineering Student passionate about building elegant solutions through code.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
