import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Şamil Polat | Senior E-Commerce Manager & Full-Stack Developer",
  description:
    "Optimizing ROAS by day, coding pixel-perfect React apps by night. Expert in Technical SEO, Next.js, and E-commerce Strategy.",
  keywords: [
    "Şamil Polat",
    "E-Commerce Manager",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "SEO",
    "Digital Marketing",
  ],
  authors: [{ name: "Şamil Polat" }],
  openGraph: {
    title: "Şamil Polat | Senior E-Commerce Manager & Full-Stack Developer",
    description:
      "Optimizing ROAS by day, coding pixel-perfect React apps by night.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased`}
        style={{
          background: '#0a0a0a',
          color: '#ededed',
          minHeight: '100vh'
        }}
        suppressHydrationWarning
      >
        <div className="noise-overlay grid-pattern min-h-screen">{children}</div>
      </body>
    </html>
  );
}
