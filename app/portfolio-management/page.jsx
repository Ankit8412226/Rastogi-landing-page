import Link from "next/link";
import PremiumRouteShell from "../components/PremiumRouteShell";
import SiteScaffold from "../components/SiteScaffold";

const pillars = [
  "Acquisition sequencing across residential, plotted, and commercial assets",
  "Capital allocation visibility for hold versus exit planning",
  "Advisory notes for yield, appreciation, and risk balance",
];

export default function PortfolioManagementPage() {
  return (
    <SiteScaffold>
      <PremiumRouteShell>
        <div className="premium-route-header premium-route-header-left">
          <div className="premium-route-kicker">
            <span className="premium-route-kicker-line" />
            <span className="premium-route-kicker-text">Portfolio Support</span>
            <span className="premium-route-kicker-line" />
          </div>

          <h1 className="premium-route-title">
            Portfolio <span className="premium-route-title-accent">Management</span>
          </h1>

          <p className="premium-route-copy">
            This footer-linked destination now feels like an extension of the landing page, ready
            for future investor dashboards and advisory workflows.
          </p>
        </div>

        <div className="premium-route-grid premium-route-grid-3">
          {pillars.map((pillar) => (
            <div key={pillar} className="premium-route-card premium-route-card-interactive">
              <div className="premium-route-body">
                <p className="premium-route-card-kicker">Advisory Pillar</p>
                <p className="premium-route-caption">{pillar}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="premium-route-actions" style={{ marginTop: "2rem" }}>
          <Link href="/#contact" className="premium-route-btn-primary">
            Request Portfolio Review
          </Link>
        </div>
      </PremiumRouteShell>
    </SiteScaffold>
  );
}
