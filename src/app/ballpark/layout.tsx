import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ballpark Estimate",
  description:
    "Get an instant ballpark estimate for your project in 60 seconds. No forms, no calls — just a number to work with.",
};

export default function BallparkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
