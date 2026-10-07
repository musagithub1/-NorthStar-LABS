import {
  ArrowUpRight,
  BookOpen,
  Code2,
  HeartHandshake,
  Lightbulb,
  Share2,
  Users,
} from "lucide-react";
import {
  CommunityValues,
  Invite,
  Journey,
  JoinButton,
  PageHero,
  PeerNetwork,
  Vision,
} from "../components/sections";
import { SectionLabel } from "../components/site";

export default function Community() {
  const contributions = [
    {
      Icon: Lightbulb,
      title: "Bring a question.",
      text: "A thoughtful question can help the whole team understand a problem better.",
    },
    {
      Icon: Code2,
      title: "Build a piece.",
      text: "Contribute code, research, testing, or documentation to a practical project.",
    },
    {
      Icon: Share2,
      title: "Explain a discovery.",
      text: "Share a resource or walk someone through what you have learned.",
    },
    {
      Icon: HeartHandshake,
      title: "Help someone forward.",
      text: "Review an idea, offer feedback, or work through a challenge together.",
    },
  ];
  return (
    <>
      <PageHero
        label="Community"
        eyebrow="No boss. No hierarchy. A shared direction."
        title="Everyone can teach."
        accent="Everyone can learn."
        description="Someone joining as an intern may know something another person doesn’t. Someone teaching today may learn something new tomorrow. At NorthStar, everyone has something to contribute."
        visual={<PeerNetwork />}
      >
        <JoinButton label="Become part of NorthStar" />
        <a className="text-link" href="/internships/">
          Explore free internships
          <ArrowUpRight size={17} />
        </a>
      </PageHero>
      <section className="section community-belief">
        <div className="container belief-layout">
          <SectionLabel>Our belief</SectionLabel>
          <div>
            <h2>
              Knowledge belongs
              <br />
              <span className="gradient-text">in the conversation.</span>
            </h2>
            <p>
              We want a community where people exchange ideas, work through
              challenges together, and help each other grow. Learning and
              teaching can change hands whenever someone has something useful to
              share.
            </p>
            <div className="belief-signals">
              <span>
                <Users size={18} /> Equal voice
              </span>
              <span>
                <HeartHandshake size={18} /> Shared responsibility
              </span>
              <span>
                <BookOpen size={18} /> Mutual learning
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <SectionLabel>How we want to work together</SectionLabel>
              <h2>
                Bring your perspective.
                <br />
                <span className="text-muted">
                  Respect the people beside you.
                </span>
              </h2>
            </div>
            <p>
              A collaborative team grows through everyday habits: listening,
              sharing, being honest, and doing the work we agree to do.
            </p>
          </div>
          <CommunityValues />
        </div>
      </section>
      <section className="section contributions-section">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>
              There is more than one way to contribute
            </SectionLabel>
            <h2>
              You don’t have to know everything.
              <br />
              <span className="text-muted">
                Start with something you can share.
              </span>
            </h2>
          </div>
          <div className="contributions-grid">
            {contributions.map(({ Icon, title, text }) => (
              <article key={title}>
                <Icon size={24} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <div id="shared-opportunities">
        <Vision />
      </div>
      <Journey />
      <Invite />
    </>
  );
}
