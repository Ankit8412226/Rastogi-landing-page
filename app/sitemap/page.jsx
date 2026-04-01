import Link from "next/link";
import PremiumRouteShell from "../components/PremiumRouteShell";
import SiteScaffold from "../components/SiteScaffold";
import { areas, footerMetaPages, properties, stories } from "../lib/site-data";

export default function SitemapPage() {
  return (
    <SiteScaffold showLeadCapture={false}>
      <PremiumRouteShell>
        <div className="premium-route-header premium-route-header-left">
          <div className="premium-route-kicker">
            <span className="premium-route-kicker-line" />
            <span className="premium-route-kicker-text">Site Map</span>
            <span className="premium-route-kicker-line" />
          </div>

          <h1 className="premium-route-title">
            Route <span className="premium-route-title-accent">Index</span>
          </h1>

          <p className="premium-route-copy">
            The route index now uses the same soft luxury system as the landing page instead of a
            plain list view.
          </p>
        </div>

        <div className="premium-route-grid premium-route-grid-2">
          <div className="premium-route-card premium-route-card-interactive">
            <div className="premium-route-body">
              <h2 className="premium-route-card-title">Properties</h2>
              <ul className="premium-route-link-list">
                <li>
                  <Link href="/properties" className="premium-route-link">
                    All Listings
                  </Link>
                </li>
                {properties.map((property) => (
                  <li key={property.slug}>
                    <Link href={`/properties/${property.slug}`} className="premium-route-link">
                      {property.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="premium-route-card premium-route-card-interactive">
            <div className="premium-route-body">
              <h2 className="premium-route-card-title">Insights</h2>
              <ul className="premium-route-link-list">
                <li>
                  <Link href="/insights" className="premium-route-link">
                    Knowledge Hub
                  </Link>
                </li>
                {stories.map((story) => (
                  <li key={story.slug}>
                    <Link href={`/insights/${story.slug}`} className="premium-route-link">
                      {story.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="premium-route-card premium-route-card-interactive">
            <div className="premium-route-body">
              <h2 className="premium-route-card-title">Locations</h2>
              <ul className="premium-route-link-list">
                {areas.map((area) => (
                  <li key={area.slug}>
                    <Link href={`/locations/${area.slug}`} className="premium-route-link">
                      {area.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/reports/regional-report" className="premium-route-link">
                    Regional Report
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="premium-route-card premium-route-card-interactive">
            <div className="premium-route-body">
              <h2 className="premium-route-card-title">Utility Pages</h2>
              <ul className="premium-route-link-list">
                <li>
                  <Link href="/reports/market-forecast" className="premium-route-link">
                    Market Forecast
                  </Link>
                </li>
                {footerMetaPages.map((page) => (
                  <li key={page.slug}>
                    <Link href={page.href} className="premium-route-link">
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="premium-route-actions" style={{ marginTop: "2rem" }}>
          <Link href="/" className="premium-route-btn-primary">
            Back to Home
          </Link>
        </div>
      </PremiumRouteShell>
    </SiteScaffold>
  );
}
