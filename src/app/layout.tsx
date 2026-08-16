import type { Metadata } from "next";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya Raut — Software Developer",
  description: "Software Developer — 2025 Graduate looking for opportunities",
  authors: [{ name: "Aditya Raut" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
