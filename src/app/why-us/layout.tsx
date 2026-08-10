import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Us",
  description:
    "One team accountable for design, data, software and print. See our story, results, values and what our clients say.",
};

export default function WhyUsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
