import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Filip Koudelníček | Web Developer",
  description: "Web Developer specializující se na moderní webové aplikace, WordPress a Laravel. 5 let zkušeností s vývojem webů.",
  icons: {
    icon: "/images/Logo.png",
    shortcut: "/images/Logo.png",
    apple: "/images/Logo.png",
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: "Filip Koudelníček | Web Developer",
    description: "Web Developer specializující se na moderní webové aplikace, WordPress a Laravel.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

