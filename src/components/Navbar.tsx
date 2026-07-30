"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/blog", label: "Blog" },
  { href: "/why-us", label: "Why Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const darkHeroPages = ["/", "/services", "/contact", "/ballpark", "/process", "/why-us"];
  const hasDarkHero = darkHeroPages.includes(pathname) || pathname.startsWith("/services/");
  const isTransparent = hasDarkHero && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/60 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/TBLogo.png"
            alt="Touchbright Consults"
            className="w-14 h-14 rounded-full object-cover transition-transform group-hover:scale-110"
          />
          <span className={`font-heading text-xl font-bold transition-colors ${isTransparent ? "text-white" : "text-slate-900"}`}>
            Touchbright<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 relative ${
                pathname === link.href
                  ? "text-accent"
                  : isTransparent
                  ? "text-white/80 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 font-semibold text-sm rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 ${
            isTransparent
              ? "bg-white text-slate-900 hover:bg-white/90"
              : "bg-accent hover:bg-accent-light text-white"
          }`}
        >
          Get a quote
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 transition-colors ${isTransparent ? "text-white" : "text-slate-900"}`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-canvas/95 backdrop-blur-lg border-t border-slate-200/60"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium py-2 ${
                    pathname === link.href
                      ? "text-accent"
                      : "text-slate-600 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-flex items-center justify-center px-5 py-3 bg-accent text-white font-semibold rounded-full"
              >
                Get a quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
