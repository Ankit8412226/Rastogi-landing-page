import Link from "next/link";
import PremiumRouteShell from "../components/PremiumRouteShell";
import SiteScaffold from "../components/SiteScaffold";
import { stories } from "../lib/site-data";

export default function InsightsPage() {
  return (
    <SiteScaffold>
      <PremiumRouteShell>
        <div className="premium-route-header premium-route-header-center">
          <div className="premium-route-kicker">
            <span className="premium-route-kicker-line" />
            <span className="premium-route-kicker-text">Knowledge Hub</span>
            <span className="premium-route-kicker-line" />
          </div>

          <h1 className="premium-route-title">
            Insights <span className="premium-route-title-accent">&</span> Market Intelligence
          </h1>

          <p className="premium-route-copy">
            These pages now inherit the same premium editorial language as the landing page, so the
            jump from home to article view feels intentional instead of looking like a separate UI.
          </p>
        </div>

        <div className="premium-route-grid premium-route-grid-3">
          {stories.map((story) => (
            <article key={story.slug} className="premium-route-card premium-route-card-interactive">
              <div className="premium-route-media">
                <img src={story.image} alt={story.title} />
                <div className="premium-route-media-overlay" />
                <div className="premium-route-badge">{story.tag}</div>
              </div>

              <div className="premium-route-body">
                <p className="premium-route-card-kicker">{story.time}</p>
                <h2 className="premium-route-card-title">{story.title}</h2>
                <p className="premium-route-card-copy">{story.excerpt}</p>

                <div className="premium-route-actions">
                  <Link href={`/insights/${story.slug}`} className="premium-route-btn-primary">
                    Read Full Insight
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </PremiumRouteShell>
    </SiteScaffold>
  );
}
