"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stories = [
  {
    title: "Greater Noida: In-Transit Real Estate Powerhouse",
    tag: "Market Insights",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
    time: "2 days ago",
  },
  {
    title: "Jewar Airport Evolution: Impact on Regional Wealth",
    tag: "Investment",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    time: "5 days ago",
  },
  {
    title: "The Ultimate Guide to Commercial SCO Plots",
    tag: "Commercial",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    time: "1 week ago",
  },
];

export default function Stories() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stories" className="section-padding bg-[#f8faf9] relative w-full overflow-hidden" ref={ref}>
      <div className="site-container flex flex-col items-center">
        
        {/* Header - Centered and Symmetric */}
        <div className="flex flex-col items-center text-center gap-6 mb-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 py-2 px-6 bg-white/5 border border-gray-100 rounded-full"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald">The Knowledge Hub</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="cinematic-heading text-4xl md:text-6xl text-emerald"
          >
            Insights <span className="font-serif italic font-normal text-gold">&</span> Market Intelligence
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-base md:text-lg text-slate-500 max-w-2xl font-light leading-relaxed"
          >
            Stay informed with our proprietary market reports, emerging trend analysis, and comprehensive guides to wealth generation through real estate.
          </motion.p>
        </div>

        {/* Stories Grid - Symmetric 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full">
          {stories.map((story, i) => (
            <motion.article
              key={story.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-xl mb-10">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 right-6 px-4 py-2 bg-emerald text-white text-[9px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                  {story.tag}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald/40 to-transparent group-hover:opacity-0 transition-opacity" />
              </div>
              
              <div className="flex flex-col items-center px-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]/60 mb-4">{story.time}</span>
                <h3 className="text-2xl font-bold text-emerald group-hover:text-gold transition-colors mb-6 leading-tight">
                  {story.title}
                </h3>
                <div className="flex items-center gap-3 text-emerald font-bold text-xs uppercase tracking-widest border-b border-emerald/10 pb-2 w-max transition-all group-hover:gap-5 group-hover:border-gold">
                  Explore Insights
                  <span className="text-gold text-lg">→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Hub Action */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ delay: 0.8, duration: 0.6 }}
           className="mt-20 flex justify-center"
         >
           <a href="#contact" className="btn-base btn-primary shadow-xl">
             Explore Knowledge Hub
           </a>
         </motion.div>
      </div>
    </section>
  );
}
