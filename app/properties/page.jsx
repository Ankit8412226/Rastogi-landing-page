"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import PremiumRouteShell from "../components/PremiumRouteShell";
import SiteScaffold from "../components/SiteScaffold";
import { properties } from "../lib/site-data";

const formatCategory = (value) => {
  if (!value) return "All";
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export default function PropertiesPage() {
  const searchParams = useSearchParams();
  const query = (searchParams.get("query") || "").trim().toLowerCase();
  const category = (searchParams.get("category") || "").trim().toLowerCase();

  const filtered = properties.filter((property) => {
    const matchesCategory = !category || property.category === category;
    const haystack = [
      property.title,
      property.location,
      property.tag,
      property.note,
      property.summary,
      property.detailA,
      property.detailB,
    ]
      .join(" ")
      .toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    return matchesCategory && matchesQuery;
  });

  return (
    <SiteScaffold>
      <PremiumRouteShell>
        <div className="premium-route-header premium-route-header-left">
          <div className="premium-route-kicker">
            <span className="premium-route-kicker-line" />
            <span className="premium-route-kicker-text">Property Index</span>
            <span className="premium-route-kicker-line" />
          </div>

          <div className="premium-route-header-bar">
            <div className="premium-route-stack">
              <h1 className="premium-route-title">
                {formatCategory(category)} <span className="premium-route-title-accent">Portfolio</span>
              </h1>
              <p className="premium-route-copy">
                Curated routes now carry the same premium tone as the landing page. Browse mock
                inventory, open individual property pages, and test the flow before live APIs are
                integrated.
              </p>
            </div>

            <div className="premium-route-chip">
              {filtered.length} Result{filtered.length === 1 ? "" : "s"}
              {query ? ` for "${query}"` : ""}
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="premium-route-card premium-route-empty">
            <div className="premium-route-body premium-route-body-lg">
              <h2 className="premium-route-empty-title">No matching properties found.</h2>
              <p className="premium-route-copy">
                Try a broader search term, switch the category from the hero section, or reset the
                listing view to inspect the full collection.
              </p>
              <div className="premium-route-actions">
                <Link href="/properties" className="premium-route-btn-primary">
                  Reset Search
                </Link>
                <Link href="/#contact" className="premium-route-btn-secondary">
                  Request Advisory Help
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="premium-route-grid premium-route-grid-3">
            {filtered.map((property) => (
              <article
                key={property.slug}
                className="premium-route-card premium-route-card-interactive"
              >
                <div className="premium-route-media premium-route-media-tall">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                  />
                  <div className="premium-route-media-overlay" />
                  <div className="premium-route-badge">{property.tag}</div>
                </div>

                <div className="premium-route-body">
                  <div className="premium-route-stack">
                    <p className="premium-route-card-kicker">{property.location}</p>
                    <h2 className="premium-route-card-title">{property.title}</h2>
                    <p className="premium-route-card-copy">{property.summary}</p>
                  </div>

                  <div className="premium-route-detail-grid">
                    <div className="premium-route-detail">
                      <span className="premium-route-detail-label">Asset Type</span>
                      <span className="premium-route-detail-value">{property.detailA}</span>
                    </div>
                    <div className="premium-route-detail">
                      <span className="premium-route-detail-label">Positioning</span>
                      <span className="premium-route-detail-value">{property.detailB}</span>
                    </div>
                  </div>

                  <div className="premium-route-divider" />

                  <div className="premium-route-actions">
                    <p className="premium-route-note">{property.price}</p>
                    <Link
                      href={`/properties/${property.slug}`}
                      className="premium-route-btn-primary"
                    >
                      {property.ctaLabel}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </PremiumRouteShell>
    </SiteScaffold>
  );
}
