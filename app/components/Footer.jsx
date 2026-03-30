"use client";
import React from "react";

const links = [
  { name: "Exclusive Residences", href: "#properties" },
  { name: "Commercial Spaces", href: "#commercial" },
  { name: "The Legacy", href: "#brand" },
  { name: "Regional Insights", href: "#investment" },
  { name: "Contact Advisory", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="section-padding bg-[#041a14] text-white/50 border-t border-white/5 w-full">
      <div className="site-container">
        
        {/* Main Footer Content - Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 md:gap-12 mb-24 w-full">
          
          {/* Brand Col */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 flex-center bg-gold text-[#04241b] rounded-full font-serif text-xl font-bold">
                R
              </div>
              <span className="text-xl font-bold tracking-[-0.05em] text-white">RASTOGI</span>
            </div>
            <p className="text-sm leading-relaxed mb-10 max-w-[280px]">
              Greater Noida's premier luxury real estate advisory since 2007. We curate distinguished portfolios and execute elite asset acquisitions.
            </p>
            <div className="flex gap-4">
              {["IG", "LN", "FB", "WA"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex-center text-[10px] font-bold hover:bg-gold hover:border-gold hover:text-white transition-all transform hover:scale-110"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-10">Navigation</h4>
            <ul className="flex flex-col gap-5">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm font-medium hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Global HQ */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-10">Headquarters</h4>
            <div className="flex flex-col gap-6">
              <p className="text-sm leading-relaxed">
                Rastogi Towers, Floor 14 <br />
                Sector 1, Greater Noida <br />
                Uttar Pradesh, India 201306
              </p>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Client Direct</span>
                <a href="tel:+919990000000" className="text-sm font-bold text-white hover:text-gold transition-colors">
                  +91-999-000-0000
                </a>
              </div>
            </div>
          </div>

          {/* Certification / Trust */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-10">Accreditation</h4>
            <div className="space-y-8">
              <div className="flex flex-col items-center md:items-start gap-4">
                <div className="flex items-center gap-4 py-4 px-6 bg-white/5 border border-white/10 rounded-2xl w-full">
                  <div className="w-10 h-10 rounded-full bg-emerald flex-center text-gold text-lg">✓</div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white">RERA Registered</p>
                    <p className="text-[9px] text-white/30 uppercase tracking-widest">UPRERA12345678</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 py-4 px-6 bg-white/5 border border-white/10 rounded-2xl w-full">
                  <div className="w-10 h-10 rounded-full bg-emerald flex-center text-gold text-lg">🏆</div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white">Award Winning</p>
                    <p className="text-[9px] text-white/30 uppercase tracking-widest">Best Advisory 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Balanced and Symmetric */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 w-full">
          <p className="text-xs font-medium text-white/20 tracking-wide text-center md:text-left">
            © {new Date().getFullYear()} Rastogi Properties. Leading with Integrity since 2007. <br className="md:hidden" />
            <span className="hidden md:inline mx-4 opacity-10">|</span>
            Proudly Made in Bharat.
          </p>
          <div className="flex gap-10 items-center">
            {["Legal Privacy", "Portfolio Management", "Sitemap"].map((item) => (
              <a key={item} href="#" className="text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
