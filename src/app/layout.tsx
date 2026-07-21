import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Touchbright Consults | Built to make technology feel simple",
  description:
    "Touchbright Consults works across design, data, software and print, so a single team stays accountable for how your systems actually look and feel together.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/TBLogo.png" />
        <link rel="apple-touch-icon" href="/TBLogo.png" />
      </head>
      <body className="antialiased">
        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
