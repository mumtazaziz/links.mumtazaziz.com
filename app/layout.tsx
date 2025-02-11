import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Disable FontAwesome CSS auto-injection.
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mumtaz Aziz's Links",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className="h-100">
      <body className={`${inter.className} d-flex flex-column h-100`}>
        {children}
      </body>
    </html>
  );
}
