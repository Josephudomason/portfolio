export type Project = {
  title: string;
  description: string;
  tools: string[];
  highlights: string[];
  live: string;
  image: string;
  accent: string;
  layout: "wide" | "tall" | "standard";
  source: string;
};

export const featuredProjects: Project[] = [
  {
    title: "Pristine Gadgets",
    description:
      "A storefront-focused gadgets experience with category-led browsing, product callouts, and a clear retail layout built for fast scanning.",
    tools: ["Next.js", "React", "TypeScript", "Vercel", "E-commerce UI"],
    highlights: ["Category filters", "Brand sections", "Promotional banners"],
    live: "https://gadgets-online-store.vercel.app/",
    image: "/project-shots/gadgets-online-store.png",
    accent: "indigo",
    layout: "standard",
    source: "Live deployment",
  },
  {
    title: "All Round Insurance",
    description:
      "A conversion-first insurance website with strong content hierarchy, trust-building sections, and service education across multiple policy types.",
    tools: ["Next.js", "React", "TypeScript", "Marketing Site", "Vercel"],
    highlights: ["Service sections", "FAQ flow", "Trust-oriented copy"],
    live: "https://insurance-nu-rust.vercel.app/",
    image: "/project-shots/insurance-web.png",
    accent: "violet",
    layout: "standard",
    source: "Live deployment",
  },
  {
    title: "City General Hospital",
    description:
      "A healthcare landing page focused on service clarity, doctor credibility, and patient-facing calls to action for appointments.",
    tools: ["Next.js", "React", "TypeScript", "Healthcare UI", "Vercel"],
    highlights: ["Doctor profiles", "Medical services", "Appointment CTA"],
    live: "https://my-health-app-xi.vercel.app/",
    image: "/project-shots/my-health-app.png",
    accent: "emerald",
    layout: "standard",
    source: "Live deployment",
  },
  {
    title: "Social Dashboard",
    description:
      "A workspace-style social media dashboard with feed navigation, search, trending tags, saved posts, and engagement actions.",
    tools: ["Next.js", "React", "TypeScript", "Vercel", "Dashboard UI"],
    highlights: ["Feed workspace", "Trending tags", "Engagement actions"],
    live: "https://social-media-dashboard-8clb.vercel.app/",
    image: "/project-shots/Social Dashboard.png",
    accent: "emerald",
    layout: "standard",
    source: "Live deployment",
  },
  {
    title: "Frame",
    description:
      "A dark photography gallery site with oversized image tiles, editorial navigation, and a polished portfolio-style showcase.",
    tools: ["Next.js", "React", "TypeScript", "Vercel", "Gallery UI"],
    highlights: ["Photo gallery", "Editorial nav", "Portfolio showcase"],
    live: "https://frame-two-black.vercel.app/",
    image: "/project-shots/Frame.png",
    accent: "amber",
    layout: "standard",
    source: "Live deployment",
  },
  {
    title: "Tionna",
    description:
      "A secure account access interface with login and signup flows, profile-ready messaging, and a calm dashboard-style visual system.",
    tools: ["Next.js", "React", "TypeScript", "Vercel", "Auth UI"],
    highlights: ["Login form", "Signup flow", "Member access"],
    live: "https://simple-account-creation-and-dashboa.vercel.app/",
    image: "/project-shots/Tionn Account Dashboard.png",
    accent: "sky",
    layout: "standard",
    source: "Live deployment",
  },
  {
    title: "Waypoint Travel Map",
    description:
      "A travel discovery interface centered on map-based exploration, place previews, and nearby highlights for planning visually.",
    tools: ["Next.js", "React", "TypeScript", "Vercel", "Map-based UX"],
    highlights: ["Interactive map", "Location search", "Destination cards"],
    live: "https://travel-map-app-ashen.vercel.app/",
    image: "/project-shots/travel-map-app.png",
    accent: "amber",
    layout: "standard",
    source: "Live deployment",
  },
  {
    title: "OrbitHQ SaaS Dashboard",
    description:
      "A polished SaaS dashboard concept combining analytics, billing, support, and workflow surfaces inside one enterprise-style workspace.",
    tools: ["Next.js", "React", "TypeScript", "Dashboard UI", "Vercel"],
    highlights: ["Executive analytics", "Role-aware views", "Automation panels"],
    live: "https://orbit-hq-saas-dashboard.vercel.app/",
    image: "/project-shots/orbit-hq-saas-dashboard.png",
    accent: "emerald",
    layout: "standard",
    source: "Live deployment",
  },
  {
    title: "Food Recipe App",
    description:
      "A recipe search experience with a lightweight browsing flow and a clean food-first presentation designed around quick discovery.",
    tools: ["React", "TypeScript", "Vite", "API Search UI", "Responsive Design"],
    highlights: ["Recipe search", "Card layout", "Fallback empty state"],
    live: "https://food-recipe-app-silk-xi.vercel.app/",
    image: "/project-shots/food-recipe-app.png",
    accent: "rose",
    layout: "standard",
    source: "Live deployment",
  },
  {
    title: "Shopping Cart",
    description:
      "A product listing and cart flow built around item comparison, stateful cart updates, and a classic commerce browsing pattern.",
    tools: ["React", "TypeScript", "Redux", "Vite", "E-commerce State"],
    highlights: ["Product catalog", "Cart updates", "Retail UI layout"],
    live: "https://shopping-cart-gray-six.vercel.app/",
    image: "/project-shots/shopping-cart.png",
    accent: "sky",
    layout: "standard",
    source: "Live deployment",
  },
  {
    title: "Pizza Motion",
    description:
      "A playful pizza brand interface with a motion-forward visual style, simple navigation, and bold product personality.",
    tools: ["React", "TypeScript", "Vite", "Motion UI", "Brand Landing Page"],
    highlights: ["Animated entry", "Bold hero", "Fast visual storytelling"],
    live: "https://pizza-motion-zeta.vercel.app/",
    image: "/project-shots/pizza-motion.png",
    accent: "amber",
    layout: "standard",
    source: "Live deployment",
  },
  {
    title: "Expense Tracker",
    description:
      "A focused finance dashboard for logging transactions, tracking balance, and visualizing personal income versus expense patterns.",
    tools: ["React", "TypeScript", "Vite", "State Management", "Finance UI"],
    highlights: ["Transaction log", "Balance summary", "Income and expense split"],
    live: "https://expense-tracker-app-xi-bice.vercel.app/",
    image: "/project-shots/expense-tracker-app.png",
    accent: "rose",
    layout: "standard",
    source: "Live deployment",
  },
];
