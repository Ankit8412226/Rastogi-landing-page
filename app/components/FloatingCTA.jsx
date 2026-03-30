"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-10 right-10 z-[110] flex flex-col items-center gap-4">
      {/* Social Stack - Centered and Symmetric */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="flex flex-col gap-4 mb-4"
          >
            {[
              { icon: <InstagramIcon />, bg: "bg-gradient-to-tr from-pink-500 to-purple-600" },
              { icon: <LinkedinIcon />, bg: "bg-blue-600" },
              { icon: <FacebookIcon />, bg: "bg-blue-800" },
            ].map((social, i) => (
              <a
                key={i}
                href="#"
                className={`w-14 h-14 rounded-full ${social.bg} text-white flex-center shadow-2xl transition-transform transform hover:scale-110`}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hub Button - Centered and Symmetric */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-18 h-18 rounded-full shadow-2xl flex-center transition-all duration-500 transform ${
          isOpen ? "bg-[#04241b] rotate-45 scale-110" : "bg-gold scale-100"
        }`}
      >
        <span className={`text-3xl font-bold ${isOpen ? "text-white" : "text-emerald"}`}>
          {isOpen ? "×" : "+"}
        </span>
      </button>

      {/* Floating Call Marker - Balanced and Symmetric */}
      <div className="absolute right-full mr-6 top-1/2 -translate-y-1/2 hidden md:block group">
        <a
          href="tel:+919990000000"
          className="px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-xl border border-gray-100/50 flex items-center gap-3 transition-all hover:bg-gold hover:text-white"
        >
          <div className="flex flex-col items-end whitespace-nowrap">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#04241b]/40 group-hover:text-white/60">Investor Hotline</span>
            <span className="text-sm font-bold text-emerald group-hover:text-white">+91 999 000 0000</span>
          </div>
          <span className="text-gold text-2xl group-hover:text-white">📞</span>
        </a>
      </div>
    </div>
  );
}
