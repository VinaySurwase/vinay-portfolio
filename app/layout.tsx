import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../app/provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vinay Surwase - Futuristic Portfolio",
  description: "Explore a immersive portfolio featuring cutting-edge web development, AI/ML projects, and futuristic design. Experience the future of digital portfolios.",
  keywords: "Vinay Surwase, Portfolio, Full Stack Developer, React, Next.js, AI/ML, Futuristic Design, Web Development",
  authors: [{ name: "Vinay Surwase" }],
  creator: "Vinay Surwase",
  openGraph: {
    title: "Vinay Surwase - Futuristic Portfolio",
    description: "Step into a digital realm where code meets creativity. Discover innovative projects and immersive experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
