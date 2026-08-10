import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import FloatingQuote from "@/components/FloatingQuote";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  metadataBase: new URL("https://touchbrightconsults.com"),
  title: {
    default: "Touchbright Consults | Built to make technology feel simple",
    template: "%s | Touchbright Consults",
  },
  description:
    "Touchbright Consults works across design, data, software and print, so a single team stays accountable for how your systems actually look and feel together.",
  keywords: [
    "web design Nairobi",
    "software development Kenya",
    "UI/UX design",
    "data dashboards",
    "IT consulting Nairobi",
    "branding Kenya",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Touchbright Consults",
    title: "Touchbright Consults | Built to make technology feel simple",
    description:
      "Design, data, software and print — one team accountable for how your systems look and feel together.",
    images: [{ url: "/TBLogo.png", width: 512, height: 512, alt: "Touchbright Consults" }],
  },
  twitter: {
    card: "summary",
    title: "Touchbright Consults",
    description:
      "Design, data, software and print — one team accountable for how your systems look and feel together.",
    images: ["/TBLogo.png"],
  },
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
      <body className="antialiased font-body">
        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppFloat />
        <FloatingQuote />
      </body>
    </html>
  );
}
