export const EMAIL = "northstarlabsai@gmail.com";
export const WHATSAPP = "https://wa.me/923169390445";
export const LOCATION = "Suan Garden, Islamabad, Pakistan";

export const topics = [
  "All topics",
  "AI & machine learning",
  "Development",
  "Automation",
  "Career growth",
] as const;

export type LearningCategory = Exclude<(typeof topics)[number], "All topics">;

export interface LearningTrack {
  id: string;
  title: string;
  category: LearningCategory;
  description: string;
  tags: string[];
  details: string;
  outcomes: string[];
}

export const learningTracks: LearningTrack[] = [
  {
    id: "python-ai",
    title: "Python & AI foundations",
    category: "AI & machine learning",
    description:
      "Start with programming fundamentals and explore how intelligent applications come together.",
    tags: ["Python", "Problem solving", "AI basics"],
    details:
      "A proposed learning direction for students curious about programming and AI. Explore Python through small, practical exercises before connecting those skills to useful applications. Contact us for confirmed opportunities and entry requirements.",
    outcomes: [
      "Explore core Python concepts and problem solving",
      "Practise working with files, data, and simple scripts",
      "Understand where AI can support a useful application",
    ],
  },
  {
    id: "generative-ai",
    title: "Generative AI & agents",
    category: "AI & machine learning",
    description:
      "Explore language models, helpful assistants, and the workflows that connect them to real tasks.",
    tags: ["Generative AI", "AI agents", "Applied AI"],
    details:
      "A proposed direction for learning how generative AI fits into practical software. Topics may include prompting, connecting models to tools, and evaluating their responses. Specific content and prerequisites will depend on the confirmed opportunity.",
    outcomes: [
      "Explore how language models and AI agents work",
      "Think through useful assistant and workflow ideas",
      "Learn why evaluation and human oversight matter",
    ],
  },
  {
    id: "web-software",
    title: "Web & software development",
    category: "Development",
    description:
      "Connect code, thoughtful interfaces, and practical problem solving to build for the web.",
    tags: ["Web development", "Software", "Git"],
    details:
      "A proposed learning direction focused on turning ideas into usable applications. Explore the relationship between interfaces, application logic, and data, with an emphasis on understandable code. Ask us about confirmed projects and learning opportunities.",
    outcomes: [
      "Explore the foundations of responsive web interfaces",
      "Understand how applications use and manage data",
      "Practise version control and explaining your code",
    ],
  },
  {
    id: "data-ml",
    title: "Data science & ML",
    category: "AI & machine learning",
    description:
      "Learn to ask better questions of data and explore the foundations of machine learning.",
    tags: ["Data science", "Machine learning", "Python"],
    details:
      "A proposed direction for students interested in finding patterns and making sense of data. Explore data preparation, visualisation, and introductory machine learning concepts. Program format, requirements, and availability will be shared when confirmed.",
    outcomes: [
      "Explore data preparation and visualisation",
      "Understand introductory machine learning concepts",
      "Practise interpreting results and their limitations",
    ],
  },
  {
    id: "portfolio-career",
    title: "Portfolio & career growth",
    category: "Career growth",
    description:
      "Give your work a clear story and explore your next steps into professional opportunities.",
    tags: ["Portfolios", "Freelancing", "Career direction"],
    details:
      "A proposed direction connecting practical work with professional communication. Explore how to document projects, present your contribution, and approach freelancing or career opportunities thoughtfully. Ask us about the guidance and project opportunities currently available.",
    outcomes: [
      "Structure a portfolio around work you can explain",
      "Explore project documentation and presentation",
      "Understand the basics of scope and client communication",
    ],
  },
  {
    id: "automation-workflows",
    title: "Automation & integrations",
    category: "Automation",
    description:
      "Connect tools and build workflows that turn repetitive work into something simpler.",
    tags: ["Automation", "Python", "APIs"],
    details:
      "Explore automation through useful problems: moving information between tools, preparing data, and simplifying a repeated task. This learning direction connects scripting, APIs, and workflow thinking. Ask the team about current resources and practical projects.",
    outcomes: [
      "Map the steps in a repeated workflow",
      "Explore scripts and connections between tools",
      "Consider errors, visibility, and tasks that still need a person",
    ],
  },
];

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  details: string;
  outcomes: string[];
}

export const services: Service[] = [
  {
    id: "ai-agents",
    number: "01",
    title: "AI & agents",
    description:
      "Put AI to work on a specific problem, from knowledge assistants to intelligent workflows.",
    tags: ["AI solutions", "Assistants", "AI agents"],
    details:
      "Explore where AI can make a useful difference in your product or operations. We can discuss assistants, AI agents, and custom AI features, starting with your users, available information, and the level of human oversight the task needs.",
    outcomes: [
      "Use-case discovery and a clear solution scope",
      "AI assistants and custom model integrations",
      "Evaluation, limitations, and human review considerations",
    ],
  },
  {
    id: "software-web",
    number: "02",
    title: "Software & web",
    description:
      "Build useful applications and considered web experiences around the people who use them.",
    tags: ["Web applications", "Custom software", "Interfaces"],
    details:
      "Bring a new product idea or an existing workflow that needs a better tool. We can explore websites, web applications, and custom software with a scope shaped around your users, priorities, and practical constraints.",
    outcomes: [
      "Application requirements and user journeys",
      "Responsive interfaces and application development",
      "Data handling and relevant system integrations",
    ],
  },
  {
    id: "automation",
    number: "03",
    title: "Automation",
    description:
      "Connect tools, simplify repetitive tasks, and give your team more room for meaningful work.",
    tags: ["Workflows", "Integrations", "Internal tools"],
    details:
      "Look at the manual steps slowing your work down. We can explore scripts, connected workflows, and internal tools that fit the way your team operates, with clear handling for exceptions and tasks that still need a person.",
    outcomes: [
      "Workflow mapping and automation opportunities",
      "Scripts and integrations between suitable tools",
      "Clear handoffs, exception handling, and visibility",
    ],
  },
  {
    id: "consulting",
    number: "04",
    title: "Technology consulting",
    description:
      "Make sense of your options and define a practical starting point for your next technology project.",
    tags: ["Discovery", "Technical direction", "Project planning"],
    details:
      "You do not need a finished technical brief to start a conversation. Share the problem, your goals, and your constraints so we can explore suitable approaches and outline a manageable next step.",
    outcomes: [
      "Problem discovery and requirement clarification",
      "Technology options and their tradeoffs",
      "A proposed scope and practical next steps",
    ],
  },
];

export const faqs = [
  {
    question: "Who is NorthStar Labs for?",
    answer:
      "NorthStar Labs brings together students interested in practical technology skills and clients looking to solve problems with technology. Whether you want to learn, explore a project, or discuss a solution, you can start a conversation with us.",
  },
  {
    question: "How do I join the free internships?",
    answer:
      "NorthStar Labs is introducing free, skill-based internships. Send your CV and a short introduction on WhatsApp to +92 316 9390445. Ask the team about the current intake, schedule, format, and practical requirements before joining.",
  },
  {
    question: "Is there an internship or training fee?",
    answer:
      "The skill-based internships we are introducing are free. NorthStar began by sharing free courses and resources, and access to practical learning remains part of our purpose.",
  },
  {
    question: "Do I need experience, and will I get a certificate?",
    answer:
      "Entry requirements and certificate availability will depend on the specific opportunity. Share what you already know and what you want to learn, and ask us for the confirmed requirements before joining.",
  },
  {
    question: "Can you help with portfolios and freelancing?",
    answer:
      "Portfolio development and career-oriented guidance are part of our focus. The aim is to help students communicate their skills and approach professional opportunities more thoughtfully. Ask us about the guidance currently available.",
  },
  {
    question: "How do I discuss a project with NorthStar Labs?",
    answer:
      "Send a short description of your problem or idea by email or WhatsApp. Include your goals and any timeline or budget considerations you already have. We can then discuss fit, scope, and a sensible next step.",
  },
  {
    question: "How does the earning vision work?",
    answer:
      "As the team becomes ready, our plan is to pursue freelance and client projects. When projects generate revenue, our aim is to share it fairly according to work and contribution. Income depends on actual projects and is not guaranteed.",
  },
];
