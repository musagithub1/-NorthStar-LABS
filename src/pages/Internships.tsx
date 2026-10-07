import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Code2,
  Compass,
  FileCode2,
  FolderGit2,
  GraduationCap,
  Layers3,
  Lightbulb,
  Network,
  Share2,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionLabel } from "../components/site";
import {
  FAQList,
  InternshipSnapshot,
  Invite,
  JoinButton,
  PageHero,
} from "../components/sections";
import { internshipBenefits, internshipFAQs } from "../data/community";

const benefitIcons: Record<string, LucideIcon> = {
  code: Code2,
  layers: Layers3,
  share: Share2,
  folder: FolderGit2,
  compass: Compass,
  idea: Lightbulb,
};

export default function Internships() {
  const focus = [
    {
      Icon: Network,
      title: "Machine learning",
      text: "Explore data, patterns, and models. Learn to ask useful questions and understand what the results mean.",
      tags: "PYTHON · DATA · ML",
    },
    {
      Icon: Workflow,
      title: "Automation",
      text: "Connect tools and build workflows that make repetitive work simpler. Learn by solving a practical need.",
      tags: "SCRIPTS · APIS · WORKFLOWS",
    },
    {
      Icon: Bot,
      title: "Agentic AI",
      text: "Explore assistants and agents that connect models, tools, and human oversight to useful tasks.",
      tags: "GENERATIVE AI · AGENTS · TOOLS",
    },
  ];
  const steps = [
    {
      title: "Introduce yourself.",
      text: "Send your CV on WhatsApp with a short note about your skills, interests, and what you want to learn.",
    },
    {
      title: "Find a starting point.",
      text: "Discuss the current intake, practical requirements, and a direction that fits your interests.",
    },
    {
      title: "Learn and build as a team.",
      text: "Practise, contribute to projects, ask questions, and share the things you discover.",
    },
    {
      title: "Grow toward useful work.",
      text: "Develop a portfolio and explore freelance or client opportunities as the team becomes ready.",
    },
  ];
  return (
    <>
      <PageHero
        label="Internships"
        eyebrow="Free, skill-based internships"
        title="Your skills."
        accent="Our shared next step."
        description="More than a certificate. A place to gain practical knowledge, work with others, and help create opportunities together. NorthStar Labs is introducing free internships built around this idea."
        visual={<InternshipSnapshot />}
      >
        <JoinButton />
        <a className="text-link" href="#how-it-works">
          How it works
          <ArrowRight size={17} />
        </a>
      </PageHero>
      <div className="internship-strip">
        <div className="container">
          {[
            "No internship fee",
            "Practical projects",
            "Peer-to-peer learning",
            "Shared growth",
          ].map((item) => (
            <span key={item}>
              <Check size={16} />
              {item}
            </span>
          ))}
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <SectionLabel>Experience you can build on</SectionLabel>
              <h2>
                Go from knowing the idea
                <br />
                <span className="text-muted">to making it work.</span>
              </h2>
            </div>
            <p>
              Learning becomes real when you try, discuss, build, and explain.
              That’s the kind of experience we want this community to create.
            </p>
          </div>
          <div className="benefits-grid">
            {internshipBenefits.map((benefit) => {
              const Icon = benefitIcons[benefit.icon];
              return (
                <article className="benefit-card" key={benefit.title}>
                  <Icon size={23} strokeWidth={1.5} />
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section focus-section">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>Technology with a practical purpose</SectionLabel>
            <h2>
              Three directions.
              <br />
              <span className="text-muted">Plenty of room to explore.</span>
            </h2>
          </div>
          <div className="focus-grid">
            {focus.map(({ Icon, title, text, tags }) => (
              <article className="focus-card" key={title}>
                <div className="focus-card-icon">
                  <Icon size={33} strokeWidth={1.2} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span>{tags}</span>
              </article>
            ))}
          </div>
          <p className="content-note">
            These are our areas of focus. The team will discuss available
            projects and your starting point with you.
          </p>
          <a className="text-link" href="/learn/">
            Explore all learning directions
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
      <section id="how-it-works" className="section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <SectionLabel>A simple way to begin</SectionLabel>
              <h2>
                Join the conversation.
                <br />
                <span className="text-muted">Find your contribution.</span>
              </h2>
            </div>
            <p>
              Bring your curiosity and tell us where you are today. You can
              build your next step from there.
            </p>
          </div>
          <div className="joining-steps">
            {steps.map((step, index) => (
              <article key={step.title}>
                <span className="joining-number">0{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
                <ArrowRight size={18} />
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section eligibility-section">
        <div className="container eligibility-grid">
          <div>
            <SectionLabel>Who can join?</SectionLabel>
            <h2>
              A perfect resume?
              <br />
              <span className="gradient-text">Start with an open mind.</span>
            </h2>
            <p>
              You don’t need an expensive course, a previous internship, or all
              the answers. What matters most is what you’re willing to learn,
              share, and contribute.
            </p>
            <div className="eligibility-pills">
              <span>
                <Compass size={17} /> Curiosity
              </span>
              <PlusSign />
              <span>
                <ShieldCheck size={17} /> Trust
              </span>
              <PlusSign />
              <span>
                <GraduationCap size={17} /> Willingness to learn
              </span>
            </div>
            <a className="text-link" href="/community/">
              See how we learn together
              <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="expectations-card">
            <Users size={26} />
            <h3>
              Equal voice.
              <br />
              Shared responsibility.
            </h3>
            <p>
              Contribute ideas. Respect the people beside you. Communicate when
              you need help. Take ownership of the work you agree to do.
            </p>
            <div className="expectations-foot">
              <FileCode2 size={19} />
              <p>
                Certificates can support your journey. Practical knowledge and
                work you can explain are the foundation. Ask us about
                certificate criteria for your opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="apply" className="section application-section">
        <div className="container">
          <div className="application-card">
            <div className="application-heading">
              <span className="icon-tile">
                <GraduationCap size={27} />
              </span>
              <div>
                <SectionLabel>Ready to take the next step?</SectionLabel>
                <h2>
                  Send your CV.
                  <br />
                  <span className="text-muted">Start a conversation.</span>
                </h2>
              </div>
            </div>
            <div className="application-content">
              <p>
                Open WhatsApp, attach your CV, and add a few lines about
                yourself: what you know, what interests you, and what you would
                like to build with others.
              </p>
              <JoinButton />
              <p className="application-note">
                The link prepares an introduction. You attach the CV and send it
                yourself in WhatsApp. Contact the team for the current intake,
                schedule, and participation details.
              </p>
              <a href="/contact/?audience=student" className="text-link">
                Have a question first?
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section faq-section">
        <div className="container faq-layout">
          <div>
            <SectionLabel>Before you join</SectionLabel>
            <h2>
              Clear expectations.
              <br />
              <span className="text-muted">A better starting point.</span>
            </h2>
            <p>
              Free learning, shared work, and an earning vision. Here’s what
              that means in practice.
            </p>
          </div>
          <FAQList items={internshipFAQs} />
        </div>
      </section>
      <Invite />
    </>
  );
}

function PlusSign() {
  return (
    <span className="eligibility-plus" aria-hidden="true">
      +
    </span>
  );
}
