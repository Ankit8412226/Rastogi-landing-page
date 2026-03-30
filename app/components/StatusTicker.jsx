"use client";
import React from "react";
import { motion } from "framer-motion";

export default function StatusTicker() {
  const items = [
    "LAST 2 PLOTS REMAINING IN SECTOR 150",
    "JEWAR AIRPORT PHASE 2 APPROVED",
    "NOIDA EXPRESSWAY ROI HITS 22% CAGR",
    "NEW LUXURY RELEASE: THE RASTOGI RESIDENCE",
    "INVESTOR ADVISORY: 2025 OUTLOOK REPORT AVAILABLE",
    "CONFIDENTIAL: 400 ACRES SECURED FOR TECH HUB",
  ];

  return (
    <div className="w-full bg-[#d4af37] py-3 overflow-hidden whitespace-nowrap border-y border-white/20">
      <div className="flex animate-marquee hover:pause whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-8 mx-12">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#04241b]">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#04241b]/40" />
          </div>
        ))}
      </div>
    </div>
  );
}
