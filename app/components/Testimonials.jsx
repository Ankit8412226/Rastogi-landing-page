"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Rakesh Verma",
    role: "Private Equity Investor",
    quote: "Their insight into the Yamuna Expressway corridor gave us returns we didn't think were possible within 3 years. Truly elite advisory.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    name: "Anita Singh",
    role: "Tech Entrepreneur",
    quote: "Professionalism at its peak. Rastogi Properties made the villa acquisition process in Sector 150 absolutely seamless and elegant.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    name: "Vikram Singhania",
    role: "HNI Client",
    quote: "Strategic, data-driven, and highly exclusive inventory. The best real estate experience I've had in the NCR region so far.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-[#f8faf9] relative overflow-hidden w-full" ref={ref}>
      <div className="site-container flex flex-col items-center">
        
        {/* Header - Centered and Symmetric */}
        <div className="flex flex-col items-center text-center gap-6 mb-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald">Words of Trust</span>
            <span className="h-px w-8 bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="cinematic-heading text-4xl md:text-6xl text-emerald"
          >
            Client <span className="font-serif italic font-normal text-gold">Journeys</span> & Success Stories
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-base md:text-lg text-slate-500 max-w-2xl font-light"
          >
            We pride ourselves on the relationships we build. Here is what some of our most distinguished clients have to say about our partnership.
          </motion.p>
        </div>

        {/* Testimonial Carousel - Centered and Symmetric */}
        <div className="w-full max-w-5xl relative flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -30 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full bg-[#04241b] text-white p-12 md:p-20 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col items-center text-center"
            >
              {/* Decorative Background Quotes */}
              <span className="absolute top-10 left-10 text-[200px] font-serif text-white/5 leading-none pointer-events-none select-none">“</span>
              <span className="absolute bottom-[-100px] right-10 text-[200px] font-serif text-white/5 leading-none pointer-events-none select-none">”</span>

              {/* Avatar and Info */}
              <div className="relative z-10 flex flex-col items-center gap-8">
                <div className="w-24 h-24 rounded-full border-4 border-gold shadow-2xl overflow-hidden mb-4">
                  <img src={testimonials[index].avatar} alt={testimonials[index].name} className="w-full h-full object-cover" />
                </div>
                
                <h3 className="text-3xl md:text-5xl font-serif italic font-light text-white mb-10 px-8 leading-snug">
                  "{testimonials[index].quote}"
                </h3>

                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold tracking-[-0.03em] text-white underline decoration-gold underline-offset-8 mb-2">
                    {testimonials[index].name}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold/60">{testimonials[index].role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls - Symmetric Centered */}
          <div className="absolute -bottom-10 flex items-center gap-6 z-20">
            <button
              onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-14 h-14 rounded-full border border-[#04241b]/10 bg-white shadow-xl flex-center text-[#04241b] hover:bg-gold hover:text-white transition-all transform hover:scale-110"
            >
              ←
            </button>
            <div className="flex items-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${i === index ? "w-10 bg-gold" : "w-2 bg-[#04241b]/20"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
              className="w-14 h-14 rounded-full border border-[#04241b]/10 bg-white shadow-xl flex-center text-[#04241b] hover:bg-gold hover:text-white transition-all transform hover:scale-110"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
