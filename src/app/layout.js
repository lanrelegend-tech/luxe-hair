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
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default: "Luxe Hair | Luxury Hair Salon London",
    template: "%s | Luxe Hair"
  },

  description:
    "Luxe Hair is a premium luxury hair salon in London offering precision cuts, styling, and online booking appointments.",

  keywords: [
    "hair salon London",
    "luxury salon London",
    "book haircut London",
    "Luxe Hair London",
    "hair stylist London",
    "best salon London"
  ],

  openGraph: {
    title: "Luxe Hair | Luxury Hair Salon London",
    description:
      "Premium hair salon in London offering modern cuts, styling and booking.",
    url: "https://your-domain.com",
    siteName: "Luxe Hair",
    images: [
      {
        url: "/project3.jpg",
        width: 1200,
        height: 630
      }
    ],
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Luxe Hair | London Salon",
    description:
      "Luxury hair salon in London with online booking.",
    images: ["/hair14.jpg"]
  },

  robots: {
    index: true,
    follow: true
  }
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${playfair.variable} ${greatVibes.variable} font-[var(--font-montserrat)] min-h-full  flex flex-col antialiased`}
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}