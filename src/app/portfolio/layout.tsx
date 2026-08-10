import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "A selection of projects across web, data, software and branding — built with clear scope, honest timelines and real results.",
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
