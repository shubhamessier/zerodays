import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { playfair, ebGaramond } from "./fonts";

export const metadata: Metadata = {
  title: "The Zero Days of Life",
  description: "Personal blog by Shubham Gaur",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${ebGaramond.variable}`}
    >
      <body className={ebGaramond.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
