import type { Metadata } from "next";
import { Italianno, Libre_Baskerville, Montserrat, Playfair_Display } from "next/font/google";
import "@/styles/main.scss";

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  variable: "--font-baskerville",
});

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const italianno = Italianno({
  weight: '400',
  subsets: ["latin"],
  variable: "--font-italianno",
});

const playfair = Playfair_Display({
  weight: ['700'],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Gusteau's Professional Kitchen",
  description: "Fabricantes de sabores para la pastelería",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${libreBaskerville.variable} ${montserrat.variable} ${italianno.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
