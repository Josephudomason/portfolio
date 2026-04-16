import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joseph Udomason | Frontend Developer",
  description:
    "Frontend Developer in Lagos building accessible, responsive web apps with Next.js, React, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${bodyFont.variable} ${displayFont.variable} h-full scroll-smooth`}
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => {
            try {
              const stored = localStorage.getItem("theme");
              const theme = stored === "light" || stored === "dark" ? stored : "dark";
              document.documentElement.dataset.theme = theme;
            } catch (error) {
              document.documentElement.dataset.theme = "dark";
            }
          })();`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
