import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}