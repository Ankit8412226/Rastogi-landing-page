import Link from "next/link";
import PremiumRouteShell from "../../components/PremiumRouteShell";
import SiteScaffold from "../../components/SiteScaffold";
import { areas } from "../../lib/site-data";

export default function RegionalReportPage() {
  return (
    <SiteScaffold>
      <PremiumRouteShell>
        <div className="premium-route-header premium-route-header-left">
          <div className="premium-route-kicker">
            <span className="premium-route-kicker-line" />
            <span className="premium-route-kicker-text">Regional Report 2025</span>
            <span className="premium-route-kicker-line" />
          </div>

          <h1 className="premium-route-title">
            Strategic <span className="premium-route-title-accent">Corridor</span> Snapshot
          </h1>

          <p className="premium-route-copy">
            This placeholder report route now shares the same visual system as the landing page,
            so future gated downloads or PDF actions can plug into a branded experience instead of
            a utility screen.
          </p>
        </div>

        <div className="premium-route-grid premium-route-grid-3">
          {areas.map((area) => (
            <article key={area.slug} className="premium-route-card premium-route-card-interactive">
              <div className="premium-route-body">
                <p className="premium-route-card-kicker">{area.stats}</p>
                <h2 className="premium-route-card-title">{area.name}</h2>
                <p className="premium-route-card-copy">{area.summary}</p>
                <Link href={`/locations/${area.slug}`} className="premium-route-link">
                  Open Location Detail
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="premium-route-actions" style={{ marginTop: "2rem" }}>
          <Link href="/#contact" className="premium-route-btn-primary">
            Request Full Regional Brief
          </Link>
          <Link href="/reports/market-forecast" className="premium-route-btn-secondary">
            Open Market Forecast
          </Link>
        </div>
      </PremiumRouteShell>
    </SiteScaffold>
  );
}
