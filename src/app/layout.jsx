import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import {
  ClerkProvider,
} from '@clerk/nextjs'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Airbnb-kopia",
  description: "En kopia av Airbnb med alla viktiga funktioner byggd med Next.js och Firebase",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Airbnb-kopia",
    description: "En kopia av Airbnb med alla viktiga funktioner",
    url: "https://dinairbnbkopia.vercel.app",
    siteName: "Airbnb-kopia",
    images: [
      {
        url: "https://dinairbnbkopia.vercel.app/og-image.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airbnb-kopia",
    description: "En kopia av Airbnb med alla viktiga funktioner",
    images: ["https://dinairbnbkopia.vercel.app/twitter-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ClerkProvider>
       <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
