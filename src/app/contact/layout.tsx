import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Let's talk about your project. Whether you have a detailed brief or a rough idea, we reply within 24 hours — no commitment needed.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
