import { useId, useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Braces,
  Check,
  ChevronRight,
  Code2,
  Compass,
  GitBranch,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  MessageCircle,
  Plus,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import { SectionLabel } from "./site";
import { WHATSAPP } from "../data/content";
import { cvMessage, communityValues, journey } from "../data/community";

export const cvLink = `${WHATSAPP}?text=${encodeURIComponent(cvMessage)}`;

export function JoinButton({
  label = "Send your CV on WhatsApp",
  outline = false,
}: {
  label?: string;
  outline?: boolean;
}) {
  return (
    <a
      className={`button${outline ? " button-outline" : ""}`}
      href={cvLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
      <Send size={17} />
    </a>
  );
}

export function Breadcrumb({ label }: { label: string }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a>
      <ChevronRight size={12} />
      <span aria-current="page">{label}</span>
    </nav>
  );
}

export function PageHero({
  label,
  eyebrow,
  title,
  accent,
  description,
  visual,
  children,
  className = "",
}: {
  label: string;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  visual?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={`page-hero ${className}`}>
      <div className="container">
        <Breadcrumb label={label} />
        <div className={`page-hero-grid${visual ? "" : " page-hero-simple"}`}>
          <div className="page-hero-copy">
            <SectionLabel>{eyebrow}</SectionLabel>
            <h1>
              {title}
              <br />
              <span className="gradient-text">{accent}</span>
            </h1>
            <p>{description}</p>
            {children && <div className="page-hero-actions">{children}</div>}
          </div>
          {visual && <div className="page-hero-visual">{visual}</div>}
        </div>
      </div>
    </section>
  );
}

export function PeerNetwork() {
  const nodes = [
    { Icon: Braces, word: "Code", position: "one" },
    { Icon: BookOpen, word: "Knowledge", position: "two" },
    { Icon: Workflow, word: "Automation", position: "three" },
    { Icon: Lightbulb, word: "Ideas", position: "four" },
  ];
  return (
    <div
      className="peer-network"
      aria-label="Code, knowledge, automation and ideas connect through shared learning"
    >
      <div className="peer-grid" />
      <div className="peer-ring" />
      <div className="peer-ring peer-ring-outer" />
      <div className="peer-line line-a" />
      <div className="peer-line line-b" />
      <div className="peer-core">
        <Users size={27} strokeWidth={1.5} />
        <span>
          Everyone
          <br />
          contributes.
        </span>
      </div>
      {nodes.map(({ Icon, word, position }) => (
        <div className={`peer-node peer-node-${position}`} key={word}>
          <Icon size={18} strokeWidth={1.5} />
          <span>{word}</span>
        </div>
      ))}
      <span className="peer-caption">A SHARED DIRECTION, BUILT TOGETHER</span>
    </div>
  );
}

export function Journey({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={`section journey-section${compact ? " journey-compact" : ""}`}
    >
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <SectionLabel>A direction you can grow into</SectionLabel>
            <h2>
              Learn. Build. Share.
              <br />
              <span className="gradient-text">Earn. Grow.</span>
            </h2>
          </div>
          <p>
            Start with knowledge. Turn it into useful work. Build toward
            opportunities that can move the whole team forward.
          </p>
        </div>
        <div className="journey-grid">
          {journey.map((item) => (
            <article key={item.word}>
              <div className="journey-number">
                <span>{item.number}</span>
                <ArrowRight size={17} />
              </div>
              <h3>{item.word}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <p className="journey-note">
          Earning depends on actual freelance or client work becoming available
          and generating revenue.
        </p>
      </div>
    </section>
  );
}

export function Vision({ compact = false }: { compact?: boolean }) {
  const flow = [
    {
      word: "Clients",
      Icon: MessageCircle,
      description: "A real need to solve",
    },
    { word: "Projects", Icon: Code2, description: "Useful work, together" },
    {
      word: "Revenue",
      Icon: GitBranch,
      description: "Value from completed work",
    },
    {
      word: "Team growth",
      Icon: Users,
      description: "Fair sharing. More possibility.",
    },
  ];
  return (
    <section
      className={`section vision-section${compact ? " vision-compact" : ""}`}
    >
      <div className="container">
        <div className="vision-heading">
          <div>
            <SectionLabel>The bigger vision</SectionLabel>
            <h2>
              A team that learns together.
              <br />
              <span className="text-muted">
                An opportunity to grow together.
              </span>
            </h2>
          </div>
          <a className="text-link" href="/community/#shared-opportunities">
            Explore the vision
            <ArrowUpRight size={17} />
          </a>
        </div>
        <div
          className="revenue-flow"
          aria-label="Clients lead to projects, revenue, and team growth"
        >
          {flow.map(({ word, Icon, description }, index) => (
            <div className="flow-step" key={word}>
              <span className="flow-icon">
                <Icon size={23} strokeWidth={1.4} />
              </span>
              <div>
                <h3>{word}</h3>
                <p>{description}</p>
              </div>
              {index < flow.length - 1 && (
                <ArrowRight className="flow-arrow" size={19} />
              )}
            </div>
          ))}
        </div>
        <div className="vision-foot">
          <p>
            Once we have a strong team, our plan is to pursue freelancing and
            real client projects. When projects generate revenue, our aim is to
            share it fairly according to the work and contribution of the people
            involved.
          </p>
          <div className="vision-principle">
            <ShieldCheck size={20} />
            <div>
              <strong>Contribution matters.</strong>
              <span>
                Our aim is to discuss scope, responsibilities, and a fair
                approach to compensation before client work begins.
              </span>
            </div>
          </div>
        </div>
        {!compact && (
          <p className="earning-note">
            This is a direction we are building toward. It is not a promised
            salary, guaranteed income, or a claim of existing client revenue.
          </p>
        )}
      </div>
    </section>
  );
}

export function CommunityValues() {
  const icons = [
    Compass,
    ShieldCheck,
    BookOpen,
    MessageCircle,
    HeartHandshake,
    Sparkles,
  ];
  return (
    <div className="values-grid">
      {communityValues.map((value, index) => {
        const Icon = icons[index];
        return (
          <article className="value-card" key={value.title}>
            <Icon size={23} strokeWidth={1.5} />
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </article>
        );
      })}
    </div>
  );
}

export function FAQList({
  items,
}: {
  items: readonly { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <div
          className={`faq-item${open === index ? " faq-open" : ""}`}
          key={item.question}
        >
          <h3>
            <button
              aria-expanded={open === index}
              aria-controls={`${id}-answer-${index}`}
              id={`${id}-question-${index}`}
              onClick={() => setOpen(open === index ? null : index)}
            >
              {item.question}
              <Plus size={19} />
            </button>
          </h3>
          <div
            id={`${id}-answer-${index}`}
            role="region"
            aria-labelledby={`${id}-question-${index}`}
            hidden={open !== index}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Invite({ client = false }: { client?: boolean }) {
  return (
    <section className="section invite-section">
      <div className="container">
        <div className="invite-box">
          <div>
            <SectionLabel>
              {client
                ? "A useful problem deserves a conversation"
                : "Your next chapter starts with a conversation"}
            </SectionLabel>
            <h2>
              {client
                ? "What would you like to build?"
                : "Bring your curiosity."}
              <br />
              <span className="gradient-text">
                {client ? "Let’s find a way forward." : "Find your people."}
              </span>
            </h2>
            <p>
              {client
                ? "Tell us about your idea, the people it serves, and the challenge you want to solve."
                : "You don’t need a perfect resume. Tell us what you know, what you want to learn, and where you would like to contribute."}
            </p>
          </div>
          <div className="invite-actions">
            {client ? (
              <a className="button" href="/contact/?audience=client">
                Discuss your project
                <ArrowUpRight size={18} />
              </a>
            ) : (
              <JoinButton />
            )}
            <a
              className="text-link"
              href={client ? "/services/" : "/internships/"}
            >
              {client ? "Explore our services" : "How the internships work"}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InternshipSnapshot() {
  return (
    <div className="internship-snapshot">
      <div className="snapshot-top">
        <span className="status-dot" />
        <span>FREE, SKILL-BASED INTERNSHIPS</span>
        <GraduationCap size={19} />
      </div>
      <div className="snapshot-center">
        <span className="snapshot-zero">
          Free<span> to join.</span>
        </span>
        <p>
          Real learning.
          <br />A shared direction.
        </p>
      </div>
      <dl>
        <div>
          <dt>Learning model</dt>
          <dd>Collaborative & practical</dd>
        </div>
        <div>
          <dt>Core focus</dt>
          <dd>ML · Automation · Agentic AI</dd>
        </div>
        <div>
          <dt>Your starting point</dt>
          <dd>Curiosity & willingness</dd>
        </div>
        <div>
          <dt>How to apply</dt>
          <dd>CV via WhatsApp</dd>
        </div>
      </dl>
      <div className="snapshot-bottom">
        <Check size={15} /> No internship or training fee.
      </div>
    </div>
  );
}
