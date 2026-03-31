import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronDown, MapPin, Search, ShieldCheck } from "lucide-react";
import { useRef, useState } from "react";

const stats = [
  { label: "Years of Trust",  value: "18+"    },
  { label: "Happy Families",  value: "2,400+" },
  { label: "Projects Done",   value: "340+"   },
  { label: "Satisfaction",    value: "96%"    },
];

const categories = ["Residential", "Commercial", "Plots"];

export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const yBg      = useTransform(scrollY, [0, 600], [0, 160]);
  const opScroll = useTransform(scrollY, [0, 300], [1, 0]);
  const [active, setActive] = useState("Residential");

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        background: "#050f0a",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── BG ── */}
      <motion.div
        style={{
          y: yBg,
          position: "absolute",
          inset: 0,
          top: "-5rem",
          bottom: "-5rem",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <img
          src="/images/hero.png"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.1)" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,rgba(4,36,27,0.96) 0%,rgba(4,36,27,0.78) 55%,rgba(4,36,27,0.42) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(4,36,27,1) 0%,transparent 40%,rgba(4,36,27,0.28) 100%)" }} />
      </motion.div>

      {/* grid lines */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
        {[20, 40, 60, 80].map((p) => (
          <div key={p} style={{ position: "absolute", top: 0, bottom: 0, left: `${p}%`, width: 1, background: "rgba(255,255,255,0.025)" }} />
        ))}
      </div>

      {/* gold orb */}
      <div style={{ position: "absolute", top: "30%", right: "10%", width: 480, height: 480, borderRadius: "50%", background: "rgba(201,168,76,0.055)", filter: "blur(110px)", pointerEvents: "none", zIndex: 1 }} />

      {/* ══════════════════════════════════════════
          MAIN GRID — fills full height
      ══════════════════════════════════════════ */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gridTemplateRows: "1fr auto",
          columnGap: "3rem",
          alignItems: "center",
          maxWidth: 1400,
          width: "100%",
          margin: "0 auto",
          padding: "0 5rem",
          paddingTop: "7rem",   /* below navbar */
          paddingBottom: "5rem",
          boxSizing: "border-box",
        }}
        className="hero-grid"
      >

        {/* ══ LEFT: copy + search + stats ══ */}
        <div style={{ gridColumn: 1, gridRow: "1 / 3", display: "flex", flexDirection: "column", justifyContent: "center" }}>

          {/* eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}
          >
            <div style={{ width: 32, height: 1.5, background: "#c9a84c", flexShrink: 0 }} />
            <span style={{ fontSize: 9, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.48em", color: "#c9a84c" }}>
              NCR&apos;s Definitive Luxury Advisory
            </span>
          </motion.div>

          {/* headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
            style={{
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 0.88,
              letterSpacing: "-0.03em",
              marginBottom: 20,
              fontSize: "clamp(2.8rem, 7.5vw, 6.8rem)",
            }}
          >
            <span style={{ color: "#fff", display: "block" }}>Where</span>
            <span
              style={{
                display: "block",
                backgroundImage: "linear-gradient(135deg,#c9a84c 0%,#f5d78e 50%,#c9a84c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Legacy
            </span>
            <span style={{ color: "rgba(255,255,255,0.92)", display: "block" }}>Meets Land.</span>
          </motion.h1>

          {/* sub */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.8 }}
            style={{
              color: "rgba(255,255,255,0.48)",
              fontSize: 13.5,
              lineHeight: 1.7,
              fontWeight: 300,
              letterSpacing: "0.02em",
              maxWidth: 340,
              marginBottom: 24,
            }}
          >
            Strategic advisory for high-yield commercial assets and elite
            residential estates in Greater Noida &amp; NCR.
          </motion.p>

          {/* ── search ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.85 }}
            style={{ maxWidth: 580, marginBottom: 32 }}
          >
            {/* tabs */}
            <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{
                    padding: "7px 18px",
                    borderRadius: 999,
                    fontSize: 9.5,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.22em",
                    cursor: "pointer",
                    transition: "all .3s",
                    border: active === cat ? "none" : "1px solid rgba(255,255,255,0.13)",
                    background: active === cat ? "#c9a84c" : "rgba(255,255,255,0.07)",
                    color: active === cat ? "#04241b" : "rgba(255,255,255,0.58)",
                    boxShadow: active === cat ? "0 6px 20px rgba(201,168,76,0.38)" : "none",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* bar */}
            <div
              style={{
                display: "flex",
                alignItems: "stretch",
                gap: 8,
                padding: 8,
                borderRadius: 16,
                background: "rgba(3,26,19,0.84)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(24px)",
                boxShadow: "0 20px 56px rgba(0,0,0,0.44)",
              }}
            >
              {/* inner */}
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  alignItems: "stretch",
                  borderRadius: 12,
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  minWidth: 0,
                }}
              >
                {/* search field */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, padding: "10px 16px", minWidth: 0 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(201,168,76,0.14)", border: "1px solid rgba(201,168,76,0.26)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Search size={13} color="#c9a84c" />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 7.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.3em", color: "rgba(255,255,255,0.45)", marginBottom: 3 }}>Search inventory</p>
                    <input
                      type="text"
                      placeholder={`Search premium ${active.toLowerCase()}…`}
                      style={{ background: "transparent", border: "none", outline: "none", fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.88)", width: "100%" }}
                    />
                  </div>
                </div>

                {/* divider */}
                <div style={{ width: 1, background: "rgba(255,255,255,0.09)", margin: "10px 0", flexShrink: 0 }} />

                {/* location */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 16px", flexShrink: 0 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.13)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <MapPin size={13} color="#c9a84c" />
                  </div>
                  <div>
                    <p style={{ fontSize: 7.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.3em", color: "rgba(255,255,255,0.45)", marginBottom: 3 }}>Location</p>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.86)", whiteSpace: "nowrap" }}>Greater Noida</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  padding: "0 22px",
                  borderRadius: 12,
                  background: "#c9a84c",
                  color: "#04241b",
                  fontSize: 9, fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  cursor: "pointer",
                  border: "none",
                  boxShadow: "0 10px 28px rgba(201,168,76,0.32)",
                  transition: "all .3s",
                }}
              >
                Find Property <ArrowUpRight size={13} />
              </button>
            </div>
          </motion.div>

          {/* ── stats ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            style={{ display: "flex", alignItems: "center" }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingRight: "2rem",
                  paddingLeft: i !== 0 ? "2rem" : 0,
                  borderLeft: i !== 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
                }}
              >
                <span style={{ fontSize: "clamp(1.2rem,2vw,1.6rem)", fontWeight: 900, color: "#fff", lineHeight: 1, marginBottom: 5 }}>
                  {s.value}
                </span>
                <span style={{ fontSize: 7.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.22em", color: "rgba(255,255,255,0.32)", whiteSpace: "nowrap" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ══ RIGHT: featured card ══ */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          style={{ gridColumn: 2, gridRow: "1 / 3", alignSelf: "center" }}
        >
          <div
            className="featured-card-hover"
            style={{
              width: 280,
              cursor: "pointer",
              position: "relative",
              borderRadius: 24,
              overflow: "hidden",
              background: "linear-gradient(160deg,rgba(13,51,38,0.97) 0%,rgba(3,26,19,0.99) 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 40px 80px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.05)",
              transition: "transform .5s cubic-bezier(.16,1,.3,1)",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-6px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            {/* gold top stripe */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2.5, background: "linear-gradient(90deg,#c9a84c 0%,#f5d78e 50%,#c9a84c 100%)", zIndex: 2 }} />

            {/* ambient radial */}
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 65% 40% at 85% 0%,rgba(201,168,76,0.12) 0%,transparent 70%)", pointerEvents: "none", zIndex: 1 }} />

            <div style={{ padding: "22px 20px 18px", position: "relative", zIndex: 2 }}>

              {/* header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 10px", borderRadius: 999, background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#c9a84c" }} />
                  <span style={{ fontSize: 7.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.26em", color: "#c9a84c" }}>Featured</span>
                </div>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <ArrowUpRight size={13} color="rgba(255,255,255,0.65)" />
                </div>
              </div>

              {/* name */}
              <div style={{ marginBottom: 6 }}>
                <p style={{ fontSize: 26, fontWeight: 900, color: "#fff", lineHeight: 1, letterSpacing: "-0.03em" }}>The Legacy</p>
                <p style={{ fontSize: 26, fontWeight: 900, lineHeight: 1, letterSpacing: "-0.03em", backgroundImage: "linear-gradient(135deg,#c9a84c 0%,#f5d78e 50%,#c9a84c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Estate
                </p>
              </div>

              {/* location */}
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
                <MapPin size={11} color="rgba(201,168,76,0.65)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: 10, fontWeight: 500, color: "rgba(255,255,255,0.4)", letterSpacing: "0.02em" }}>Sector 150, Greater Noida</span>
              </div>

              {/* divider */}
              <div style={{ height: 1, background: "rgba(255,255,255,0.07)", marginBottom: 14 }} />

              {/* stat chips */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, marginBottom: 14 }}>
                {[
                  { v: "3–5 BHK", l: "Config",   gold: false },
                  { v: "₹2.8Cr+", l: "Starting", gold: true  },
                  { v: "Q4 '25",  l: "Possess",  gold: false },
                ].map(({ v, l, gold }) => (
                  <div
                    key={l}
                    style={{
                      padding: "10px 6px",
                      borderRadius: 10,
                      textAlign: "center",
                      background: gold ? "rgba(201,168,76,0.09)" : "rgba(0,0,0,0.22)",
                      border: gold ? "1px solid rgba(201,168,76,0.24)" : "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <span
                      style={
                        gold
                          ? { display: "block", fontSize: 11, fontWeight: 700, lineHeight: 1, marginBottom: 4, backgroundImage: "linear-gradient(135deg,#c9a84c,#f5d78e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }
                          : { display: "block", fontSize: 11, fontWeight: 700, lineHeight: 1, marginBottom: 4, color: "#fff" }
                      }
                    >
                      {v}
                    </span>
                    <span style={{ fontSize: 7, textTransform: "uppercase", letterSpacing: "0.12em", color: gold ? "rgba(201,168,76,0.45)" : "rgba(255,255,255,0.28)" }}>
                      {l}
                    </span>
                  </div>
                ))}
              </div>

              {/* image */}
              <div style={{ position: "relative", borderRadius: 10, overflow: "hidden", height: 90, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", marginBottom: 14 }}>
                <img
                  src="/images/legacy-estate.jpg"
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.58, transition: "all .6s" }}
                  onError={(e) => { e.target.style.display = "none"; }}
                />
                {/* fallback label */}
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                  <span style={{ fontSize: 7.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(255,255,255,0.12)" }}>Property Preview</span>
                </div>
                {/* RERA */}
                <div style={{ position: "absolute", bottom: 8, left: 8, display: "flex", alignItems: "center", gap: 4, padding: "4px 8px", borderRadius: 999, background: "rgba(3,26,19,0.9)", border: "1px solid rgba(201,168,76,0.22)", backdropFilter: "blur(8px)" }}>
                  <ShieldCheck size={9} color="#c9a84c" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: 6.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: "#c9a84c" }}>RERA Approved</span>
                </div>
              </div>

              {/* footer */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                <span style={{ fontSize: 7.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(255,255,255,0.25)" }}>Previews open now</span>
                <span style={{ fontSize: 7.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "#c9a84c" }}>View details</span>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
      {/* ── end main grid ── */}

      {/* scroll indicator */}
      <motion.div
        style={{ opacity: opScroll, position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", zIndex: 20, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, pointerEvents: "none" }}
      >
        <span style={{ fontSize: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.4em", color: "rgba(255,255,255,0.22)" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={14} color="rgba(255,255,255,0.22)" />
        </motion.div>
      </motion.div>

      {/* responsive breakpoint — stack on mobile */}
      <style>{`
        @media (max-width: 1023px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto auto !important;
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
            padding-top: 6rem !important;
            gap: 3rem !important;
          }
          .hero-grid > *:first-child { grid-column: 1 !important; grid-row: 1 !important; }
          .hero-grid > *:last-child  { grid-column: 1 !important; grid-row: 2 !important; width: 100% !important; }
          .hero-grid > *:last-child > div { width: 100% !important; }
        }
        @media (max-width: 640px) {
          .hero-grid { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
        }
      `}</style>
    </section>
  );
}
