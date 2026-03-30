import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import CustomCursor from "./components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "Rastogi Properties | Premium Real Estate in Greater Noida",
  description:
    "Rastogi Properties — Greater Noida's most trusted real estate advisory since 2007. Luxury apartments, plots, villas, and commercial spaces across Noida Expressway, Yamuna Expressway & NCR. RERA Approved.",
  keywords:
    "real estate Greater Noida, property Greater Noida, flats Greater Noida, Yamuna Expressway plots, Rastogi Properties, property dealer Noida, Jewar airport property",
  openGraph: {
    title: "Rastogi Properties | Premium Real Estate in Greater Noida",
    description:
      "Find your dream home or investment property in Greater Noida with 18+ years of trusted expertise.",
    type: "website",
    locale: "en_IN",
  },
};

import LenisProvider from "./components/LenisProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased ${inter.variable} ${playfair.variable}`}>
      <body className="min-h-full flex flex-col lg:cursor-none">
        <CustomCursor />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
