"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type DropdownItem = {
  label: string;
  href: string;
  desc?: string;
};

type NavLink = {
  href: string;
  label: string;
  dropdown?: DropdownItem[];
};

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    dropdown: [
      { label: "UI/UX & Web Design", href: "/services/ui-ux-web-design", desc: "Websites that work as hard as you do" },
      { label: "Graphic Design", href: "/services/graphic-design", desc: "Visuals that make people remember you" },
      { label: "Software Development", href: "/services/software-development", desc: "Custom tools for your business" },
      { label: "Cloud & Networking", href: "/services/cloud-networking", desc: "Infrastructure that just works" },
      { label: "Cybersecurity", href: "/services/cybersecurity", desc: "Protection before you need it" },
      { label: "Digital Marketing & SEO", href: "/services/digital-marketing-seo", desc: "Get found by the right people" },
      { label: "Managed IT Support", href: "/services/managed-it-support", desc: "Your tech team, without the cost" },
    ],
  },
  {
    href: "/portfolio",
    label: "Work",
    dropdown: [
      { label: "All Projects", href: "/portfolio", desc: "View our full portfolio" },
      { label: "Web & UI/UX", href: "/portfolio", desc: "Websites and web apps we've built" },
      { label: "Software & Dashboards", href: "/portfolio", desc: "Custom software and internal tools" },
      { label: "Branding & Print", href: "/portfolio", desc: "Visual identities and print work" },
    ],
  },
  {
    href: "/process",
    label: "Process",
    dropdown: [
      { label: "Our Approach", href: "/process", desc: "How we work with you" },
      { label: "Discovery", href: "/process", desc: "Understanding your needs" },
      { label: "Design & Build", href: "/process", desc: "Crafting your solution" },
      { label: "Launch & Support", href: "/process", desc: "Going live and beyond" },
    ],
  },
  { href: "/blog", label: "Blog" },
  {
    href: "/why-us",
    label: "Why Us",
    dropdown: [
      { label: "Our Story", href: "/why-us", desc: "Why Touchbright exists" },
      { label: "Results & Insights", href: "/why-us", desc: "Data that speaks for itself" },
      { label: "What Changes", href: "/why-us", desc: "Before vs after working with us" },
      { label: "Client Testimonials", href: "/why-us", desc: "What our clients say" },
    ],
  },
  {
    href: "/contact",
    label: "Contact",
    dropdown: [
      { label: "Get in Touch", href: "/contact", desc: "Start a conversation" },
      { label: "Get a Ballpark", href: "/ballpark", desc: "Quick estimate in 60 seconds" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
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
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => link.dropdown && setHoveredDropdown(link.href)}
              onMouseLeave={() => link.dropdown && setHoveredDropdown(null)}
            >
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 relative flex items-center gap-1 ${
                  pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                    ? "text-accent"
                    : isTransparent
                    ? "text-white/80 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
                {link.dropdown && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${hoveredDropdown === link.href ? "rotate-180" : ""}`}
                  />
                )}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                  />
                )}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {link.dropdown && hoveredDropdown === link.href && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden"
                  >
                    <div className="py-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2.5 hover:bg-slate-50 transition-colors group"
                        >
                          <div className="text-sm font-semibold text-slate-800 group-hover:text-accent transition-colors">
                            {item.label}
                          </div>
                          {item.desc && (
                            <div className="text-xs text-slate-400 mt-0.5">{item.desc}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
            className="md:hidden bg-canvas/95 backdrop-blur-lg border-t border-slate-200/60 overflow-y-auto max-h-[80vh]"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <div className="flex items-center justify-between">
                    <Link
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
                    {link.dropdown && (
                      <button
                        onClick={() =>
                          setMobileExpanded(mobileExpanded === link.href ? null : link.href)
                        }
                        className="p-2 text-slate-400"
                        aria-label="Expand"
                      >
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${mobileExpanded === link.href ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>
                  {link.dropdown && mobileExpanded === link.href && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      className="pl-4 overflow-hidden"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-sm text-slate-500 hover:text-accent transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
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
