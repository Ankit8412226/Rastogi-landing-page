"use client";

import Image from "next/image";
import Link from "next/link";
import { footerMetaPages, socialLinks } from "../lib/site-data";

const links = [
  { name: "Exclusive Residences", href: "/properties?category=residential" },
  { name: "Commercial Spaces", href: "/properties?category=commercial" },
  { name: "The Legacy", href: "/#brand" },
  { name: "Regional Insights", href: "/reports/regional-report" },
  { name: "Contact Advisory", href: "/#contact" },
];

const socials = [
  { label: "IG", href: socialLinks.instagram },
  { label: "LN", href: socialLinks.linkedin },
  { label: "FB", href: socialLinks.facebook },
  { label: "WA", href: socialLinks.whatsapp },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-root {
          width: 100%;
          background: #041a14;
          color: rgba(255, 255, 255, 0.5);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 4rem 0;
        }

        .footer-shell {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }

        .footer-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 3rem;
          margin-bottom: 6rem;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
        }

        .footer-col-brand {
          align-items: flex-start;
          text-align: left;
        }

        .footer-brand {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
          text-decoration: none;
        }

        .footer-brand-mark {
          width: 3.2rem;
          height: 3.2rem;
          padding: 0.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          border: 1px solid rgba(212, 175, 55, 0.35);
          background: rgba(255, 255, 255, 0.96);
          overflow: hidden;
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.16);
        }

        .footer-brand-mark img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .footer-brand-name {
          color: #ffffff;
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: -0.05em;
        }

        .footer-brand-copy {
          max-width: 17.5rem;
          margin: 0 0 2.5rem;
          color: rgba(255, 255, 255, 0.52);
          font-size: 0.95rem;
          line-height: 1.8;
        }

        .footer-socials {
          display: flex;
          gap: 1rem;
        }

        .footer-social {
          position: relative;
          width: 2.75rem;
          height: 2.75rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.72);
          font-size: 0.625rem;
          font-weight: 700;
          text-decoration: none;
          transition:
            transform 0.35s ease,
            background 0.35s ease,
            color 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .footer-social::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.28), transparent);
          transition: left 0.6s ease;
        }

        .footer-social:hover {
          transform: translateY(-4px) scale(1.04);
          background: linear-gradient(135deg, #d4af37 0%, #bf9460 100%);
          border-color: rgba(212, 175, 55, 0.65);
          color: #ffffff;
          box-shadow: 0 18px 34px rgba(212, 175, 55, 0.22);
        }

        .footer-social:hover::before {
          left: 100%;
        }

        .footer-heading {
          margin: 0 0 2.5rem;
          color: #d4af37;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3em;
        }

        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .footer-nav-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          width: fit-content;
          color: rgba(255, 255, 255, 0.72);
          font-size: 0.92rem;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .footer-nav-link::before {
          content: "";
          width: 0;
          height: 1px;
          background: #d4af37;
          transition: width 0.3s ease;
        }

        .footer-nav-link:hover {
          color: #ffffff;
          transform: translateX(4px);
        }

        .footer-nav-link:hover::before {
          width: 0.9rem;
        }

        .footer-address {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .footer-address-copy {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          font-size: 0.92rem;
          line-height: 1.8;
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .footer-contact-label {
          color: rgba(255, 255, 255, 0.22);
          font-size: 0.625rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        .footer-contact-link {
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .footer-contact-link:hover {
          color: #d4af37;
          transform: translateX(3px);
        }

        .footer-accreditation {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-badge {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1rem;
          width: 100%;
          padding: 1rem 1.25rem;
          border-radius: 1.25rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            background 0.35s ease,
            box-shadow 0.35s ease;
        }

        .footer-badge:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(212, 175, 55, 0.25);
          box-shadow: 0 18px 34px rgba(0, 0, 0, 0.16);
        }

        .footer-badge-icon {
          width: 2.5rem;
          height: 2.5rem;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: #064e3b;
          color: #d4af37;
          font-size: 1.1rem;
        }

        .footer-badge-title {
          margin: 0 0 0.2rem;
          color: #ffffff;
          font-size: 0.625rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
        }

        .footer-badge-copy {
          margin: 0;
          color: rgba(255, 255, 255, 0.32);
          font-size: 0.56rem;
          text-transform: uppercase;
          letter-spacing: 0.18em;
        }

        .footer-bottom {
          width: 100%;
          padding-top: 3rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        .footer-bottom-copy {
          margin: 0;
          color: rgba(255, 255, 255, 0.2);
          font-size: 0.78rem;
          font-weight: 500;
          line-height: 1.7;
          letter-spacing: 0.02em;
        }

        .footer-bottom-separator {
          display: inline-block;
          margin: 0 1rem;
          opacity: 0.1;
        }

        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .footer-bottom-link {
          color: rgba(255, 255, 255, 0.65);
          font-size: 0.625rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          text-decoration: none;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .footer-bottom-link:hover {
          color: #ffffff;
          transform: translateY(-1px);
        }

        @media (min-width: 768px) {
          .footer-root {
            padding: 5rem 0;
          }

          .footer-shell {
            padding: 0 2.5rem;
          }
        }

        @media (min-width: 1280px) {
          .footer-root {
            padding: 6rem 0;
          }

          .footer-shell {
            padding: 0 5rem;
          }
        }

        @media (max-width: 1199px) {
          .footer-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 3rem;
          }
        }

        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            margin-bottom: 3rem;
          }

          .footer-col {
            align-items: center;
            text-align: center;
          }

          .footer-col-brand {
            align-items: center;
            text-align: center;
          }

          .footer-brand-copy {
            margin-bottom: 2rem;
          }

          .footer-nav-link,
          .footer-contact-link {
            width: fit-content;
          }

          .footer-address,
          .footer-contact,
          .footer-accreditation {
            align-items: center;
          }

          .footer-badge {
            max-width: 22rem;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .footer-bottom-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.25rem;
          }

          .footer-bottom-separator {
            display: none;
          }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-shell">
          <div className="footer-grid">
            <div className="footer-col footer-col-brand">
              <Link href="/" className="footer-brand">
                <div className="footer-brand-mark">
                  <Image
                    src="/images/Rustamlogo.jpeg"
                    alt="Rastogi logo"
                    width={48}
                    height={48}
                  />
                </div>
                <span className="footer-brand-name">RASTOGI</span>
              </Link>

              <p className="footer-brand-copy">
                Greater Noida&apos;s premier luxury real estate advisory since 2007. We curate
                distinguished portfolios and execute elite asset acquisitions.
              </p>

              <div className="footer-socials">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="footer-social"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${social.label}`}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Navigation</h4>
              <ul className="footer-nav">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="footer-nav-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Headquarters</h4>
              <div className="footer-address">
                <p className="footer-address-copy">
                  702, Om Tower, Floor 7 <br />
                  Alpha-1 Commercial Belt, Greater Noida <br />
                  Uttar Pradesh, India 201310
                </p>

                <div className="footer-contact">
                  <span className="footer-contact-label">Client Direct</span>
                  <a href="tel:+919810354215" className="footer-contact-link">
                    +91 98103 54215
                  </a>
                  <a
                    href="mailto:rastogipropertiesindia@gmail.com"
                    className="footer-contact-link"
                    style={{ fontSize: "0.82rem", opacity: 0.8, marginTop: "4px" }}
                  >
                    rastogipropertiesindia@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Accreditation</h4>
              <div className="footer-accreditation">
                <div className="footer-badge">
                  <div className="footer-badge-icon">✓</div>
                  <div>
                    <p className="footer-badge-title">RERA Registered</p>
                    <p className="footer-badge-copy">UPRERA12345678</p>
                  </div>
                </div>

                <div className="footer-badge">
                  <div className="footer-badge-icon">🏆</div>
                  <div>
                    <p className="footer-badge-title">Award Winning</p>
                    <p className="footer-badge-copy">Best Advisory 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-bottom-copy">
              © {new Date().getFullYear()} Rastogi Properties. Leading with Integrity since 2007.
              <span className="footer-bottom-separator">|</span>
              Proudly Made in Bharat.
            </p>

            <div className="footer-bottom-links">
              {footerMetaPages.map((page) => (
                <Link key={page.slug} href={page.href} className="footer-bottom-link">
                  {page.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
