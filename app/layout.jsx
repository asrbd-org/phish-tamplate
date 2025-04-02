import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "600"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata = {
  title: "Stay Updated",
  description: "Best place to get updated notifications about the world",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_US", "bn_BD"],
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
