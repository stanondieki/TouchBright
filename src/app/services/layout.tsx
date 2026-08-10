import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our services: UI/UX & web design, graphic design, software development, cloud & networking, cybersecurity, digital marketing and managed IT support.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
