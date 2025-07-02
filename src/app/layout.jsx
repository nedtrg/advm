import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import AOSWrapper from "@/components/AOSWrapper";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "ADVM",
  description: "EV Chargers and Purchase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        <AOSWrapper>{children}</AOSWrapper>
      </body>
    </html>
  );
}
