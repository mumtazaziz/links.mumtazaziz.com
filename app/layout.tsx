import { Inter } from "next/font/google";
import { Metadata } from "next/types";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "./globals.css";

// Disable FontAwesome CSS auto-injection.
config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mumtaz Aziz's Links",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="text-neutral-800 dark:bg-black dark:text-neutral-300">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
