import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "600"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Stay Updated - Latest Notifications",
    template: "%s | Stay Updated"
  },
  description: "Best place to get updated notifications about the world",
  keywords: ["updates", "notifications", "viral content", "trending"],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_US", "bn_BD"],
    title: {
      default: "Stay Updated - Latest Notifications",
      template: "%s | Stay Updated"
    },
    description: "Best place to get updated notifications about the world",
    siteName: "Stay Updated"
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Stay Updated - Latest Notifications",
      template: "%s | Stay Updated"
    },
    description: "Best place to get updated notifications about the world"
  },
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
