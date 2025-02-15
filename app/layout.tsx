import { Inter } from "next/font/google";
import { Metadata } from "next/types";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "./bootstrap.scss";

// Disable FontAwesome CSS auto-injection.
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
