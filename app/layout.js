import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CrispChat from "../components/CrispChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Solar Energy Solutions | Your Trusted Solar Provider',
  description: 'Discover reliable solar panels, inverters, batteries, and EV chargers. Reduce your energy bills and carbon footprint today.',
  openGraph: {
    title: 'Solar Energy Solutions | Your Trusted Solar Provider',
    description: 'Reliable solar energy solutions for homes and businesses.',
    url: 'https://www.yourwebsite.com',
    siteName: 'Solar Energy Solutions',
    images: [
      {
        url: '/solar-home.png',
        width: 1200,
        height: 630,
        alt: 'Solar Energy Solutions',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CrispChat />
        {children}
      </body>
    </html>
  );
}
