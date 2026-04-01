import Link from "next/link";
import PremiumRouteShell from "../../components/PremiumRouteShell";
import SiteScaffold from "../../components/SiteScaffold";

const highlights = [
  "Transit-led corridors are still commanding the strongest long-duration upside.",
  "Premium plotted land remains attractive where infrastructure visibility is real, not speculative.",
  "Managed commercial assets continue to matter for investors who prioritize stable yield over hype.",
];

export default function MarketForecastPage() {
  return (
    <SiteScaffold>
      <PremiumRouteShell>
        <div className="premium-route-header premium-route-header-left">
          <div className="premium-route-kicker">
            <span className="premium-route-kicker-line" />
            <span className="premium-route-kicker-text">2025 Market Forecast</span>
            <span className="premium-route-kicker-line" />
          </div>

          <h1 className="premium-route-title">
            Forward-Looking <span className="premium-route-title-accent">Advisory</span> Notes
          </h1>

          <p className="premium-route-copy">
            Forecast and report routes now align with the same premium landing-page tone, using the
            same gold CTA treatment and soft editorial card system.
          </p>
        </div>

        <div className="premium-route-card premium-route-card-dark">
          <div className="premium-route-body premium-route-body-lg">
            <p className="premium-route-note">Forecast Summary</p>
            <ul className="premium-route-list">
              {highlights.map((highlight) => (
                <li key={highlight} className="premium-route-list-item">
                  <span className="premium-route-list-dot" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="premium-route-actions" style={{ marginTop: "2rem" }}>
          <Link href="/#contact" className="premium-route-btn-primary">
            Request Full Forecast
          </Link>
          <Link href="/insights" className="premium-route-btn-secondary">
            Visit Knowledge Hub
          </Link>
        </div>
      </PremiumRouteShell>
    </SiteScaffold>
  );
}
