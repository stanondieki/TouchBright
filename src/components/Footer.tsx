import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark border-t border-slate-200/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img
                src="/TBLogo.png"
                alt="Touchbright Consults"
                className="w-14 h-14 rounded-full object-cover"
              />
              <span className="font-heading text-xl font-bold text-white">
                Touchbright<span className="text-accent-light">.</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Built to make technology feel simple. One team, working across
              every touchpoint.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {["Services", "Work", "Process", "Blog", "Why Us", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Work" ? "/portfolio" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-slate-400 text-sm hover:text-accent-light transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "UI/UX & Web Design",
                "Data Analytics & BI",
                "Software Development",
                "Cloud & Networking",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-slate-400 text-sm hover:text-accent-light transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone size={16} className="text-accent-light" />
                +254 701 922 375
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail size={16} className="text-accent-light" />
                touchbrightconsults@gmail.com
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin size={16} className="text-accent-light" />
                Nairobi, Kenya
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Touchbright Consults. All rights
            reserved.
          </p>
          <p className="text-slate-500 text-sm">Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  );
}
