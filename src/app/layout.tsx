import type { Metadata } from "next";
import { Archivo, Fredoka, Inter } from "next/font/google";
import Script from "next/script";
import { GridBackground } from "@/components/chrome/GridBackground";
import { SiteChrome } from "@/components/chrome/SiteChrome";
import { ThemeToggle } from "@/components/chrome/ThemeToggle";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bizaree Water — Packaged Drinking Water | West Bengal",
  description:
    "Bizaree Water — West Bengal's first fully automated water packaging plant. Enquire about our range: 250ml to 20L packaged drinking water. 25+ years of experience, 24/7 plant operations.",
  // iOS auto-wraps detected phone numbers in tel: links pre-hydration,
  // causing React hydration mismatches (the ticker shows our number as text).
  formatDetection: { telephone: false },
};

/** Runs pre-paint: restores the saved theme and flags JS availability
 *  so reveal/split animations only hide content when they can also show it. */
const themeInitScript = `
(function () {
  document.documentElement.classList.add('js');
  var t = localStorage.getItem('bizaree-theme');
  if (!t) t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', t);
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivo.variable} ${inter.variable} ${fredoka.variable}`}
    >
      <body>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <GridBackground />
        <SiteChrome />
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
