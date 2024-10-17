import { GeistSans } from "geist/font/sans";
import "@/styles/globals.css";

import { Metadata, Viewport } from "next";
import { cn } from "@/lib/utils";

const title = "Synth UI";
const description = "Generative User Interfaces for the Web";

export const metadata: Metadata = {
  metadataBase: new URL("https://interiorly.dev"),
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "@julian-at",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-normal antialiased", GeistSans.className)}>
        {children}
      </body>
    </html>
  );
}
