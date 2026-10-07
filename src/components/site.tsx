import { useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Bot,
  Braces,
  Check,
  ChevronDown,
  Code2,
  Compass,
  Copy,
  Cpu,
  ExternalLink,
  GitBranch,
  GraduationCap,
  HeartHandshake,
  Info,
  Layers3,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Plus,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { EMAIL, WHATSAPP, LOCATION, services } from "../data/content";

export type Detail = {
  title: string;
  description: string;
  outcomes: string[];
  kind: "learning" | "service";
};
export type Audience = "student" | "client";

const navigation = [
  { href: "/learn/", label: "Learning" },
  { href: "/internships/", label: "Internships" },
  { href: "/community/", label: "Community" },
  { href: "/services/", label: "Services" },
  { href: "/about/", label: "About" },
];

export function SectionLabel({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`section-label${light ? " section-label-light" : ""}`}>
      <span />
      {children}
    </p>
  );
}

export function Header({
  onContact,
  path,
}: {
  onContact: (audience: Audience) => void;
  path: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          className="brand"
          href="/"
          aria-label="NorthStar Labs home"
          onClick={() => setMenuOpen(false)}
        >
          <img src="/northstar-logo.png" width="60" height="60" alt="" />
          <span className="brand-name">
            NorthStar<span> LABS</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={
                path.replace(/\/$/, "") === item.href.replace(/\/$/, "")
                  ? "page"
                  : undefined
              }
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="button button-small header-contact"
          href="/contact/?audience=client"
          onClick={() => onContact("client")}
        >
          Let’s talk <ArrowUpRight size={16} />
        </a>
        <button
          ref={menuButton}
          className="icon-button menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {menuOpen && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={path === item.href ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
              <ArrowUpRight size={17} />
            </a>
          ))}
          <a
            href="/contact/?audience=client"
            onClick={() => {
              onContact("client");
              setMenuOpen(false);
            }}
          >
            Let’s talk
            <ArrowUpRight size={17} />
          </a>
        </nav>
      )}
    </header>
  );
}

export function BrandOrbit() {
  return (
    <div
      className="brand-orbit"
      aria-label="NorthStar Labs — your direction for learning and building"
    >
      <div className="orbital-grid" />
      <div className="orbit orbit-outer" />
      <div className="orbit orbit-middle" />
      <div className="orbit orbit-inner" />
      <div className="orbit-crosshair crosshair-horizontal" />
      <div className="orbit-crosshair crosshair-vertical" />
      <span className="orbit-axis axis-top">N</span>
      <span className="orbit-axis axis-right">E</span>
      <span className="orbit-axis axis-bottom">S</span>
      <span className="orbit-axis axis-left">W</span>
      <span className="orbit-point point-one" />
      <span className="orbit-point point-two" />
      <span className="orbit-point point-three" />
      <div className="orbit-logo">
        <img
          src="/northstar-logo.png"
          alt="Official NorthStar Labs logo"
          width="512"
          height="512"
          fetchPriority="high"
        />
      </div>
      <div className="orbit-chip chip-learn">
        <BookOpen size={15} />
        <span>Stay curious.</span>
      </div>
      <div className="orbit-chip chip-build">
        <Code2 size={15} />
        <span>Build something real.</span>
      </div>
      <div className="orbit-caption">
        <span className="status-dot" /> YOUR AMBITION. A SHARED DIRECTION.
      </div>
    </div>
  );
}

export function Hero({
  onContact,
}: {
  onContact: (audience: Audience) => void;
}) {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-glow" />
      <div className="container hero-main">
        <div className="hero-copy">
          <SectionLabel>Free to learn. Built together.</SectionLabel>
          <h1 id="hero-title">
            Guiding talent.
            <br />
            Building the
            <br />
            <span className="gradient-text">future.</span>
            <span className="hero-period" aria-hidden="true">
              ↗
            </span>
          </h1>
          <p className="hero-description">
            A community to learn real technology, build as a team, and create
            opportunities together. Start with free, skill-based internships.
            Grow toward work that matters.
          </p>
          <div className="hero-actions">
            <a className="button" href="/internships/">
              Join NorthStar <ArrowUpRight size={18} />
            </a>
            <a
              className="button button-outline"
              href="/services/"
              onClick={() => onContact("client")}
            >
              Work with us <ArrowRight size={18} />
            </a>
          </div>
          <div className="hero-note">
            <span className="note-line" />
            <span>Curiosity. Trust. Willingness to learn.</span>
          </div>
        </div>
        <BrandOrbit />
      </div>
      <div className="container hero-bottom">
        <a href="/learn/" className="scroll-link">
          <ArrowDown size={15} /> Discover your next step
        </a>
        <span className="hero-location">
          <MapPin size={14} /> Islamabad, Pakistan{" "}
          <span className="small-divider" /> Built for what’s next
        </span>
      </div>
    </section>
  );
}

export function CapabilityStrip() {
  return (
    <div className="capability-strip">
      <div className="container capability-inner">
        <span className="capability-intro">WHERE WE FOCUS</span>
        <span>
          <Cpu size={18} /> Artificial intelligence
        </span>
        <span>
          <Code2 size={18} /> Software & web
        </span>
        <span>
          <Workflow size={18} /> Intelligent automation
        </span>
        <span>
          <GraduationCap size={20} /> Practical learning
        </span>
      </div>
    </div>
  );
}

const serviceIcons = [Bot, Layers3, Workflow, Lightbulb];

export function Services({
  showDetail,
  onContact,
}: {
  showDetail: (detail: Detail) => void;
  onContact: (audience: Audience) => void;
}) {
  return (
    <section id="services" className="section services-section">
      <div className="container services-layout">
        <div className="services-intro">
          <SectionLabel>For ambitious businesses</SectionLabel>
          <h2>
            Your challenge.
            <br />
            Our next
            <br />
            <span className="gradient-text">building block.</span>
          </h2>
          <p>
            The best technology starts with understanding the problem. Let’s
            turn what you need into something useful, thoughtful, and built
            around you.
          </p>
          <a
            href="/contact/?audience=client"
            className="button"
            onClick={() => onContact("client")}
          >
            Let’s build together <ArrowUpRight size={18} />
          </a>
          <div className="services-note">
            <span className="small-cross">+</span> Real problems. Purposeful
            technology.
          </div>
        </div>
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <button
                className="service-card"
                key={service.id}
                onClick={() =>
                  showDetail({
                    title: service.title,
                    description: service.details,
                    outcomes: service.outcomes,
                    kind: "service",
                  })
                }
              >
                <div className="service-topline">
                  <Icon size={26} strokeWidth={1.4} />
                  <span>0{index + 1}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-footer">
                  <span>{service.tags[0]}</span>
                  <ArrowUpRight size={18} />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Approach() {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Start with a conversation.",
      text: "Your interests, your challenge, your goals. We begin by listening.",
    },
    {
      number: "02",
      icon: Compass,
      title: "Find a clear direction.",
      text: "Explore the possibilities and agree on a practical next step.",
    },
    {
      number: "03",
      icon: Code2,
      title: "Make something real.",
      text: "Connect ideas to action through focused learning and thoughtful building.",
    },
    {
      number: "04",
      icon: GitBranch,
      title: "Keep moving forward.",
      text: "Reflect, improve, and build on what you’ve learned along the way.",
    },
  ];
  return (
    <section id="approach" className="section approach-section">
      <div className="container">
        <div className="section-heading centered-heading">
          <SectionLabel>A shared way forward</SectionLabel>
          <h2>Progress doesn’t happen by accident.</h2>
          <p>
            Whether you’re learning a skill or building a solution, a little
            direction makes all the difference.
          </p>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step" key={step.number}>
              <div className="step-marker">
                <span>{step.number}</span>
                <step.icon size={20} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectIllustration({
  variant,
}: {
  variant: "assistant" | "workflow" | "web";
}) {
  return (
    <div className={`project-visual visual-${variant}`} aria-hidden="true">
      <div className="visual-grid" />
      {variant === "assistant" && (
        <div className="assistant-diagram">
          <div className="diagram-message">
            <span className="mini-avatar">
              <Users size={13} />
            </span>
            <span>Where do I start?</span>
          </div>
          <div className="diagram-answer">
            <span className="mini-bot">
              <Sparkles size={15} />
            </span>
            <div>
              <span className="skeleton-line long" />
              <span className="skeleton-line medium" />
              <span className="skeleton-line short" />
            </div>
            <span className="answer-cursor" />
          </div>
          <div className="source-chip">
            <BookOpen size={10} /> Connected to your knowledge
          </div>
        </div>
      )}
      {variant === "workflow" && (
        <div className="workflow-diagram">
          <div className="workflow-node node-input">
            <Mail size={20} />
            <span>Request</span>
          </div>
          <div className="workflow-connector">
            <span />
          </div>
          <div className="workflow-node node-center">
            <Zap size={23} />
            <span>Automate</span>
          </div>
          <div className="workflow-connector">
            <span />
          </div>
          <div className="workflow-node node-output">
            <Check size={21} />
            <span>Done</span>
          </div>
        </div>
      )}
      {variant === "web" && (
        <div className="web-diagram">
          <div className="browser-bar">
            <i />
            <i />
            <i />
            <span>your next idea</span>
          </div>
          <div className="browser-body">
            <div className="browser-sidebar">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="browser-content">
              <div className="browser-greeting" />
              <div className="browser-blocks">
                <span />
                <span />
                <span />
              </div>
              <div className="browser-chart">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function Projects({
  onContact,
}: {
  onContact: (audience: Audience) => void;
}) {
  const projects = [
    {
      variant: "assistant" as const,
      category: "AI & KNOWLEDGE",
      title: "Knowledge that answers back.",
      description:
        "AI assistants that help people find useful answers in the information they already have.",
    },
    {
      variant: "workflow" as const,
      category: "AUTOMATION",
      title: "Less busywork. More possibility.",
      description:
        "Connected workflows that make everyday tasks simpler and give time back to people.",
    },
    {
      variant: "web" as const,
      category: "SOFTWARE & WEB",
      title: "An idea, with a place to grow.",
      description:
        "Useful web platforms and custom tools shaped around a genuine need.",
    },
  ];
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <SectionLabel>Possibilities, made practical</SectionLabel>
            <h2>
              Good technology.
              <br />
              <span className="text-muted">Real reasons to build it.</span>
            </h2>
          </div>
          <p>
            A glimpse at the kinds of problems we’re interested in solving
            through learning and client work.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.variant}>
              <ProjectIllustration variant={project.variant} />
              <div className="project-content">
                <p className="eyebrow">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  className="text-link"
                  href="/contact/?audience=client"
                  onClick={() => onContact("client")}
                >
                  Explore an idea like this <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="project-note">
          <span className="small-dot" /> Project directions, not completed
          client work. We’ll share verified projects as they take shape.
        </p>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-layout">
        <div className="about-brand-panel">
          <div className="about-grid" />
          <div className="about-panel-top">
            <span>ROOTED IN CURIOSITY</span>
            <Plus size={17} />
          </div>
          <div className="about-logo-frame">
            <img
              src="/northstar-logo.png"
              width="240"
              height="240"
              alt="NorthStar Labs"
              loading="lazy"
            />
          </div>
          <div className="about-panel-bottom">
            <span>
              <MapPin size={13} /> ISLAMABAD, PAKISTAN
            </span>
            <span>LEARN · BUILD · GROW</span>
          </div>
        </div>
        <div className="about-copy">
          <SectionLabel>Our next chapter is taking shape</SectionLabel>
          <h2>
            One north star.
            <br />
            <span className="text-muted">Many ways forward.</span>
          </h2>
          <p>
            NorthStar Labs began by sharing free courses and learning resources
            with students. Based in Suan Garden, Islamabad, we’re now taking the
            next step: free, skill-based internships built around collaboration
            and practical work.
          </p>
          <p>
            Our bigger vision is a team that learns from each other, builds
            useful projects, and grows toward real client and freelance work.
            When that work generates revenue, our aim is to share it fairly
            according to each person’s contribution.
          </p>
          <div className="about-values">
            <span>
              <Target size={17} /> Purpose before technology
            </span>
            <span>
              <HeartHandshake size={17} /> Growth through community
            </span>
            <span>
              <Braces size={17} /> Learning through doing
            </span>
            <span>
              <ShieldCheck size={17} /> Clarity at every step
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact({
  audience,
  setAudience,
  initialInterest = "",
}: {
  audience: Audience;
  setAudience: (audience: Audience) => void;
  initialInterest?: string;
}) {
  const [channel, setChannel] = useState<"email" | "whatsapp">("email");
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("");
  const [draft, setDraft] = useState<{
    href: string;
    body: string;
    channel: "email" | "whatsapp";
  } | null>(null);
  const [draftCopied, setDraftCopied] = useState(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );
  useEffect(
    () => () => {
      clearTimeout(copyTimer.current);
    },
    [],
  );
  useEffect(() => {
    setDraft(null);
    setDraftCopied(false);
    setStatus("");
  }, [audience]);

  const clearDraft = () => {
    setDraft(null);
    setDraftCopied(false);
    setStatus("");
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const interest = String(data.get("interest") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject =
      audience === "student"
        ? `Student enquiry: ${interest}`
        : `Project enquiry: ${interest}`;
    const body = `Hi NorthStar Labs,\n\nMy name is ${name}. ${audience === "student" ? "I’d like to learn about student opportunities." : "I’d like to discuss a technology project."}\n\nArea of interest: ${interest}\nEmail: ${email}\n\n${message}\n\nBest,\n${name}`;
    const href =
      channel === "whatsapp"
        ? `${WHATSAPP}?text=${encodeURIComponent(body)}`
        : `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDraft({ href, body, channel });
    setDraftCopied(false);
    if (channel === "whatsapp") {
      window.open(href, "_blank", "noopener,noreferrer");
      setStatus(
        "Your WhatsApp draft is ready. Review it and press send there. If the app didn’t open, use the link below or copy your message.",
      );
    } else {
      window.location.href = href;
      setStatus(
        "Your email draft is ready. Review it and press send there. If no app opens, copy your message and email it to northstarlabsai@gmail.com.",
      );
    }
  };
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      setStatus(`Please copy our email address: ${EMAIL}`);
    }
  };
  const copyDraft = async () => {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(draft.body);
      setDraftCopied(true);
    } catch {
      setStatus(
        "Open “View your message” below to select and copy your draft.",
      );
    }
  };
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-layout">
        <div className="contact-copy">
          <SectionLabel>Every journey starts somewhere</SectionLabel>
          <h1>
            Let’s make
            <br />
            <span className="gradient-text">what’s next.</span>
          </h1>
          <p>
            A new skill. A bold idea. A problem worth solving.
            <br />
            Tell us where you want to go.
          </p>
          <div className="contact-methods">
            <div className="contact-method">
              <span className="contact-icon">
                <Mail size={20} />
              </span>
              <div>
                <span className="contact-method-label">DROP US A LINE</span>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
              <button
                className="icon-button copy-button"
                aria-label={
                  copied ? "Email address copied" : "Copy email address"
                }
                onClick={copyEmail}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
            <div className="contact-method">
              <span className="contact-icon">
                <MessageCircle size={20} />
              </span>
              <div>
                <span className="contact-method-label">
                  LET’S CHAT ON WHATSAPP
                </span>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                  +92 316 9390445 <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
            <div className="contact-method">
              <span className="contact-icon">
                <MapPin size={20} />
              </span>
              <div>
                <span className="contact-method-label">OUR STARTING POINT</span>
                <span className="contact-location">{LOCATION}</span>
              </div>
            </div>
          </div>
          <p className="contact-tagline">
            Guiding Talent. Building the Future.
          </p>
        </div>
        <form className="contact-form" onSubmit={submit} onChange={clearDraft}>
          <h3>What brings you here?</h3>
          <div
            className="audience-toggle"
            role="group"
            aria-label="Enquiry type"
          >
            <button
              type="button"
              aria-pressed={audience === "student"}
              className={audience === "student" ? "selected" : ""}
              onClick={() => {
                setAudience("student");
                setStatus("");
              }}
            >
              <GraduationCap size={17} /> I want to learn
            </button>
            <button
              type="button"
              aria-pressed={audience === "client"}
              className={audience === "client" ? "selected" : ""}
              onClick={() => {
                setAudience("client");
                setStatus("");
              }}
            >
              <Code2 size={17} /> I want to build
            </button>
          </div>
          <div className="form-row">
            <label>
              Your name
              <input
                name="name"
                autoComplete="name"
                placeholder="What should we call you?"
                required
                pattern={".*\\S.*"}
                title="Please enter your name."
                maxLength={100}
              />
            </label>
            <label>
              Email address
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                maxLength={254}
              />
            </label>
          </div>
          <label>
            I’m interested in
            <div className="select-wrap">
              <select
                name="interest"
                key={`${audience}:${initialInterest}`}
                defaultValue={initialInterest}
                required
              >
                <option value="" disabled>
                  Select a starting point
                </option>
                {(audience === "student"
                  ? [
                      "Free online courses",
                      "Free online internships",
                      "Projects & portfolio building",
                      "Mentorship & career guidance",
                      "Help finding my direction",
                    ]
                  : [
                      "AI solutions & agents",
                      "Software & web applications",
                      "Automation & integrations",
                      "Technology consulting",
                      "Exploring an idea",
                    ]
                ).map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
              <ChevronDown size={16} />
            </div>
          </label>
          <label>
            {audience === "student"
              ? "Tell us a little about your interests"
              : "Tell us a little about your idea"}{" "}
            <span className="optional">(optional)</span>
            <textarea
              name="message"
              rows={3}
              maxLength={2000}
              placeholder={
                audience === "student"
                  ? "What are you learning, and where would you like to go?"
                  : "What problem would you like to solve? Any goals or timelines?"
              }
            />
          </label>
          <div className="contact-channel">
            <span>Continue via</span>
            <label>
              <input
                type="radio"
                name="channel"
                value="email"
                checked={channel === "email"}
                onChange={() => {
                  setChannel("email");
                  setStatus("");
                }}
              />{" "}
              Email
            </label>
            <label>
              <input
                type="radio"
                name="channel"
                value="whatsapp"
                checked={channel === "whatsapp"}
                onChange={() => {
                  setChannel("whatsapp");
                  setStatus("");
                }}
              />{" "}
              WhatsApp
            </label>
          </div>
          <button type="submit" className="button form-submit">
            Start a conversation <ArrowUpRight size={18} />
          </button>
          <p className="form-note">
            <ExternalLink size={12} /> Opens{" "}
            {channel === "email" ? "your email app" : "WhatsApp"} with your
            message ready to send.
          </p>
          <p className="form-privacy">
            This website does not store your enquiry. Continuing shares your
            draft with your chosen app; review it before sending.
          </p>
          {status && (
            <p className="form-status" role="status">
              {status}
            </p>
          )}
          {draft && (
            <div className="draft-fallback">
              <div className="draft-actions">
                <a
                  href={draft.href}
                  target={draft.channel === "whatsapp" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  Open {draft.channel === "whatsapp" ? "WhatsApp" : "email"}{" "}
                  draft <ArrowUpRight size={14} />
                </a>
                <button type="button" onClick={copyDraft}>
                  {draftCopied ? <Check size={14} /> : <Copy size={14} />}
                  {draftCopied ? "Message copied" : "Copy message"}
                </button>
              </div>
              <details>
                <summary>View your message</summary>
                <pre>{draft.body}</pre>
              </details>
              <span className="sr-only" role="status">
                {draftCopied ? "Your message was copied to the clipboard." : ""}
              </span>
            </div>
          )}
          <span className="sr-only" role="status">
            {copied ? "Email address copied to clipboard." : ""}
          </span>
        </form>
      </div>
    </section>
  );
}

export function DetailDialog({
  detail,
  onClose,
  onContact,
}: {
  detail: Detail | "privacy" | null;
  onClose: () => void;
  onContact: (audience: Audience) => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current;
    if (!element || !detail) return;
    const prior = document.activeElement as HTMLElement | null;
    element.showModal();
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = oldOverflow;
      prior?.focus();
    };
  }, [detail]);
  if (!detail) return null;
  return (
    <dialog
      ref={dialog}
      className="detail-dialog"
      aria-labelledby="dialog-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const bounds = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
          )
            onClose();
        }
      }}
    >
      <div className="dialog-content">
        <button
          className="icon-button dialog-close"
          aria-label="Close details"
          onClick={onClose}
        >
          <X size={22} />
        </button>
        {detail === "privacy" ? (
          <>
            <SectionLabel>A straightforward privacy note</SectionLabel>
            <h2 id="dialog-title">
              Your conversation.
              <br />
              Your choice.
            </h2>
            <p>
              This website does not use analytics, advertising cookies, or an
              account system. We do not store your enquiry on this website.
            </p>
            <p>
              The contact form opens your email app or WhatsApp with a draft.
              Continuing shares the draft with your chosen service, which
              handles it under its own privacy policy. Nothing is sent to
              NorthStar Labs automatically; you review and send the message
              there.
            </p>
            <p>
              Our hosting provider may process ordinary connection information,
              such as IP addresses and request logs, to deliver and protect the
              website.
            </p>
            <p>
              For questions about information you share with NorthStar Labs,
              email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
            </p>
          </>
        ) : (
          <>
            <SectionLabel>
              {detail.kind === "learning"
                ? "A learning direction"
                : "A solution worth exploring"}
            </SectionLabel>
            <h2 id="dialog-title">{detail.title}</h2>
            <p>{detail.description}</p>
            <h3>
              {detail.kind === "learning"
                ? "What you could explore"
                : "What we can discuss"}
            </h3>
            <ul className="dialog-list">
              {detail.outcomes.map((outcome) => (
                <li key={outcome}>
                  <Check size={17} />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
            {detail.kind === "learning" && (
              <p className="dialog-note">
                <Info size={16} /> This is a learning direction, not a currently
                scheduled course. Contact us for confirmed opportunities,
                prerequisites, and certificate details.
              </p>
            )}
            <a
              href={`/contact/?audience=${detail.kind === "learning" ? "student" : "client"}`}
              className="button"
              onClick={() => {
                onContact(detail.kind === "learning" ? "student" : "client");
                onClose();
              }}
            >
              {detail.kind === "learning"
                ? "Ask about opportunities"
                : "Discuss your project"}
              <Send size={16} />
            </a>
          </>
        )}
      </div>
    </dialog>
  );
}
