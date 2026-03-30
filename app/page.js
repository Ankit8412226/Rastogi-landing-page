"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Properties from "./components/Properties";
import WhyUs from "./components/WhyUs";
import AboutBrand from "./components/AboutBrand";
import Amenities from "./components/Amenities";
import Areas from "./components/Areas";
import Testimonials from "./components/Testimonials";
import Investment from "./components/Investment";
import Stories from "./components/Stories";
import LeadCapture from "./components/LeadCapture";
import LuxuryConcierge from "./components/LuxuryConcierge";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import StatusTicker from "./components/StatusTicker";
import FullWidthCTA from "./components/FullWidthCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#f8faf9]">
      <Navbar />
      
      <main className="w-full flex flex-col">
        {/* 1. Hero — Full-Screen High-Impact Symmetric Reveal */}
        <Hero />

        {/* 1.1 Market Pulse — Horizontal Status Ticker (New) */}
        <StatusTicker />

        {/* 2. Global Partners — Centered Trust Bar */}
        <TrustBar />

        {/* 3. The Core Narrative — Balanced Story Column */}
        <AboutBrand />

        {/* 4. Strategic Investment Intelligence — ROI Feature Grid */}
        <Investment />

        {/* 5. Featured Properties — Symmetric 3-Column Luxury Matrix */}
        <Properties />

        {/* 6. Why Rastogi? — 4-Column Feature Advocacy Grid */}
        <WhyUs />

        {/* 7. Regional Market Focus — Regional Grid Cards */}
        <Areas />

        {/* 7.1 Action Banner — High Impact Urgency CTA (New) */}
        <FullWidthCTA />

        {/* 8. Bespoke Concierge Services — Symmetric Service Grid (New) */}
        <LuxuryConcierge />

        {/* 9. Elite Lifestyle Amenities — 3-Column Amenity Grid */}
        <Amenities />

        {/* 10. Client Feedback — Centered Carousel Testimony */}
        <Testimonials />

        {/* 11. Market Stories & Intelligence — Informative Grid Section */}
        <Stories />

        {/* 12. Lead Engagement — Centered High-Impact Dual Form */}
        <LeadCapture />
      </main>

      {/* 13. Footer — Symmetric 4-Column High-Impact Navigation */}
      <Footer />

      {/* 14. Support Portal — Floating Interaction Hub */}
      <FloatingCTA />

      {/* Symmetric Overlay Effects (Subtle Visual Polish) */}
      <div className="fixed inset-0 pointer-events-none border-[32px] border-[#04241b]/[0.02] z-[999]" />
    </div>
  );
}
