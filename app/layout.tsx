import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

//Website metadata
export const metadata: Metadata = {
  title: "Between Scenes Newsletter",
  description: "A newsletter about films and cinema",
  icons: {
    icon: [
      {
        url: '/between-scenes-logo.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        url: '/between-scenes-logo.png',
        sizes: '16x16',
        type: 'image/png',
      }
    ],
    shortcut: '/between-scenes-logo.png',
  },
};

//Main Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}