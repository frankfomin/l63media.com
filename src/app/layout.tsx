import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "L63 Media",
  description: "Snabbt, Smidigt och Högkvalitativt!",
  icons: {
    icon: "/images/faviicon.png"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${playfair.variable} bg-primary font-montserrat text-textColor`}
      >
        {children}
      </body>
    </html>
  );
}
