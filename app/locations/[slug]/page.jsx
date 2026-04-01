import Link from "next/link";
import { notFound } from "next/navigation";
import PremiumRouteShell from "../../components/PremiumRouteShell";
import SiteScaffold from "../../components/SiteScaffold";
import { areas } from "../../lib/site-data";

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export default async function LocationDetailPage({ params }) {
  const { slug } = await params;
  const area = areas.find((item) => item.slug === slug);

  if (!area) {
    notFound();
  }

  return (
    <SiteScaffold>
      <PremiumRouteShell>
        <div className="premium-route-header premium-route-header-left">
          <div className="premium-route-kicker">
            <span className="premium-route-kicker-line" />
            <span className="premium-route-kicker-text">Strategic Location</span>
            <span className="premium-route-kicker-line" />
          </div>

          <div className="premium-route-header-bar">
            <div className="premium-route-stack">
              <h1 className="premium-route-title">
                {area.name} <span className="premium-route-title-accent">Corridor</span>
              </h1>
              <p className="premium-route-copy">{area.summary}</p>
            </div>

            <div className="premium-route-chip">{area.stats}</div>
          </div>
        </div>

        <div className="premium-route-grid premium-route-split">
          <article className="premium-route-card premium-route-card-interactive">
            <div className="premium-route-media">
              <img src={area.image} alt={area.name} />
              <div className="premium-route-media-overlay" />
              <div className="premium-route-badge">{area.tagline}</div>
            </div>

            <div className="premium-route-body premium-route-body-lg">
              <div className="premium-route-detail-grid">
                <div className="premium-route-detail">
                  <span className="premium-route-detail-label">Entry Price</span>
                  <span className="premium-route-detail-value">{area.price}</span>
                </div>
                <div className="premium-route-detail">
                  <span className="premium-route-detail-label">Key Stat</span>
                  <span className="premium-route-detail-value">{area.stats}</span>
                </div>
              </div>

              <ul className="premium-route-list">
                {area.bullets.map((bullet) => (
                  <li key={bullet} className="premium-route-list-item">
                    <span className="premium-route-list-dot" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <aside className="premium-route-card premium-route-card-dark">
            <div className="premium-route-body premium-route-body-lg">
              <p className="premium-route-note">Regional Advisory</p>
              <h2 className="premium-route-card-title">Move from overview to action.</h2>
              <p className="premium-route-card-copy">
                Keep this route as the future home for deeper location intelligence, downloadable
                PDFs, and corridor-specific investment commentary.
              </p>

              <div className="premium-route-actions">
                <Link href="/reports/regional-report" className="premium-route-btn-primary">
                  Open Regional Report
                </Link>
                <Link href="/#contact" className="premium-route-btn-secondary">
                  Request Advisory Call
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </PremiumRouteShell>
    </SiteScaffold>
  );
}
