export const sitePages = [
  {
    path: "/",
    label: "Home",
    title: "NorthStar Labs — Learn. Build. Share. Earn. Grow.",
    description:
      "Free, skill-based internships, shared learning, and purposeful technology. Join NorthStar Labs in Islamabad and grow with a community of builders.",
  },
  {
    path: "/internships/",
    label: "Internships",
    title: "Free Skill-Based Internships | NorthStar Labs",
    description:
      "Learn machine learning, automation, and agentic AI through practical teamwork. Explore free NorthStar Labs internships and send your CV on WhatsApp.",
  },
  {
    path: "/learn/",
    label: "Learning",
    title: "Learning Paths & Free Resources | NorthStar Labs",
    description:
      "Explore Python, machine learning, agentic AI, automation, web development, and portfolio skills through practical learning and shared knowledge.",
  },
  {
    path: "/community/",
    label: "Community",
    title: "A Community That Learns Together | NorthStar Labs",
    description:
      "Everyone can teach. Everyone can learn. Discover NorthStar Labs’ collaborative community, shared responsibility, and vision for fair contribution-based growth.",
  },
  {
    path: "/services/",
    label: "Services",
    title: "AI, Software & Automation Services | NorthStar Labs",
    description:
      "Discuss AI solutions, agents, web applications, workflow automation, and technology consulting with NorthStar Labs in Islamabad, Pakistan.",
  },
  {
    path: "/projects/",
    label: "Projects",
    title: "Practical Projects & Building Directions | NorthStar Labs",
    description:
      "Explore the useful problems NorthStar Labs aims to solve through AI assistants, automation, and purposeful web applications.",
  },
  {
    path: "/about/",
    label: "About",
    title: "Our Story & Shared Vision | NorthStar Labs",
    description:
      "From sharing free learning resources to introducing free skill-based internships: discover the story, purpose, and bigger vision of NorthStar Labs.",
  },
  {
    path: "/contact/",
    label: "Contact",
    title: "Join NorthStar or Discuss a Project | NorthStar Labs",
    description:
      "Send your CV on WhatsApp to join NorthStar Labs, or start a conversation about your technology project. Based in Suan Garden, Islamabad, Pakistan.",
  },
] as const;

export function normalizePath(path: string) {
  const clean = path.split("?")[0].replace(/\/+/g, "/");
  return clean === "/" ? "/" : `${clean.replace(/\/$/, "")}/`;
}
