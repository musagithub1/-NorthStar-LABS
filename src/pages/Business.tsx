import { ArrowUpRight, Check, Code2, FileText, Users } from "lucide-react";
import { Approach, Projects, SectionLabel } from "../components/site";
import type { Audience } from "../components/site";
import { Invite, PageHero } from "../components/sections";
import { services } from "../data/content";

export function ServicesPage() {
  const enquiryTopics = [
    "AI solutions & agents",
    "Software & web applications",
    "Automation & integrations",
    "Technology consulting",
  ];
  return (
    <>
      <PageHero
        label="Services"
        eyebrow="Thoughtful technology for a useful purpose"
        title="Your problem."
        accent="A practical way forward."
        description="An idea, a process that needs improving, or a tool your business is missing. Tell us what you want to achieve, and let’s explore a technology solution around the people using it."
      >
        <a className="button" href="/contact/?audience=client">
          Discuss your project
          <ArrowUpRight size={17} />
        </a>
        <a className="text-link" href="/projects/">
          Explore building directions
          <ArrowUpRight size={17} />
        </a>
      </PageHero>
      <section className="section service-details-section">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Ways we can work with you</SectionLabel>
            <h2>
              From a focused workflow
              <br />
              <span className="text-muted">to your next application.</span>
            </h2>
          </div>
          <div className="service-details">
            {services.map((service, index) => (
              <article id={service.id} key={service.id}>
                <div className="service-detail-title">
                  <span className="service-detail-number">
                    {service.number}
                  </span>
                  <h3>{service.title}</h3>
                  <div className="tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="service-detail-content">
                  <p>{service.details}</p>
                  <ul>
                    {service.outcomes.map((outcome) => (
                      <li key={outcome}>
                        <Check size={16} />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    className="text-link"
                    href={`/contact/?audience=client&interest=${encodeURIComponent(enquiryTopics[index])}`}
                  >
                    Let’s explore {index === 3 ? "your options" : "a solution"}
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Approach />
      <section className="section project-brief-section">
        <div className="container project-brief">
          <div>
            <SectionLabel>
              You do not need a finished technical brief
            </SectionLabel>
            <h2>
              Start with the problem.
              <br />
              <span className="text-muted">We can discuss the rest.</span>
            </h2>
            <p>
              A short description is enough to begin. These questions can help
              you tell us what matters.
            </p>
          </div>
          <ul>
            {[
              "What problem are you trying to solve?",
              "Who will use the solution?",
              "How does the work happen today?",
              "What constraints, timing, or budget should we consider?",
            ].map((question) => (
              <li key={question}>
                <span className="small-dot" />
                {question}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Invite client />
    </>
  );
}

export function ProjectsPage({
  onContact,
}: {
  onContact: (audience: Audience) => void;
}) {
  const practice = [
    {
      Icon: Code2,
      title: "A practical skill",
      description:
        "Connect a concept to a concrete problem. Explore the choices that help a solution work.",
    },
    {
      Icon: Users,
      title: "A shared contribution",
      description:
        "Bring together different strengths and document how each person helped shape the work.",
    },
    {
      Icon: FileText,
      title: "A portfolio story",
      description:
        "Explain the problem, what you built, why you made your choices, and what you would improve.",
    },
  ];
  return (
    <>
      <PageHero
        label="Projects"
        eyebrow="Useful problems. Purposeful building."
        title="Ideas become meaningful"
        accent="when you build with them."
        description="Our project direction connects practical learning with useful technology. These are kinds of problems we want to explore with learners and clients—not a portfolio of completed work."
      >
        <a className="button" href="/contact/?audience=client">
          Bring an idea
          <ArrowUpRight size={17} />
        </a>
        <a className="text-link" href="/internships/">
          Build as a learner
          <ArrowUpRight size={17} />
        </a>
      </PageHero>
      <Projects onContact={onContact} />
      <section className="section project-practice-section">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Build it. Understand it. Explain it.</SectionLabel>
            <h2>
              A useful project can do more
              <br />
              <span className="text-muted">than show what the code runs.</span>
            </h2>
          </div>
          <div className="project-practice-grid">
            {practice.map(({ Icon, title, description }) => (
              <article key={title}>
                <Icon size={24} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <p className="content-note">
            We will add completed projects and case studies when there is
            verified work ready to share.
          </p>
        </div>
      </section>
      <Invite client />
    </>
  );
}
