"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Residences", href: "/#properties" },
  { name: "Commercial", href: "/properties?category=commercial" },
  { name: "The Legacy", href: "/#brand" },
  { name: "Investment", href: "/reports/market-forecast" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <style>{`
        .nav-root {
          position: fixed;
          top: 0; left: 0; width: 100%;
          z-index: 999;
          padding: 18px 0;
          background: rgba(4,20,15,0.88);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(212,175,55,0.12);
        }

        .nav-inner {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 48px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .nav-logo-monogram {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(212,175,55,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-logo-name {
          font-size: 20px;
          color: #f5f0e8;
        }

        .nav-links {
          display: flex;
          list-style: none;
        }

        .nav-links a {
          padding: 6px 20px;
          color: rgba(245,240,232,0.6);
          text-decoration: none;
        }

        .nav-right {
          display: flex;
          justify-content: flex-end;
          gap: 20px;
        }

        .btn-primary {
          padding: 12px 24px;
          background: #d4af37;
          color: #04140f;
          text-decoration: none;
        }

        .nav-mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
        }

        .nav-mobile-toggle span {
          height: 2px;
          width: 25px;
          background: white;
        }

        /* 🔥 MOBILE OVERLAY */
        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.4);
          backdrop-filter: blur(6px);
          z-index: 998;
        }

        /* 🔥 FULL SCREEN DRAWER */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          height: 100vh;
          width: 100%;
          background: rgba(4,20,15,0.88);
          backdrop-filter: blur(20px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 40px;
          z-index: 999;
          position: relative;
        }

        .mobile-menu a {
          font-size: 28px;
          margin-bottom: 20px;
          color: white;
          text-decoration: none;
        }

        .mobile-menu .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 1024px) {
          .nav-links { display: none; }
          .nav-right .btn-primary { display: none; }
          .nav-mobile-toggle { display: flex; }
          .nav-inner { grid-template-columns: 1fr auto; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="nav-root">
        <div className="nav-inner">

          {/* Logo */}
          <Link className="nav-logo" href="/">
            <div className="nav-logo-monogram">
              <span style={{ color: "#d4af37" }}>R</span>
            </div>
            <span className="nav-logo-name">RASTOGI</span>
          </Link>

          {/* Desktop Links */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>

          {/* Right */}
          <div className="nav-right">
            <Link href="/#contact" className="btn-primary">
              Schedule Viewing
            </Link>

            {/* ✅ Hide when open */}
            {!mobileOpen && (
              <button
                onClick={() => setMobileOpen(true)}
                className="nav-mobile-toggle"
                aria-label="Menu"
              >
                <span />
                <span />
                <span />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* 🔥 MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="mobile-overlay"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Drawer */}
            <motion.div
              className="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
            >
              {/* ❌ CLOSE BUTTON */}
              <button
                onClick={() => setMobileOpen(false)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "30px",
                  fontSize: "28px",
                  color: "#fff",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/#contact"
                className="btn-primary"
                onClick={() => setMobileOpen(false)}
              >
                Schedule Viewing
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
