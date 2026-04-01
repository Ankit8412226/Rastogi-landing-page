import Link from "next/link";
import { notFound } from "next/navigation";
import PremiumRouteShell from "../../components/PremiumRouteShell";
import SiteScaffold from "../../components/SiteScaffold";
import { stories } from "../../lib/site-data";

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export default async function InsightDetailPage({ params }) {
  const { slug } = await params;
  const story = stories.find((item) => item.slug === slug);

  if (!story) {
    notFound();
  }

  return (
    <SiteScaffold>
      <PremiumRouteShell>
        <div className="premium-route-header premium-route-header-center">
          <div className="premium-route-kicker">
            <span className="premium-route-kicker-line" />
            <span className="premium-route-kicker-text">
              {story.tag} • {story.time}
            </span>
            <span className="premium-route-kicker-line" />
          </div>

          <h1 className="premium-route-title">
            Advisory <span className="premium-route-title-accent">Perspective</span>
          </h1>

          <p className="premium-route-copy">{story.excerpt}</p>
        </div>

        <article className="premium-route-card">
          <div className="premium-route-media">
            <img src={story.image} alt={story.title} />
            <div className="premium-route-media-overlay" />
            <div className="premium-route-badge">{story.tag}</div>
          </div>

          <div className="premium-route-body premium-route-body-lg">
            <h2 className="premium-route-card-title">{story.title}</h2>

            <div className="premium-route-card premium-route-card-dark">
              <div className="premium-route-body">
                <p className="premium-route-card-kicker">Editorial Summary</p>
                <p className="premium-route-card-copy">{story.excerpt}</p>
              </div>
            </div>

            <div className="premium-route-stack">
              {story.body.map((paragraph) => (
                <p key={paragraph} className="premium-route-card-copy">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="premium-route-actions">
              <Link href="/#contact" className="premium-route-btn-primary">
                Talk to an Advisor
              </Link>
              <Link href="/insights" className="premium-route-btn-secondary">
                Back to Insights
              </Link>
            </div>
          </div>
        </article>
      </PremiumRouteShell>
    </SiteScaffold>
  );
}
