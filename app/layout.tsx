import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Vinay Surwase | Portfolio",
  description: "Computer Science Engineering Student passionate about building elegant solutions through code.",
  keywords: ["Vinay Surwase", "Portfolio", "Computer Science", "Software Engineer", "Developer"],
  authors: [{ name: "Vinay Surwase" }],
  metadataBase: new URL("https://vinay-portfolio-six.vercel.app"),
  openGraph: {
    type: "website",
    title: "Vinay Surwase | Portfolio",
    description: "Computer Science Engineering Student passionate about building elegant solutions through code.",
    siteName: "Vinay Surwase Portfolio",
    url: "https://vinay-portfolio-six.vercel.app",
    images: [
      {
        url: "/profile/profile_picture.jpeg",
        width: 800,
        height: 800,
        alt: "Vinay Surwase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinay Surwase | Portfolio",
    description: "Computer Science Engineering Student passionate about building elegant solutions through code.",
    images: ["/profile/profile_picture.jpeg"],
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
