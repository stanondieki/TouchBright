import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden pt-20">
      <div className="absolute inset-0 world-map-bg" />
      <div className="absolute top-10 right-[10%] w-72 h-72 bg-accent/15 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-[5%] w-56 h-56 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative text-center px-6">
        <p className="text-accent-light font-mono text-sm font-semibold tracking-widest uppercase mb-4">
          Error 404
        </p>
        <h1 className="text-7xl md:text-9xl font-heading font-bold text-white mb-6">
          4<span className="text-accent">0</span>4
        </h1>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
          This page doesn&apos;t exist.
        </h2>
        <p className="text-slate-400 max-w-md mx-auto mb-10 leading-relaxed">
          The page you&apos;re looking for may have been moved or removed. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-accent/25"
          >
            <Home size={18} />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/30 hover:border-accent/50 hover:bg-white/10 text-white font-semibold rounded-full transition-all duration-300"
          >
            <ArrowLeft size={18} />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
