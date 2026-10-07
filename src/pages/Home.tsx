import {
  ArrowUpRight,
  BookOpen,
  Code2,
  GraduationCap,
  HeartHandshake,
  Users,
} from "lucide-react";
import {
  About,
  CapabilityStrip,
  Hero,
  SectionLabel,
  Services,
} from "../components/site";
import type { Audience, Detail } from "../components/site";
import { Invite, Journey, PeerNetwork, Vision } from "../components/sections";

export default function Home({
  showDetail,
  onContact,
}: {
  showDetail: (detail: Detail) => void;
  onContact: (audience: Audience) => void;
}) {
  const paths = [
    {
      Icon: GraduationCap,
      label: "FOR LEARNERS",
      title: "An internship you build together.",
      description:
        "Free, skill-based internships with practical projects, shared knowledge, and space for your contribution.",
      href: "/internships/",
      action: "Explore internships",
    },
    {
      Icon: BookOpen,
      label: "FOR CURIOUS MINDS",
      title: "Knowledge you can put to work.",
      description:
        "Find a learning direction in machine learning, automation, agentic AI, Python, and software development.",
      href: "/learn/",
      action: "Find your learning path",
    },
    {
      Icon: Code2,
      label: "FOR BUSINESSES",
      title: "A useful idea, made practical.",
      description:
        "Discuss AI solutions, applications, and automation around the problem you want to solve.",
      href: "/services/",
      action: "Build with NorthStar",
    },
  ];
  return (
    <>
      <Hero onContact={onContact} />
      <CapabilityStrip />
      <section className="section home-intro">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <SectionLabel>A different starting point</SectionLabel>
              <h2>
                Opportunity should begin
                <br />
                <span className="text-muted">
                  with your willingness to learn.
                </span>
              </h2>
            </div>
            <p>
              Many students in Pakistan struggle to find practical experience
              without large fees. NorthStar Labs grew from sharing free courses
              and resources into a bigger idea: learn, build, and grow as a
              team.
            </p>
          </div>
          <div className="home-paths">
            {paths.map(({ Icon, label, title, description, href, action }) => (
              <article className="home-path-card" key={href}>
                <div className="card-topline">
                  <span className="icon-tile">
                    <Icon size={24} strokeWidth={1.5} />
                  </span>
                  <span className="eyebrow">{label}</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={href} className="text-link">
                  {action}
                  <ArrowUpRight size={18} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section home-community">
        <div className="container manifesto-grid">
          <div>
            <SectionLabel>A community of contributors</SectionLabel>
            <h2>
              No boss. No hierarchy.
              <br />
              <span className="gradient-text">Everyone brings something.</span>
            </h2>
            <p>
              Someone joining today may know something the rest of us haven’t
              learned yet. Someone teaching today may learn from someone else
              tomorrow.
            </p>
            <p>
              That’s the spirit of NorthStar: equal voice, shared
              responsibility, and knowledge that moves in every direction.
            </p>
            <div className="manifesto-signals">
              <span>
                <Users size={17} /> Learn from each other
              </span>
              <span>
                <HeartHandshake size={17} /> Build with each other
              </span>
            </div>
            <a className="text-link" href="/community/">
              Meet the idea behind the community
              <ArrowUpRight size={17} />
            </a>
          </div>
          <PeerNetwork />
        </div>
      </section>
      <Journey compact />
      <Services showDetail={showDetail} onContact={onContact} />
      <Vision compact />
      <About />
      <Invite />
    </>
  );
}
