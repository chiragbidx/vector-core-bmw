// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ... (TYPE EXPORTS OMITTED FOR BREVITY; unchanged from before)

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "Launch",
    badgeOuter: "ClientPilot launches today",
    titleBefore: "",
    titleHighlight: "Manage Your Clients with Clarity",
    titleAfter: "",
    subtitle:
      "ClientPilot is the simple, powerful CRM that helps your team organize client information and streamline your workflow.",
    primaryCta: { label: "Get Started", href: "#pricing" },
    secondaryCta: { label: "See how ClientPilot works", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "ClientPilot dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Built with trusted tools",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why ClientPilot",
    heading: "A modern CRM that grows with you",
    description:
      "Made for forward-thinking teams who want a seamless, scalable way to manage clients, not just a spreadsheet replacement.",
    items: [
      {
        icon: "Blocks",
        title: "Scale Client Relationships",
        description: "Modern teams can collaborate and centralize every client touchpoint.",
      },
      {
        icon: "LineChart",
        title: "Stay Organized Easily",
        description: "Keep your client info, notes, and tasks in one CRM built for clarity.",
      },
      {
        icon: "Wallet",
        title: "Low Effort, High Impact",
        description: "Save time and minimize manual work with a dashboard that works for you.",
      },
      {
        icon: "Sparkle",
        title: "Modern, Clean UI",
        description: "Built for clarity and simplicity—so your team always knows what’s next.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "Everything your team needs",
    subtitle:
      "ClientPilot gives you control, collaboration, and clarity—making client management simple for everyone.",
    items: [
      { icon: "TabletSmartphone", title: "Centralize Client Data", description: "Easily store, view, and update all your client information in one secure place." },
      { icon: "BadgeCheck", title: "Team Collaboration", description: "Work together to manage client communications and notes seamlessly." },
      { icon: "Goal", title: "Actionable Overviews", description: "See a clear summary of your clients and stay on top of every relationship." },
      { icon: "PictureInPicture", title: "Simple, Powerful Workflow", description: "Quickly find, edit, and organize any client record in seconds." },
      { icon: "MousePointerClick", title: "Easy to Use", description: "No steep learning curve—just log in and start managing your clients immediately." },
      { icon: "Newspaper", title: "Secure by Default", description: "All your data is protected with best-in-class cloud security." },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Services",
    heading: "CRM foundation, extend as you grow",
    subtitle:
      "The right baseline for a CRM—add automations, sync with email, and more as your business grows.",
    items: [
      { title: "Authentication Foundation", description: "Secure, team-friendly sign-in and account management built in.", pro: false },
      { title: "Import & Export", description: "Bring your client data in or out with CSV (coming soon).", pro: false },
      { title: "Custom Fields", description: "Tailor the CRM to track what matters most to your business.", pro: false },
      { title: "Secure + Reliable", description: "Enterprise-grade infrastructure keeps your client data safe.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Testimonials",
    heading: "Teams thriving on ClientPilot",
    reviews: [
      { image: "/demo-img.jpg", name: "Aarav Shah", role: "Founder, FinchFlow", comment: "ClientPilot streamlined our client onboarding – our team is finally aligned.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Maya Patel", role: "COO, OrbitDesk", comment: "We replaced spreadsheets and boosted productivity instantly.", rating: 4.9 },
      { image: "/demo-img.jpg", name: "Nikhil Rao", role: "CTO, TeamForge", comment: "The dashboards are beautiful and our team onboarded in no time.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Emma Brooks", role: "Head of Ops, Nimbus", comment: "Finally a CRM that doesn't get in our way. Adoption was immediate.", rating: 5.0 },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Team",
    heading: "Meet the ClientPilot team",
    members: [ // Can update here if needed.
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "Github", url: "https://github.com/leoMirandaa" },
        ],
      },
    ],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Flexible CRM Pricing",
    subtitle: "Pick the plan that fits your business—free to start, then scale as you grow.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Starter",
        popular: false,
        price: 0,
        description: "Perfect for individuals or small teams getting organized.",
        buttonText: "Start for free",
        benefits: ["Up to 3 teammates", "Secure CRM dashboard", "All core features", "Chat support", "No credit card needed"],
      },
      {
        title: "Growth",
        popular: true,
        price: 39,
        description: "For growing teams who need advanced collaboration.",
        buttonText: "Start trial",
        benefits: ["Unlimited teammates", "Advanced client management", "Priority support", "Role-based permissions", "Custom fields coming soon"],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 149,
        description: "For businesses needing security, compliance, and custom integrations.",
        buttonText: "Contact sales",
        benefits: ["Custom onboarding", "Advanced security", "Integration support", "Dedicated account manager", "SLAs & priority support"],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Talk to the ClientPilot team",
    description:
      "Want a tour, a personalized onboarding, or help planning your CRM workflow? Get in touch—we’d love to help.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Find us", value: "Remote-first • San Francisco, CA" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "chirag@bidx.ai" },
      hours: { label: "Visit us", value: ["Monday - Friday", "9AM - 6PM PT"] },
    },
    formSubjects: ["CRM Demo", "Pricing & Plans", "Custom Features", "Enterprise Inquiry"],
    formSubmitLabel: "Send inquiry",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "Your CRM questions, answered",
    items: [
      { question: "Is ClientPilot free to start?", answer: "Yes! Anyone can start for free and upgrade when ready." },
      { question: "Can I invite my team?", answer: "Absolutely. Just add teammates and start collaborating." },
      { question: "Does ClientPilot support data import/export?", answer: "CSV import/export will be available soon. Get in touch to join the beta!" },
      { question: "Is my data secure?", answer: "Yes. We use cloud best practices and always encrypt your data at rest and in transit." },
      { question: "Can I request features?", answer: "We’d love to hear your feedback! Contact us to get involved." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "ClientPilot",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com" },
          { label: "Discord", href: "https://discord.com" },
          { label: "X", href: "https://x.com" },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} ClientPilot. All rights reserved.`,
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "ClientPilot",
    routes: [
      { href: "/#testimonials", label: "Testimonials" },
      { href: "/#team", label: "Team" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "ClientPilot preview" },
    features: [
      { title: "Centralize Client Data", description: "Store and manage all your client information and notes in one place." },
      { title: "Team Collaboration", description: "Delegate, collaborate, and never lose a thread on any client." },
      { title: "Insightful Overviews", description: "Stay on top of relationships and see what's next at a glance." },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Sign Up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com", ariaLabel: "View on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

export function getHomeContent(): HomeContent {
  return homeContent;
}