"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronDown, MapPin, Search, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { properties } from "../lib/site-data";

const stats = [
  { label: "Years of Trust", value: "18+" },
  { label: "Happy Families", value: "2,400+" },
  { label: "Projects Done", value: "340+" },
  { label: "Satisfaction", value: "96%" },
];

const categories = ["Residential", "Commercial", "Plots"];

const featuredHighlights = [
  { value: "3-5 BHK", label: "Config" },
  { value: "₹2.8Cr+", label: "Starting", accent: true },
  { value: "Q4 '25", label: "Possess" },
];

export default function Hero() {
  const ref = useRef(null);
  const router = useRouter();
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 600], [0, 160]);
  const opScroll = useTransform(scrollY, [0, 300], [1, 0]);
  const [active, setActive] = useState("Residential");
  const [searchQuery, setSearchQuery] = useState("");
  const featuredProperty =
    properties.find((property) => property.category === "residential") ?? properties[0];
  const featuredTitleParts = featuredProperty.title.split(" & ");
  const featuredTitle = featuredTitleParts[0];
  const featuredAccent = featuredTitleParts.slice(1).join(" & ");

  const handleSearch = (event) => {
    event.preventDefault();

    const params = new URLSearchParams();
    params.set("category", active.toLowerCase());

    if (searchQuery.trim()) {
      params.set("query", searchQuery.trim());
    }

    router.push(`/properties?${params.toString()}`);
  };

  return (
    <>
      <style>{`
        .hero-root {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          background: #050f0a;
          display: flex;
          flex-direction: column;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          top: -5rem;
          bottom: -5rem;
          z-index: 0;
          pointer-events: none;
        }

        .hero-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.1);
        }

        .hero-bg-overlay-primary,
        .hero-bg-overlay-secondary,
        .hero-grid-lines {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .hero-orb {
          position: absolute;
          pointer-events: none;
        }

        .hero-bg-overlay-primary {
          background: linear-gradient(90deg, rgba(4, 36, 27, 0.96) 0%, rgba(4, 36, 27, 0.78) 55%, rgba(4, 36, 27, 0.42) 100%);
        }

        .hero-bg-overlay-secondary {
          background: linear-gradient(0deg, rgba(4, 36, 27, 1) 0%, transparent 40%, rgba(4, 36, 27, 0.28) 100%);
        }

        .hero-grid-lines {
          z-index: 1;
        }

        .hero-grid-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255, 255, 255, 0.025);
        }

        .hero-orb {
          top: 30%;
          right: 10%;
          width: 30rem;
          height: 30rem;
          border-radius: 999px;
          background: rgba(201, 168, 76, 0.055);
          filter: blur(110px);
          z-index: 1;
        }

        .hero-shell {
          position: relative;
          z-index: 10;
          flex: 1;
          min-height: 100vh;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 7rem 5rem 5rem;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(17.5rem, 20rem);
          gap: clamp(2rem, 4vw, 4.5rem);
          align-items: center;
          box-sizing: border-box;
        }

        .hero-copy {
          min-width: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .hero-eyebrow-line {
          width: 2rem;
          height: 1.5px;
          background: #c9a84c;
          flex-shrink: 0;
        }

        .hero-eyebrow-text {
          font-size: 0.56rem;
          font-weight: 800;
          letter-spacing: 0.48em;
          text-transform: uppercase;
          color: #c9a84c;
        }

        .hero-title {
          margin: 0 0 1.25rem;
          max-width: none;
          width: fit-content;
          font-size: clamp(2.2rem, 5.2vw, 4.65rem);
          font-weight: 900;
          line-height: 0.94;
          letter-spacing: -0.03em;
        }

        .hero-title-line {
          display: flex;
          align-items: baseline;
          gap: 0.16em;
          white-space: nowrap;
        }

        .hero-title-line-bottom {
          display: block;
          white-space: nowrap;
        }

        .hero-title-white {
          color: #ffffff;
          text-transform: uppercase;
        }

        .hero-title-white-muted {
          color: rgba(255, 255, 255, 0.92);
          text-transform: uppercase;
        }

        .hero-title-accent {
          background-image: linear-gradient(135deg, #c9a84c 0%, #f5d78e 50%, #c9a84c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          text-transform: uppercase;
        }

        .hero-description {
          max-width: 21.25rem;
          margin: 0 0 1.5rem;
          color: rgba(255, 255, 255, 0.48);
          font-size: 0.845rem;
          line-height: 1.7;
          font-weight: 300;
          letter-spacing: 0.02em;
        }

        .hero-search-shell {
          width: min(100%, 36.25rem);
          margin-bottom: 2rem;
        }

        .hero-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 0.625rem;
        }

        .hero-tab {
          padding: 0.45rem 1.125rem;
          border-radius: 999px;
          font-size: 0.6rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.13);
          background: rgba(255, 255, 255, 0.07);
          color: rgba(255, 255, 255, 0.58);
        }

        .hero-tab-active {
          border-color: transparent;
          background: #c9a84c;
          color: #04241b;
          box-shadow: 0 6px 20px rgba(201, 168, 76, 0.38);
        }

        .hero-search-bar {
          display: flex;
          align-items: stretch;
          gap: 0.5rem;
          padding: 0.5rem;
          border-radius: 1rem;
          background: rgba(3, 26, 19, 0.84);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(24px);
          box-shadow: 0 20px 56px rgba(0, 0, 0, 0.44);
        }

        .hero-search-fields {
          display: flex;
          flex: 1;
          align-items: stretch;
          min-width: 0;
          border-radius: 0.75rem;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.09);
        }

        .hero-search-field {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.625rem 1rem;
          min-width: 0;
        }

        .hero-search-field-main {
          flex: 1;
        }

        .hero-search-field-location {
          flex-shrink: 0;
        }

        .hero-icon-box,
        .hero-location-icon {
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 0.625rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hero-icon-box {
          background: rgba(201, 168, 76, 0.14);
          border: 1px solid rgba(201, 168, 76, 0.26);
        }

        .hero-location-icon {
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.13);
        }

        .hero-field-copy {
          min-width: 0;
          flex: 1;
        }

        .hero-field-label {
          display: block;
          margin-bottom: 0.1875rem;
          font-size: 0.47rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: rgba(255, 255, 255, 0.45);
        }

        .hero-search-input {
          width: 100%;
          background: transparent;
          border: none;
          outline: none;
          color: rgba(255, 255, 255, 0.88);
          font-size: 0.8125rem;
          font-weight: 500;
        }

        .hero-search-input::placeholder {
          color: rgba(255, 255, 255, 0.48);
        }

        .hero-location-value {
          font-size: 0.8125rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.86);
          white-space: nowrap;
        }

        .hero-search-divider {
          width: 1px;
          margin: 0.625rem 0;
          background: rgba(255, 255, 255, 0.09);
          flex-shrink: 0;
        }

        .hero-search-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.375rem;
          padding: 0 1.375rem;
          border: none;
          border-radius: 0.75rem;
          cursor: pointer;
          white-space: nowrap;
          background: #c9a84c;
          color: #04241b;
          font-size: 0.56rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          box-shadow: 0 10px 28px rgba(201, 168, 76, 0.32);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        .hero-search-cta::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: all 0.6s;
          z-index: 0;
        }

        .hero-search-cta > * {
          position: relative;
          z-index: 1;
        }

        .hero-search-cta:hover::before {
          left: 100%;
        }

        .hero-search-cta:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 40px rgba(212, 175, 55, 0.4);
        }

        .hero-stats {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
        }

        .hero-stat {
          display: flex;
          flex-direction: column;
          padding-right: 2rem;
          padding-left: 2rem;
          border-left: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hero-stat-first {
          padding-left: 0;
          border-left: none;
        }

        .hero-stat-value {
          margin-bottom: 0.3125rem;
          font-size: clamp(1.2rem, 2vw, 1.6rem);
          font-weight: 900;
          line-height: 1;
          color: #ffffff;
        }

        .hero-stat-label {
          font-size: 0.47rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: rgba(255, 255, 255, 0.32);
          white-space: nowrap;
        }

        .hero-card-wrap {
          width: 100%;
          display: flex;
          justify-content: flex-end;
        }

        .hero-card {
          position: relative;
          width: min(100%, 20rem);
          display: block;
          border-radius: 1.5rem;
          overflow: hidden;
          cursor: pointer;
          background: linear-gradient(160deg, rgba(13, 51, 38, 0.97) 0%, rgba(3, 26, 19, 0.99) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.05);
          color: inherit;
          text-decoration: none;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease;
        }

        .hero-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 48px 86px rgba(0, 0, 0, 0.72), inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .hero-card-top-stripe {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2.5px;
          background: linear-gradient(90deg, #c9a84c 0%, #f5d78e 50%, #c9a84c 100%);
          z-index: 2;
        }

        .hero-card-ambient {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 65% 40% at 85% 0%, rgba(201, 168, 76, 0.12) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        .hero-card-content {
          position: relative;
          z-index: 2;
          padding: 1.375rem 1.25rem 1.125rem;
        }

        .hero-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .hero-card-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.3125rem 0.625rem;
          border-radius: 999px;
          background: rgba(201, 168, 76, 0.1);
          border: 1px solid rgba(201, 168, 76, 0.2);
        }

        .hero-card-badge-dot {
          width: 0.375rem;
          height: 0.375rem;
          border-radius: 999px;
          background: #c9a84c;
        }

        .hero-card-badge-text {
          font-size: 0.47rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.26em;
          color: #c9a84c;
        }

        .hero-card-icon {
          width: 2rem;
          height: 2rem;
          border-radius: 0.625rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          flex-shrink: 0;
        }

        .hero-card-title-wrap {
          margin-bottom: 0.375rem;
        }

        .hero-card-title,
        .hero-card-title-accent {
          font-size: 1.625rem;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.03em;
        }

        .hero-card-title {
          color: #ffffff;
        }

        .hero-card-title-accent {
          background-image: linear-gradient(135deg, #c9a84c 0%, #f5d78e 50%, #c9a84c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        .hero-card-location {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          margin-bottom: 1rem;
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.625rem;
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        .hero-card-divider {
          height: 1px;
          margin-bottom: 0.875rem;
          background: rgba(255, 255, 255, 0.07);
        }

        .hero-card-highlights {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.375rem;
          margin-bottom: 0.875rem;
        }

        .hero-card-highlight {
          padding: 0.625rem 0.375rem;
          border-radius: 0.625rem;
          text-align: center;
          background: rgba(0, 0, 0, 0.22);
          border: 1px solid rgba(255, 255, 255, 0.07);
        }

        .hero-card-highlight-accent {
          background: rgba(201, 168, 76, 0.09);
          border-color: rgba(201, 168, 76, 0.24);
        }

        .hero-card-highlight-value,
        .hero-card-highlight-value-accent {
          display: block;
          margin-bottom: 0.25rem;
          font-size: 0.6875rem;
          font-weight: 700;
          line-height: 1;
        }

        .hero-card-highlight-value {
          color: #ffffff;
        }

        .hero-card-highlight-value-accent {
          background-image: linear-gradient(135deg, #c9a84c, #f5d78e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        .hero-card-highlight-label,
        .hero-card-highlight-label-accent {
          font-size: 0.4375rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .hero-card-highlight-label {
          color: rgba(255, 255, 255, 0.28);
        }

        .hero-card-highlight-label-accent {
          color: rgba(201, 168, 76, 0.45);
        }

        .hero-card-image {
          position: relative;
          height: 5.75rem;
          margin-bottom: 0.875rem;
          border-radius: 0.625rem;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
        }

        .hero-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.58;
          transition: transform 0.6s ease, opacity 0.6s ease;
        }

        .hero-card:hover .hero-card-image img {
          transform: scale(1.05);
          opacity: 0.7;
        }

        .hero-card-preview {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .hero-card-preview-text {
          font-size: 0.47rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: rgba(255, 255, 255, 0.12);
        }

        .hero-card-rera {
          position: absolute;
          left: 0.5rem;
          bottom: 0.5rem;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.25rem 0.5rem;
          border-radius: 999px;
          background: rgba(3, 26, 19, 0.9);
          border: 1px solid rgba(201, 168, 76, 0.22);
          backdrop-filter: blur(8px);
        }

        .hero-card-rera-text {
          font-size: 0.41rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: #c9a84c;
        }

        .hero-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .hero-card-footer-label {
          font-size: 0.47rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: rgba(255, 255, 255, 0.25);
        }

        .hero-card-footer-link {
          font-size: 0.47rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #c9a84c;
        }

        .hero-scroll {
          position: absolute;
          left: 50%;
          bottom: 1.75rem;
          z-index: 20;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.375rem;
          transform: translateX(-50%);
          pointer-events: none;
        }

        .hero-scroll-text {
          font-size: 0.5rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.4em;
          color: rgba(255, 255, 255, 0.22);
        }

        @media (max-width: 1279px) {
          .hero-shell {
            padding-left: 3rem;
            padding-right: 3rem;
            grid-template-columns: minmax(0, 1fr) minmax(16rem, 18.5rem);
          }
        }

        @media (max-width: 1023px) {
          .hero-shell {
            min-height: auto;
            padding: 6.5rem 1.5rem 4rem;
            grid-template-columns: minmax(0, 1fr);
            justify-items: center;
            gap: 2.75rem;
          }

          .hero-copy {
            width: min(100%, 44rem);
            align-items: center;
            text-align: center;
          }

          .hero-title {
            width: auto;
          }

          .hero-title-line {
            justify-content: center;
          }

          .hero-eyebrow {
            justify-content: center;
          }

          .hero-description {
            max-width: 38rem;
          }

          .hero-search-shell {
            width: min(100%, 44rem);
          }

          .hero-tabs {
            justify-content: center;
          }

          .hero-search-bar {
            flex-direction: column;
            align-items: stretch;
          }

          .hero-search-fields {
            flex-direction: column;
          }

          .hero-search-field {
            justify-content: center;
            text-align: center;
          }

          .hero-field-copy {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .hero-search-divider {
            width: calc(100% - 2rem);
            height: 1px;
            margin: 0 auto;
          }

          .hero-search-input {
            text-align: center;
          }

          .hero-search-cta {
            width: 100%;
            min-height: 3.25rem;
          }

          .hero-stats {
            width: 100%;
            justify-content: center;
            gap: 0.875rem;
          }

          .hero-stat,
          .hero-stat-first {
            min-width: 10rem;
            align-items: center;
            padding: 1rem 1.25rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 1rem;
            background: rgba(255, 255, 255, 0.04);
          }

          .hero-card-wrap {
            justify-content: center;
          }

          .hero-card {
            width: min(100%, 24rem);
          }

          .hero-card-content {
            text-align: center;
          }

          .hero-card-header {
            justify-content: center;
          }

          .hero-card-location,
          .hero-card-footer {
            justify-content: center;
          }

          .hero-card-footer {
            flex-direction: column;
          }

          .hero-card-rera {
            left: 50%;
            transform: translateX(-50%);
          }

          .hero-orb {
            right: 50%;
            transform: translateX(50%);
            top: auto;
            bottom: 8%;
          }
        }

        @media (max-width: 767px) {
          .hero-root {
            min-height: auto;
          }

          .hero-shell {
            padding: 6rem 1.25rem 3.5rem;
          }

          .hero-eyebrow-text {
            letter-spacing: 0.3em;
          }

          .hero-title {
            font-size: clamp(1.7rem, 7.8vw, 3rem);
          }

          .hero-title-line {
            gap: 0.12em;
          }

          .hero-description {
            font-size: 0.8125rem;
          }

          .hero-stat,
          .hero-stat-first {
            width: 100%;
            min-width: 0;
          }

          .hero-card-header,
          .hero-card-location {
            flex-direction: column;
          }

          .hero-card-highlights {
            grid-template-columns: 1fr;
          }

          .hero-scroll {
            bottom: 1.25rem;
          }
        }
      `}</style>

      <section ref={ref} className="hero-root">
        <motion.div className="hero-bg" style={{ y: yBg }}>
          <Image
            className="hero-bg-image"
            src="/images/hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-bg-overlay-primary" />
          <div className="hero-bg-overlay-secondary" />
        </motion.div>

        <div className="hero-grid-lines">
          {[20, 40, 60, 80].map((position) => (
            <div
              key={position}
              className="hero-grid-line"
              style={{ left: `${position}%` }}
            />
          ))}
        </div>

        <div className="hero-orb" />

        <div className="hero-shell">
          <div className="hero-copy">
            <motion.div
              className="hero-eyebrow"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="hero-eyebrow-line" />
              <span className="hero-eyebrow-text">NCR&apos;s Definitive Luxury Advisory</span>
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
            >
              <span className="hero-title-line">
                <span className="hero-title-white">Where</span>
                <span className="hero-title-accent">Legacy</span>
              </span>
              <span className="hero-title-line-bottom hero-title-white-muted">Meets Land.</span>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.8 }}
            >
              Strategic advisory for high-yield commercial assets and elite
              residential estates in Greater Noida &amp; NCR.
            </motion.p>

            <motion.div
              className="hero-search-shell"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62, duration: 0.85 }}
            >
              <div className="hero-tabs">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={`hero-tab ${active === category ? "hero-tab-active" : ""}`}
                    onClick={() => setActive(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <form className="hero-search-bar" onSubmit={handleSearch}>
                <div className="hero-search-fields">
                  <div className="hero-search-field hero-search-field-main">
                    <div className="hero-icon-box">
                      <Search size={13} color="#c9a84c" />
                    </div>
                    <div className="hero-field-copy">
                      <span className="hero-field-label">Search inventory</span>
                      <input
                        className="hero-search-input"
                        type="text"
                        placeholder={`Search premium ${active.toLowerCase()}...`}
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                      />
                    </div>
                  </div>

                  <div className="hero-search-divider" />

                  <div className="hero-search-field hero-search-field-location">
                    <div className="hero-location-icon">
                      <MapPin size={13} color="#c9a84c" />
                    </div>
                    <div className="hero-field-copy">
                      <span className="hero-field-label">Location</span>
                      <span className="hero-location-value">Greater Noida</span>
                    </div>
                  </div>
                </div>

                <button type="submit" className="hero-search-cta">
                  <span>Find Property</span>
                  <ArrowUpRight size={13} />
                </button>
              </form>
            </motion.div>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.9 }}
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`hero-stat ${index === 0 ? "hero-stat-first" : ""}`}
                >
                  <span className="hero-stat-value">{stat.value}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="hero-card-wrap"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href={`/properties/${featuredProperty.slug}`} className="hero-card">
              <div className="hero-card-top-stripe" />
              <div className="hero-card-ambient" />

              <div className="hero-card-content">
                <div className="hero-card-header">
                  <div className="hero-card-badge">
                    <div className="hero-card-badge-dot" />
                    <span className="hero-card-badge-text">Featured</span>
                  </div>

                  <div className="hero-card-icon">
                    <ArrowUpRight size={13} color="rgba(255,255,255,0.65)" />
                  </div>
                </div>

                <div className="hero-card-title-wrap">
                  <p className="hero-card-title">{featuredTitle}</p>
                  {featuredAccent ? (
                    <p className="hero-card-title-accent">{featuredAccent}</p>
                  ) : null}
                </div>

                <div className="hero-card-location">
                  <MapPin size={11} color="rgba(201,168,76,0.65)" />
                  <span>{featuredProperty.location}</span>
                </div>

                <div className="hero-card-divider" />

                <div className="hero-card-highlights">
                  {featuredHighlights.map((highlight) => (
                    <div
                      key={highlight.label}
                      className={`hero-card-highlight ${highlight.accent ? "hero-card-highlight-accent" : ""}`}
                    >
                      <span
                        className={
                          highlight.accent
                            ? "hero-card-highlight-value-accent"
                            : "hero-card-highlight-value"
                        }
                      >
                        {highlight.value}
                      </span>
                      <span
                        className={
                          highlight.accent
                            ? "hero-card-highlight-label-accent"
                            : "hero-card-highlight-label"
                        }
                      >
                        {highlight.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="hero-card-image">
                  <Image
                    className="hero-card-image-asset"
                    src={featuredProperty.image}
                    alt={`${featuredProperty.title} preview`}
                    fill
                    sizes="(max-width: 1023px) 24rem, 20rem"
                  />

                  <div className="hero-card-preview">
                    <span className="hero-card-preview-text">Property Preview</span>
                  </div>

                  <div className="hero-card-rera">
                    <ShieldCheck size={9} color="#c9a84c" />
                    <span className="hero-card-rera-text">RERA Approved</span>
                  </div>
                </div>

                <div className="hero-card-footer">
                  <span className="hero-card-footer-label">Previews open now</span>
                  <span className="hero-card-footer-link">View details</span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        <motion.div className="hero-scroll" style={{ opacity: opScroll }}>
          <span className="hero-scroll-text">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={14} color="rgba(255,255,255,0.22)" />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
