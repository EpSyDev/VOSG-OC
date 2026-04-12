import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VOSG'OC - Électricité & Climatisation",
  description: "L'expertise vosgienne au service de l'Occitanie",
  // FORÇAGE DU FAVICON ICI
  icons: {
    icon: [
      {
        url: "/blason.png?v=4", // Le ?v=4 force le rafraîchissement chez Vercel/Chrome
        href: "/blason.png?v=4",
      },
    ],
    shortcut: ["/blason.png?v=4"],
    apple: [
      {
        url: "/blason.png?v=4",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr"> {/* Changé en "fr" pour le SEO local de ton pote ;) */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
