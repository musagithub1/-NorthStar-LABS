import {
  ArrowUpRight,
  BookOpen,
  Compass,
  GraduationCap,
  HeartHandshake,
  Target,
} from "lucide-react";
import { About as Story, SectionLabel } from "../components/site";
import { Invite, PageHero } from "../components/sections";

export default function AboutPage() {
  const chapters = [
    {
      label: "THE BEGINNING",
      title: "Share what opens doors.",
      description:
        "We started by sharing free courses and learning resources with students. Access to knowledge was our first step.",
      Icon: BookOpen,
    },
    {
      label: "THE NEXT CHAPTER",
      title: "Learn by building together.",
      description:
        "Now we are introducing free, skill-based internships where practical work and learning from each other take the lead.",
      Icon: GraduationCap,
    },
    {
      label: "THE BIGGER VISION",
      title: "Create opportunities together.",
      description:
        "As the team grows, our plan is to pursue client and freelance projects, with fair revenue sharing according to contribution.",
      Icon: HeartHandshake,
    },
  ];
  const principles = [
    {
      Icon: Target,
      title: "Purpose before technology",
      text: "Start with a real need and explore the tools that fit it.",
    },
    {
      Icon: BookOpen,
      title: "Learning through doing",
      text: "Connect the idea to something you can build and explain.",
    },
    {
      Icon: HeartHandshake,
      title: "Growth through community",
      text: "Make space for different perspectives and shared knowledge.",
    },
    {
      Icon: Compass,
      title: "A clear way forward",
      text: "Be open about expectations, contribution, and the next step.",
    },
  ];
  return (
    <>
      <PageHero
        label="About"
        eyebrow="Guiding Talent. Building the Future."
        title="An opportunity worth"
        accent="building together."
        description="NorthStar Labs is a technology and learning initiative in Islamabad, Pakistan. We believe people should be able to build practical skills, share what they know, and work toward a professional future without an expensive starting point."
      >
        <a className="button" href="/internships/">
          Explore our next chapter
          <ArrowUpRight size={17} />
        </a>
        <a className="text-link" href="/community/">
          The community behind the idea
          <ArrowUpRight size={17} />
        </a>
      </PageHero>
      <Story />
      <section className="section story-chapters">
        <div className="container">
          <div className="section-heading">
            <SectionLabel>From an idea to a shared direction</SectionLabel>
            <h2>
              Our story moves
              <br />
              <span className="text-muted">with the people who build it.</span>
            </h2>
          </div>
          <div className="chapters-grid">
            {chapters.map(({ label, title, description, Icon }, index) => (
              <article key={label}>
                <div className="chapter-top">
                  <Icon size={25} strokeWidth={1.5} />
                  <span>0{index + 1}</span>
                </div>
                <p className="eyebrow">{label}</p>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section purpose-section">
        <div className="container purpose-grid">
          <div>
            <SectionLabel>The reason we are here</SectionLabel>
            <h2>
              Our north star
              <br />
              <span className="gradient-text">is shared progress.</span>
            </h2>
            <p>
              For students who have found practical experience difficult to
              access, we want to create a more useful starting point. One where
              learning connects to projects, knowledge is shared, and people
              build opportunities together.
            </p>
            <p>
              For clients, we want to turn useful questions into thoughtful
              technology. The same curiosity that drives our learning should
              help us understand the people and problems behind a project.
            </p>
            <div className="purpose-signature">
              <span className="note-line" />
              <span>NorthStar Labs · Islamabad, Pakistan</span>
            </div>
          </div>
          <div className="purpose-principles">
            {principles.map(({ Icon, title, text }) => (
              <article key={title}>
                <Icon size={22} strokeWidth={1.5} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Invite />
    </>
  );
}
