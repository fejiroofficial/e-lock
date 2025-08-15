import { Geist, Instrument_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

export const metadata = {
  title: "eLock —– Next.js Template",
  description: "Designed and developed by DesignOrah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${instrumentSans.variable} ${geistSans.className}`}
      >
        {children}
      </body>
    </html>
  );
}
