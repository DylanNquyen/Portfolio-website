export interface Project {
  slug: string
  title: string
  role: string
  period: string
  summary: string
  description: string
  challenges: string[]
  solutions: string[]
  results: string[]
  techStack: string[]
  features: string[]
  links?: {
    live?: string
    github?: string
  }
}

export const projects: Project[] = [
  {
    slug: "ai-recruitment-tool",
    title: "AI & Machine Learning Recruitment Support Tool for HR",
    role: "Frontend Developer",
    period: "Oct 2025 - Dec 2025",
    summary: "A multi-role SPA with AI-powered CV matching features for HR recruitment processes.",
    description: "Architected and developed a comprehensive recruitment platform that leverages AI to streamline the hiring process. The application serves three distinct user roles (Admin, Recruiter, Candidate) with role-based access control across 15+ pages.",
    challenges: [
      "Implementing strict role-based access control (RBAC) across a complex multi-page application",
      "Integrating real-time AI recommendation APIs while maintaining responsive UI",
      "Managing complex state across multiple user roles with different permissions",
      "Ensuring consistent UI patterns while accommodating different user workflows"
    ],
    solutions: [
      "Implemented a custom RBAC system using React Router v6 with protected routes and permission guards",
      "Used React Query for efficient API caching and optimistic updates for AI recommendations",
      "Developed a modular design system with Bootstrap 5 and SCSS for consistent, reusable components",
      "Created client-side pagination with React Paginate to reduce API calls and improve performance"
    ],
    results: [
      "Delivered a fully functional SPA with 15+ pages and 100% responsive design",
      "Reduced redundant API calls by 40% through optimized pagination and caching",
      "Achieved seamless role-based navigation with zero unauthorized access issues"
    ],
    techStack: ["React.js", "React Router v6", "Bootstrap 5", "SCSS", "React Paginate", "REST APIs"],
    features: [
      "AI-powered CV matching",
      "Real-time job suggestions",
      "Multi-role authentication (Admin/Recruiter/Candidate)",
      "Dynamic filtering and search",
      "Client-side pagination"
    ]
  },
  {
    slug: "bus-station-management",
    title: "Eastern Bus Station Management Website",
    role: "Frontend Developer",
    period: "Apr 2025 - May 2025",
    summary: "High-performance SPA for ticket booking with JWT authentication and real-time notifications.",
    description: "Built a comprehensive bus station management system using Vue 3 and the modern Vue ecosystem. The application handles complex ticket booking states, user authentication, and real-time updates across 20+ dynamic views.",
    challenges: [
      "Managing complex state for ticket booking flows with multiple interdependent steps",
      "Implementing secure JWT-based authentication with seamless token refresh",
      "Building real-time notification system for booking updates",
      "Handling 20+ dynamic views while maintaining fast load times"
    ],
    solutions: [
      "Leveraged Pinia for centralized state management with modular stores for each domain",
      "Implemented Axios interceptors for automatic JWT refresh and session management",
      "Built custom Vue composables for real-time notification handling",
      "Used Vue Router 4 navigation guards for strict RBAC and route protection"
    ],
    results: [
      "Successfully managed 20+ dynamic views with complex state interactions",
      "Achieved seamless session management with zero authentication failures",
      "Delivered real-time booking notifications with sub-second latency"
    ],
    techStack: ["Vue 3", "Vite", "Pinia", "Vue Router 4", "Axios", "JWT"],
    features: [
      "Dynamic ticket booking system",
      "JWT authentication with auto-refresh",
      "Role-based access control",
      "Real-time notifications",
      "20+ responsive views"
    ]
  },
  {
    slug: "personal-finance",
    title: "Personal Finance Management Website",
    role: "Frontend Developer",
    period: "Mar 2025 - May 2025",
    summary: "React SPA with interactive dashboards, real-time chatbot, and optimized data fetching.",
    description: "Architected a personal finance tracking application with interactive data visualizations, secure route management, and a real-time AI chatbot assistant. Focused on performance optimization and user engagement.",
    challenges: [
      "Creating interactive, performant data visualizations for financial trends",
      "Implementing real-time chatbot functionality without impacting app performance",
      "Reducing unnecessary server requests during rapid user interactions",
      "Ensuring secure route protection for sensitive financial data"
    ],
    solutions: [
      "Integrated Chart.js with custom React components for responsive, interactive dashboards",
      "Used Socket.IO client for real-time bidirectional chatbot communication",
      "Implemented Lodash debounce for optimized data fetching, reducing server requests by 30%",
      "Built secure routing with React Router v7 and Context API for auth state management"
    ],
    results: [
      "Reduced server requests by 30% through debounced data fetching",
      "Delivered interactive dashboards with sub-100ms render times",
      "Achieved real-time chatbot responses with enhanced user engagement"
    ],
    techStack: ["React.js", "React Router v7", "Context API", "Tailwind CSS", "MUI", "Chart.js", "Socket.IO", "Axios", "Lodash"],
    features: [
      "Interactive financial dashboards",
      "Real-time AI chatbot assistant",
      "Secure protected routes",
      "Responsive data visualizations",
      "Debounced API calls"
    ]
  },
  {
    slug: "corporate-website",
    title: "Nhien Viet Inspired - Corporate Website",
    role: "Frontend Developer",
    period: "Jun 2025 - Aug 2025",
    summary: "High-performance corporate website with Vanilla JS, optimized Core Web Vitals, and reusable OOP components.",
    description: "Developed a fully responsive corporate website using modern Vanilla JavaScript with a focus on performance optimization and code architecture. Implemented custom reusable UI components using OOP patterns.",
    challenges: [
      "Building responsive UI without framework overhead while maintaining developer experience",
      "Optimizing page load speed and Core Web Vitals scores",
      "Creating reusable, maintainable components in vanilla JavaScript",
      "Implementing reliable form validation with API integration"
    ],
    solutions: [
      "Engineered OOP-style JavaScript classes for reusable UI components (Toast system, Mobile Menu)",
      "Used Intersection Observer for lazy loading and critical resource preloading",
      "Integrated EmailJS API with async/await error handling and real-time Regex validation",
      "Implemented responsive design ensuring seamless UI across all devices down to 480px"
    ],
    results: [
      "Achieved excellent Core Web Vitals scores through lazy loading optimization",
      "Delivered seamless responsive experience across all device sizes",
      "Created maintainable codebase with reusable component architecture"
    ],
    techStack: ["JavaScript (ES6+)", "HTML5", "CSS3", "EmailJS API", "Intersection Observer"],
    features: [
      "Responsive down to 480px",
      "OOP-based component system",
      "Lazy loading with Intersection Observer",
      "Real-time form validation",
      "EmailJS integration"
    ],
    links: {
      live: "https://nvgo.org"
    }
  },
  {
    slug: "science-tech-management",
    title: "Science and Technology Management System",
    role: "Full-stack Developer",
    period: "Oct 2025 - Dec 2025",
    summary: "Collaborative project with dynamic dashboards and optimized SQL queries for research workflow management.",
    description: "Collaborated in a 5-member team to build a comprehensive science and technology management system. Contributed to both frontend development with TypeScript and backend optimization with .NET and Node.js.",
    challenges: [
      "Coordinating development across a 5-member team with different expertise",
      "Optimizing complex SQL queries for large research datasets",
      "Building dynamic dashboards that handle real-time data updates",
      "Ensuring data accuracy across multiple interconnected modules"
    ],
    solutions: [
      "Established clear module boundaries and API contracts for team coordination",
      "Designed and optimized SQL Server queries for improved data retrieval performance",
      "Built responsive frontend components with TypeScript for type-safe development",
      "Implemented validation layers to ensure data integrity across workflows"
    ],
    results: [
      "Significantly reduced data errors through improved validation workflows",
      "Enhanced system efficiency with optimized database queries",
      "Successfully delivered collaborative project on schedule"
    ],
    techStack: ["TypeScript", "C# (.NET)", "Node.js", "SQL Server"],
    features: [
      "Dynamic research dashboards",
      "Optimized SQL queries",
      "Multi-module workflow system",
      "Team collaboration features"
    ]
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug)
}
