import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PremiumRouteShell from "../../components/PremiumRouteShell";
import SiteScaffold from "../../components/SiteScaffold";
import { properties } from "../../lib/site-data";

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export default async function PropertyDetailPage({ params }) {
  const { slug } = await params;
  const property = properties.find((item) => item.slug === slug);

  if (!property) {
    notFound();
  }

  return (
    <SiteScaffold>
      <PremiumRouteShell>
        <div className="premium-route-header premium-route-header-left">
          <div className="premium-route-kicker">
            <span className="premium-route-kicker-line" />
            <span className="premium-route-kicker-text">{property.tag}</span>
            <span className="premium-route-kicker-line" />
          </div>

          <div className="premium-route-header-bar">
            <div className="premium-route-stack">
              <h1 className="premium-route-title">
                {property.title} <span className="premium-route-title-accent">Detail</span>
              </h1>
              <p className="premium-route-copy">
                {property.summary} This detail page now uses the same editorial green-and-gold
                language as the landing experience, with consistent CTA treatment and card styling.
              </p>
            </div>

            <div className="premium-route-chip">{property.price}</div>
          </div>
        </div>

        <div className="premium-route-grid premium-route-split">
          <article className="premium-route-card premium-route-card-interactive">
            <div className="premium-route-media">
              <Image
                src={property.image}
                alt={property.title}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 60vw"
              />
              <div className="premium-route-media-overlay" />
              <div className="premium-route-badge">{property.location}</div>
            </div>

            <div className="premium-route-body premium-route-body-lg">
              <div className="premium-route-detail-grid premium-route-detail-grid-3">
                <div className="premium-route-detail">
                  <span className="premium-route-detail-label">Starting From</span>
                  <span className="premium-route-detail-value">{property.price}</span>
                </div>
                <div className="premium-route-detail">
                  <span className="premium-route-detail-label">Asset Type</span>
                  <span className="premium-route-detail-value">{property.detailA}</span>
                </div>
                <div className="premium-route-detail">
                  <span className="premium-route-detail-label">Positioning</span>
                  <span className="premium-route-detail-value">{property.detailB}</span>
                </div>
              </div>

              <div className="premium-route-card premium-route-card-dark">
                <div className="premium-route-body">
                  <p className="premium-route-card-kicker">Why This Asset</p>
                  <ul className="premium-route-list">
                    {property.highlights.map((highlight) => (
                      <li key={highlight} className="premium-route-list-item">
                        <span className="premium-route-list-dot" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>

          <aside className="premium-route-card premium-route-card-dark">
            <div className="premium-route-body premium-route-body-lg">
              <p className="premium-route-note">Private Tour & Advisory Notes</p>
              <h2 className="premium-route-card-title">Next Step</h2>
              <p className="premium-route-card-copy">
                Routing is now live. Later you can attach brochures, inventory feeds, pricing APIs,
                and CRM actions without changing the page structure again.
              </p>

              <div className="premium-route-detail-grid">
                <div className="premium-route-detail">
                  <span className="premium-route-detail-label">Market Note</span>
                  <span className="premium-route-detail-value">{property.note}</span>
                </div>
                <div className="premium-route-detail">
                  <span className="premium-route-detail-label">Tour Flow</span>
                  <span className="premium-route-detail-value">Pre-screened, by appointment</span>
                </div>
              </div>

              <ul className="premium-route-list">
                <li className="premium-route-list-item">
                  <span className="premium-route-list-dot" />
                  <span>Shortlist inventory, discuss suitability, then move to private visit.</span>
                </li>
                <li className="premium-route-list-item">
                  <span className="premium-route-list-dot" />
                  <span>Keep this route as the future home for brochures and live availability.</span>
                </li>
              </ul>

              <div className="premium-route-actions">
                <Link href="/#contact" className="premium-route-btn-primary">
                  Request Private Tour
                </Link>
                <Link href="/properties" className="premium-route-btn-secondary">
                  Back to Listings
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </PremiumRouteShell>
    </SiteScaffold>
  );
}
