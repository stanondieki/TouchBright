import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "Five clear stages from discovery to ongoing support — how we take your project from idea to launch without surprises.",
};

export default function ProcessLayout({ children }: { children: React.ReactNode }) {
  return children;
}
