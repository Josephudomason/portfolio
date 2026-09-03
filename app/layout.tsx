import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AppContextProvider } from "@/context/Context";

export const metadata: Metadata = {
  title: "Joseph Udomason | Frontend Developer",
  description:
    "Frontend & Mobile Developer in Lagos building accessible, responsive web apps with Next.js, React, React-Native and TypeScript.",
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
      className={cn("h-full", "scroll-smooth", "font-sans")}
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
      <body>
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
