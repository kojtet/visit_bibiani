import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Visit Bibiani - Gateway to Western North Ghana",
  description: "Discover Bibiani, the vibrant gateway to Ghana's Western North Region. Explore rich culture, tourist attractions, business opportunities, and more.",
  keywords: "Bibiani, Ghana, Western North Region, tourism, business, culture, festivals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-vb-cream text-gray-800 min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}