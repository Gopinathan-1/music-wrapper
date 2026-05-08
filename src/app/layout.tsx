import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/echodna/SmoothScroll";
import { Providers } from "@/components/Providers";

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
});

const clashDisplay = localFont({
  src: "./fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EchoDNA | Your Sonic Identity",
  description: "Discover your musical personality through advanced Spotify data analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${clashDisplay.variable} font-body bg-background text-on-surface antialiased`}>
        <Providers>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
