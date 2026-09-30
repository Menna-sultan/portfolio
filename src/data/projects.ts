export type ProjectCategory = "frontend" | "backend" | "uiux" | "fullstack";

export interface Project {
  title: string;
  year: string;
  description: string;
  image: string;
  mainCategory: string;
  categories: ProjectCategory[];
  liveDemoUrl?: string;
  githubUrl?: string;
  behanceUrl?: string;
  technologies: string[];
}

export const categories: { label: string; value: "all" | ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "UI/UX", value: "uiux" },
  { label: "Full Stack", value: "fullstack" },
];

export const projects: Project[] = [
    {
    title: "EXAM APP",
    year: "2026",
    description:
      "An exam management dashboard for managing diplomas, exams, questions, and student submissions. Includes an admin dashboard for managing and monitoring the exam system.",
    image: "/Diplomas.png",
    mainCategory: "Frontend",
    categories: ["frontend"],
    liveDemoUrl: "https://online-exam-app-six.vercel.app",
    githubUrl: "https://github.com/Menna-sultan/exam-app.git",
    technologies: [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "React Query",
  "NextAuth.js"
],
  },

  {
    title: "Rose APP",
    year: "2026",
    description:
      "An e-commerce platform for gifts, flowers, and gift boxes for occasions like birthdays, weddings, engagements, and anniversaries. Includes a customer storefront with cart, wishlist, Stripe card payments, and push notifications, plus an admin dashboard for managing products, categories, occasions, orders, and revenue",
    image: "/rose app.png",
    mainCategory: "Frontend",
    categories: ["frontend"],
    liveDemoUrl: "https://rose-app-team-6.vercel.app",
    githubUrl: "https://github.com/Roma-2006/rose-app-team-6.git",
      technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Stripe",
    "Recharts",
    "i18n (Arabic / English)",
  ],
  },




  {
    title: "ERP Web Application",
    year: "2026",
    description:
      "Responsive ERP system for CRM, project management, finance, accounting, messaging, reporting, and member management.",
    image: "/erp.png",
    mainCategory: "Frontend",
    categories: ["frontend"],
    liveDemoUrl: "https://madarerpsystem.vercel.app",
    githubUrl: "https://github.com/Menna-sultan/ERP-System",
    technologies: ["Vue.js 3", "Tailwind CSS", "Chart.js", "ECharts"],
  },

  {
    title: "Furniture E-Commerce Website",
    year: "2025",
    description:
      "Responsive furniture e-commerce website featuring an interactive product catalog and user authentication.",
    image: "/funiro .png",
    mainCategory: "Frontend",
    categories: ["frontend"],
    liveDemoUrl: "https://furniture-website-ff4d.vercel.app/",
    githubUrl: "https://github.com/Menna-sultan/furniture-website",
    technologies: ["Vue.js 3", "Tailwind CSS"],
  },
  {
    title: "E-commerce Store API",
    year: "2024",
    description:
      "Complete e-commerce platform API with Stripe payments, JWT authentication, and basket management.",
    image: "/website.jpg",
    mainCategory: "Backend",
    categories: ["backend"],
    githubUrl: "https://github.com/Menna-sultan/e-commerce",
    technologies: ["ASP.NET Core", "Stripe", "SQL"],
  },
  {
    title: "Tashtebaty – Home Services Platform",
    year: "2025",
    description:
      "A full-stack home services platform connecting customers with technicians and companies. Features secure authentication, role-based dashboards, online payments, real-time order tracking, and an AI-powered assistant for service recommendations.",
    image: "/ppppp.png",
    mainCategory: "Full Stack",
    categories: ["fullstack", "frontend", "backend"],
    liveDemoUrl: "https://tashtebaty.vercel.app",
    githubUrl: "https://github.com/mah123K/Tashtebaty",
    technologies: ["Vue.js 3", "Tailwind CSS", "Firebase", "Gemini API", "PayMob", "Chart.js"],
  },
  {
    title: "Ebook App Chatbot",
    year: "2024",
    description:
      "Integrated an AI-powered chatbot using NLP techniques (LSTM, Naive Bayes) to assist users with book queries.",
    image: "/chatbot.jpg.jpg",
    mainCategory: "Backend",
    categories: ["backend"],
    technologies: ["Python", "NLP", "Machine Learning"],
  },
  {
    title: "Edraak Redesign",
    year: "2025",
    description:
      "Redesigned the Edraak website to improve UI/UX, focusing on accessibility and visual hierarchy.",
    image: "/edrak.png",
    mainCategory: "UI/UX",
    categories: ["uiux"],
    behanceUrl: "https://behance.net/mennaahmed156",
    technologies: ["Figma", "UI/UX", "Prototyping"],
  },
];
