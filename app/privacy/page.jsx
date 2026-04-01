import Link from "next/link";
import PremiumRouteShell from "../components/PremiumRouteShell";
import SiteScaffold from "../components/SiteScaffold";

export default function PrivacyPage() {
  return (
    <SiteScaffold showLeadCapture={false}>
      <PremiumRouteShell>
        <div className="premium-route-header premium-route-header-left">
          <div className="premium-route-kicker">
            <span className="premium-route-kicker-line" />
            <span className="premium-route-kicker-text">Privacy Placeholder</span>
            <span className="premium-route-kicker-line" />
          </div>

          <h1 className="premium-route-title">
            Legal Privacy <span className="premium-route-title-accent">&</span> Data Handling
          </h1>

          <p className="premium-route-copy">
            Even placeholder policy routes now follow the same editorial styling as the main
            experience instead of dropping users into a generic utility page.
          </p>
        </div>

        <div className="premium-route-card">
          <div className="premium-route-body premium-route-body-lg">
            <div className="premium-route-card premium-route-card-dark">
              <div className="premium-route-body">
                <p className="premium-route-card-kicker">Current State</p>
                <p className="premium-route-card-copy">
                  Contact form submissions are currently local UI flows. No live CRM or third-party
                  storage is active in this mock implementation yet.
                </p>
              </div>
            </div>

            <p className="premium-route-card-copy">
              This route exists now so footer privacy links remain valid while you continue wiring
              backend, CRM, and consent logic later.
            </p>

            <div className="premium-route-actions">
              <Link href="/" className="premium-route-btn-primary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </PremiumRouteShell>
    </SiteScaffold>
  );
}
