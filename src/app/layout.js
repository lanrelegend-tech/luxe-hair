import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Montserrat, Playfair_Display, Great_Vibes } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "800"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
});

// ✨ CURLY HERO FONT
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

export const metadata = {
  title: "Salon Website",
  description: "Luxury hair salon website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${playfair.variable} ${greatVibes.variable} font-[var(--font-montserrat)] min-h-full flex flex-col antialiased`}
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}