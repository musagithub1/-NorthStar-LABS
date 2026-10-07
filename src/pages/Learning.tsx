import { useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Braces,
  Check,
  Compass,
  Network,
  Plus,
  Workflow,
} from "lucide-react";
import { learningTracks, topics, WHATSAPP } from "../data/content";
import { Invite, PageHero } from "../components/sections";
import { SectionLabel } from "../components/site";
import type { Detail } from "../components/site";

export default function Learning({
  showDetail,
}: {
  showDetail: (detail: Detail) => void;
}) {
  const [topic, setTopic] = useState<string>("All topics");
  const tracks = learningTracks.filter(
    (track) => topic === "All topics" || track.category === topic,
  );
  const resourcesLink = `${WHATSAPP}?text=${encodeURIComponent("Hi NorthStar Labs, I’d like to explore your free courses and learning resources. Could you share what is currently available and help me find a starting point?")}`;
  return (
    <>
      <PageHero
        label="Learning"
        eyebrow="Knowledge grows when we share it"
        title="Learn something useful."
        accent="Then make it real."
        description="NorthStar began by sharing free courses and learning resources. We’re carrying that spirit forward: explore a concept, build with it, and pass what you learn to someone else."
      >
        <a className="button" href="#learning-paths">
          Find your direction
          <ArrowUpRight size={17} />
        </a>
        <a
          className="text-link"
          href={resourcesLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ask for free resources
          <ArrowUpRight size={17} />
        </a>
      </PageHero>
      <section id="learning-paths" className="section catalog-section">
        <div className="container">
          <div className="paths-heading">
            <div>
              <SectionLabel>Follow your curiosity</SectionLabel>
              <h2>What will you build next?</h2>
            </div>
            <span className="subtle-label">
              Foundations. Practice. Possibility.
            </span>
          </div>
          <div
            className="topic-filters"
            role="group"
            aria-label="Filter learning directions"
          >
            {topics.map((item) => (
              <button
                className={`filter-button${topic === item ? " active" : ""}`}
                key={item}
                aria-pressed={topic === item}
                onClick={() => setTopic(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <p className="sr-only" role="status">
            {tracks.length} learning directions shown.
          </p>
          <div className="tracks-grid">
            {tracks.map((track) => {
              const Icon =
                track.category === "Career growth"
                  ? Compass
                  : track.category === "Development"
                    ? Braces
                    : track.category === "Automation"
                      ? Workflow
                      : Network;
              return (
                <article
                  className="track-card learning-path-card"
                  key={track.id}
                >
                  <div className="track-icon">
                    <Icon size={26} strokeWidth={1.5} />
                    <span className="eyebrow">{track.category}</span>
                  </div>
                  <h3>{track.title}</h3>
                  <p>{track.description}</p>
                  <div className="tags">
                    {track.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <button
                    className="text-link path-detail-button"
                    aria-label={`Explore ${track.title}`}
                    onClick={() =>
                      showDetail({
                        title: track.title,
                        description: track.details,
                        outcomes: track.outcomes,
                        kind: "learning",
                      })
                    }
                  >
                    Explore this direction
                    <ArrowUpRight size={17} />
                  </button>
                </article>
              );
            })}
          </div>
          <div className="path-help">
            <span>
              <Plus size={22} />
            </span>
            <div>
              <h3>Not sure where to start?</h3>
              <p>
                Tell us what you’re curious about. We can discuss a practical
                starting point.
              </p>
            </div>
            <a className="text-link" href="/contact/?audience=student">
              Let’s find your direction
              <ArrowUpRight size={17} />
            </a>
          </div>
          <p className="content-note">
            These are learning directions, not a list of scheduled courses.
            Contact the team for current resources, internship projects, and
            requirements.
          </p>
        </div>
      </section>
      <section className="section learning-resources">
        <div className="container resources-layout">
          <div>
            <SectionLabel>It began with sharing knowledge</SectionLabel>
            <h2>
              A resource is the beginning.
              <br />
              <span className="text-muted">
                Practice is what makes it yours.
              </span>
            </h2>
            <p>
              Free courses can open a door. A small project, a question
              answered, or a concept explained to someone else helps you walk
              through it.
            </p>
            <a
              className="button button-outline"
              href={resourcesLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ask about free resources
              <BookOpen size={17} />
            </a>
          </div>
          <div className="resource-steps">
            {[
              {
                title: "Understand the concept.",
                description:
                  "Find a resource that fits your starting point and work through the ideas carefully.",
              },
              {
                title: "Try a small example.",
                description:
                  "Write the code, inspect what happens, and ask questions when the result surprises you.",
              },
              {
                title: "Make something useful.",
                description:
                  "Apply the idea to a practical problem and document your choices.",
              },
              {
                title: "Share what you discovered.",
                description:
                  "Explain your work to the community. Learning can keep moving from there.",
              },
            ].map((step, index) => (
              <article key={step.title}>
                <span>
                  <Check size={17} />
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <span className="resource-number">0{index + 1}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Invite />
    </>
  );
}
