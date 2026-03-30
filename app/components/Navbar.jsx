"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Residences", href: "#properties" },
  { name: "Commercial", href: "#commercial" },
  { name: "The Legacy", href: "#brand" },
  { name: "Investment", href: "#investment" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? "bg-[#04241b] py-4 shadow-lg border-b border-white/5" : "bg-transparent py-8"
      }`}
    >
      <div className="site-container flex-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 flex-center bg-gold text-[#04241b] rounded-full font-serif text-xl font-bold transition-transform group-hover:scale-110">
            R
          </div>
          <span className="text-xl font-bold tracking-[-0.05em] text-white">RASTOGI</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase font-bold tracking-[0.2em] text-white/70 hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-base btn-primary !py-3 !px-8 !text-[9px]"
          >
            Schedule Viewing
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-10 h-10 flex flex-col justify-center gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`h-0.5 bg-white transition-all ${mobileOpen ? "rotate-45 translate-y-2 w-full" : "w-8"}`} />
          <span className={`h-0.5 bg-white transition-all ${mobileOpen ? "opacity-0" : "w-6"}`} />
          <span className={`h-0.5 bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-2 w-full" : "w-4"}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && ( mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#04241b] border-b border-white/10 py-8 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6 items-center text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm uppercase font-bold tracking-[0.2em] text-white/80 hover:text-gold"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-base btn-primary w-full max-w-[300px]"
                onClick={() => setMobileOpen(false)}
              >
                Schedule Viewing
              </a>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </nav>
  );
}
