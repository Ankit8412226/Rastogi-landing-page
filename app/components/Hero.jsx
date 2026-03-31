"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronDown, MapPin, Search } from "lucide-react";
import { useRef, useState } from "react";

const stats = [
  { label: "Years of Trust", value: "18+" },
  { label: "Happy Families", value: "2,400+" },
  { label: "Projects Done", value: "340+" },
  { label: "Satisfaction", value: "96%" },
];

const categories = ["Residential", "Commercial", "Plots"];

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 600], [0, 180]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const [activeCategory, setActiveCategory] = useState("Residential");

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#050f0a]"
    >
      {/* Background */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 -top-20 -bottom-20 z-0">
        <img
          src="/images/hero.png"
          alt=""
          className="w-full h-full object-cover object-center scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#04241b]/95 via-[#04241b]/75 to-[#04241b]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04241b] via-transparent to-[#04241b]/40" />
      </motion.div>

      {/* Vertical grid lines */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {[20, 40, 60, 80].map((pct) => (
          <div key={pct} className="absolute top-0 bottom-0 w-px bg-white/[0.03]" style={{ left: `${pct}%` }} />
        ))}
      </div>

      {/* Gold orb */}
      <div className="absolute top-1/3 right-[15%] w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none z-[1]" />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 site-container min-h-screen flex flex-col justify-center pt-36 pb-16">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-px w-10 bg-gold shrink-0" />
          <span className="text-[10px] font-extrabold uppercase tracking-[0.5em] text-gold">
            NCR's Definitive Luxury Advisory
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-8 overflow-hidden">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-[clamp(3rem,8vw,7rem)] font-black text-white leading-[0.88] tracking-[-0.03em] uppercase"
          >
            Where
            <br />
            <em
              className="not-italic text-transparent bg-clip-text block"
              style={{
                backgroundImage: "linear-gradient(135deg, #c9a84c 0%, #f5d78e 50%, #c9a84c 100%)",
              }}
            >
              Legacy
            </em>
            <span className="text-white/90">Meets Land.</span>
          </motion.h1>
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9 }}
          className="text-white/50 text-base max-w-sm mb-10 leading-relaxed font-light tracking-wide"
        >
          Strategic advisory for high-yield commercial assets and elite
          residential estates in Greater Noida & NCR.
        </motion.p>

        {/* ── Search Hub ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          className="w-full max-w-2xl mb-12"
        >
          {/* Category Tabs */}
          <div className="flex gap-2 mb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-[10px] font-extrabold uppercase tracking-[0.2em] transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gold text-white"
                    : "bg-white/5 text-white/40 border border-white/10 hover:bg-white/10 hover:text-white/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div
            className="flex flex-col md:flex-row items-stretch md:items-center backdrop-blur-2xl border border-white/10 rounded-[2rem] md:rounded-full bg-[#04241b]/40 shadow-2xl p-2 gap-2"
          >
            {/* Input */}
            <div className="flex items-center gap-4 flex-1 px-6 py-4 md:py-3 min-w-0 bg-white/5 rounded-full md:rounded-none md:bg-transparent border border-white/5 md:border-none">
              <Search className="w-[18px] h-[18px] text-gold shrink-0" />
              <input
                type="text"
                placeholder={`Search premium ${activeCategory.toLowerCase()}...`}
                className="bg-transparent border-none text-white text-sm font-medium w-full focus:outline-none placeholder:text-white/30 tracking-wide min-w-0"
              />
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-8 bg-white/10 shrink-0 mx-2" />

            {/* Location */}
            <div className="flex items-center gap-3 px-6 py-4 md:py-3 cursor-pointer group shrink-0 bg-white/5 rounded-full md:rounded-none md:bg-transparent border border-white/5 md:border-none hover:bg-white/10 transition-colors duration-300">
              <MapPin className="w-4 h-4 text-gold shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-widest whitespace-nowrap text-white/50 group-hover:text-white/80 transition-colors">
                Greater Noida
              </span>
            </div>

            {/* Find Button */}
            <button className="flex items-center justify-center gap-2 px-8 py-5 md:py-4 bg-gold hover:brightness-110 active:scale-95 text-[#04241b] font-extrabold text-[10px] uppercase tracking-[0.25em] transition-all duration-300 whitespace-nowrap shrink-0 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              Find Property
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* ── Stats ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 1 }}
          className="flex items-center"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col pr-10 ${i !== 0 ? "pl-10 border-l border-white/10" : ""}`}
            >
              <span className="text-2xl md:text-3xl font-black text-white leading-none mb-1.5">
                {stat.value}
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35 whitespace-nowrap">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Featured Card ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.9 }}
        className="absolute bottom-16 right-8 lg:right-20 z-20 hidden lg:block"
      >
        <div
          className="relative p-6 bg-[#04241b]/60 backdrop-blur-2xl border border-white/10 rounded-3xl group cursor-pointer hover:border-gold/40 transition-all duration-500 shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
          style={{ width: "350px" }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-gold/20 transition-all" />

          <div className="flex items-start justify-between gap-4 mb-6 relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                 <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                 <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-gold">Featured Project</span>
              </div>
              <h3 className="text-white font-black text-2xl leading-tight mb-2">
                The Legacy Estate
              </h3>
              <p className="text-white/50 text-xs font-medium flex items-center gap-1.5">
                 <MapPin className="w-3.5 h-3.5 text-white/30" /> Sector 150, Greater Noida
              </p>
            </div>
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:border-gold transition-all duration-500 shadow-lg mt-1">
              <ArrowUpRight className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            </div>
          </div>

          <div className="flex bg-black/40 rounded-2xl p-4 border border-white/5 gap-4 relative z-10 justify-between items-center shadow-inner">
            <div className="flex flex-col gap-1">
               <span className="text-white text-sm font-bold">3–5 BHK</span>
               <span className="text-white/30 text-[9px] uppercase tracking-widest">Config</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex flex-col gap-1 flex-1 items-center">
               <span className="text-white text-sm font-bold">₹2.8Cr+</span>
               <span className="text-white/30 text-[9px] uppercase tracking-widest">Starting</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex flex-col gap-1 text-right">
               <span className="text-white text-sm font-bold">Q4 2025</span>
               <span className="text-white/30 text-[9px] uppercase tracking-widest">Possession</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/25">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-white/25" />
        </motion.div>
      </motion.div>
    </section>
  );
}
