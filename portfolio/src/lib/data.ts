export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce with real-time inventory",
    image: "/ecommerce-platform-interface.png",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    links: {
      live: "https://example.com",
      github: "https://github.com/example",
      case: "/projects/ecommerce",
    },
    problem:
      "Need a scalable e-commerce solution with real-time inventory management and seamless checkout experience.",
    solution:
      "Built a React-based frontend with TypeScript for type safety, integrated with a Node.js backend and PostgreSQL database. Implemented Redis caching for performance optimization.",
    challenges: ["Real-time inventory sync", "Payment gateway integration", "High traffic optimization"],
    improvements: ["Add AI-based recommendations", "Implement GraphQL", "Mobile app expansion"],
  },
  {
    id: 2,
    title: "Design System UI",
    description: "Comprehensive component library for enterprise",
    image: "/design-system-components.png",
    technologies: ["React", "Storybook", "Tailwind", "TypeScript"],
    links: {
      live: "https://example.com",
      github: "https://github.com/example",
      case: "/projects/design-system",
    },
    problem: "Enterprise clients needed a unified design system to maintain brand consistency across 50+ applications.",
    solution:
      "Created a comprehensive component library using React and Storybook. Documented all components with live examples and accessibility guidelines.",
    challenges: ["Component consistency", "Accessibility compliance", "Team adoption"],
    improvements: ["Animation library", "Theme generator", "Design tokens automation"],
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Real-time data visualization and reporting",
    image: "/analytics-dashboard-visualization.png",
    technologies: ["React", "D3.js", "TypeScript", "WebSocket"],
    links: {
      live: "https://example.com",
      github: "https://github.com/example",
      case: "/projects/analytics",
    },
    problem: "Clients needed to visualize complex datasets in real-time with interactive charts and reports.",
    solution:
      "Developed interactive dashboard using D3.js for visualizations and WebSocket for real-time updates. Built custom hooks for data management.",
    challenges: ["Large dataset performance", "Real-time updates", "Complex interactions"],
    improvements: ["Add machine learning insights", "Custom report builder", "Export capabilities"],
  },
]

export const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Redis", "REST APIs"] },
  { category: "Tools", items: ["Git", "Docker", "Figma", "Storybook", "Testing Library"] },
  { category: "Design", items: ["UI/UX", "Responsive Design", "Accessibility", "Design Systems"] },
]

export const timeline = [
  {
    year: "2024",
    title: "Senior Frontend Developer",
    company: "Tech Corp",
    description: "Led frontend architecture and mentored junior developers",
  },
  {
    year: "2023",
    title: "Frontend Developer",
    company: "Design Studio",
    description: "Built component libraries and design systems",
  },
  {
    year: "2022",
    title: "Junior Developer",
    company: "StartUp Inc",
    description: "Started career building full-stack web applications",
  },
  {
    year: "2021",
    title: "Bootcamp Graduate",
    company: "Code Academy",
    description: "Completed intensive web development bootcamp",
  },
]
