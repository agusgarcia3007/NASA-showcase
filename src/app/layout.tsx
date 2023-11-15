import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const faviconData = {
  icon: [
    { url: "/favicon/favicon.ico", sizes: "any", type: "image/x-icon" },
    { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
  ],
  apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  other: [
    {
      rel: "mask-icon",
      url: "/favicon/safari-pinned-tab.svg",
      color: "#5bbad5",
    },
  ],
};

export const metadata: Metadata = {
  title: "NASA showcase",
  description: "NASA showcase with next 14",
  icons: faviconData,
  manifest: "/favicon/site.webmanifest",
  other: {
    "msapplication-TileColor": "#ffc40d",
    "msapplication-config": "/favicon/browserconfig.xml",
    "theme-color": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(poppins.className, "bg-primary")}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
