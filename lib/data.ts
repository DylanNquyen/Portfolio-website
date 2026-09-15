export type Language = "vi" | "en"

export interface LocalizedString {
  vi: string
  en: string
}

export interface LocalizedStringArray {
  vi: string[]
  en: string[]
}

export interface Project {
  slug: string
  title: LocalizedString
  role: LocalizedString
  period: string
  summary: LocalizedString
  description: LocalizedString
  challenges: LocalizedStringArray
  solutions: LocalizedStringArray
  results: LocalizedStringArray
  techStack: string[]
  features: LocalizedStringArray
  links?: {
    live?: string
    github?: string
  }
}

export const projects: Project[] = [
  {
    slug: "crypto-market-analytics-platform",
    title: {
      en: "Crypto Market Analytics Platform | CoinMarketCap Clone",
      vi: "Nền tảng Phân tích Thị trường Crypto | Bản sao CoinMarketCap",
    },
    role: {
      en: "Full-stack Developer",
      vi: "Lập trình viên Full-stack",
    },
    period: "Jul 2026 - Sep 2026",
    summary: {
      en: "Responsive cryptocurrency market analytics platform built with React, NestJS, MySQL, real-time WebSocket updates, and Gemini AI.",
      vi: "Nền tảng phân tích thị trường crypto responsive sử dụng React, NestJS, MySQL, WebSocket thời gian thực và Gemini AI.",
    },
    description: {
      en: "Built a responsive cryptocurrency tracking platform using React 19, TypeScript, Zustand, NestJS, and MySQL, featuring market filtering, customizable data tables, search, and personalized watchlists.",
      vi: "Xây dựng nền tảng theo dõi tiền mã hóa responsive bằng React 19, TypeScript, Zustand, NestJS và MySQL, hỗ trợ lọc thị trường, bảng dữ liệu tùy chỉnh, tìm kiếm và watchlist cá nhân.",
    },
    challenges: {
      en: [
        "Designing a microservices-style architecture with independent authentication and crypto services.",
        "Protecting user-specific watchlist APIs with JWT-based authentication.",
        "Delivering real-time market updates while handling external API failures.",
        "Integrating Gemini AI while keeping external API calls resilient.",
      ],
      vi: [
        "Thiết kế kiến trúc microservices-style với service authentication và crypto độc lập.",
        "Bảo vệ các API watchlist theo người dùng bằng xác thực JWT.",
        "Cung cấp dữ liệu thị trường thời gian thực và xử lý lỗi từ external APIs.",
        "Tích hợp Gemini AI với cơ chế xử lý lỗi và retry phù hợp.",
      ],
    },
    solutions: {
      en: [
        "Separated authentication and crypto services using NestJS with database-per-service architecture.",
        "Routed REST APIs through Kong API Gateway using /api/auth, /api/crypto, and /api/ai prefixes.",
        "Implemented JWT authentication with bcrypt password hashing and remote token verification through a backend guard.",
        "Built Socket.IO real-time market updates with RxJS scheduling and normalized market data.",
        "Integrated Gemini AI with bounded retry and graceful fallback handling.",
        "Containerized the system with Docker Compose and automated validation/deployment workflows using GitHub Actions.",
      ],
      vi: [
        "Tách authentication service và crypto service bằng NestJS theo kiến trúc database-per-service.",
        "Định tuyến REST APIs qua Kong API Gateway với các prefix /api/auth, /api/crypto và /api/ai.",
        "Triển khai JWT authentication với bcrypt password hashing và remote token verification thông qua backend guard.",
        "Xây dựng cập nhật dữ liệu thị trường thời gian thực bằng Socket.IO, RxJS và normalized market data.",
        "Tích hợp Gemini AI với bounded retry và graceful fallback.",
        "Container hóa toàn hệ thống bằng Docker Compose và triển khai workflow CI/CD với GitHub Actions.",
      ],
    },
    results: {
      en: [
        "Delivered a responsive crypto insight dashboard with real-time tracking and personalized watchlists.",
        "Improved API security and service isolation with JWT and gateway routing.",
        "Created a deployable microservices-style setup with Docker and CI/CD automation.",
      ],
      vi: [
        "Bàn giao dashboard crypto responsive với tracking thời gian thực và watchlist cá nhân.",
        "Nâng cao bảo mật API và tách biệt service bằng JWT và gateway routing.",
        "Tạo môi trường triển khai theo kiểu microservices với Docker và tự động hóa CI/CD.",
      ],
    },
    techStack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Zustand",
      "Recharts",
      "Ant Design",
      "NestJS",
      "TypeORM",
      "MySQL",
      "Kong API Gateway",
      "Socket.IO",
      "Docker Compose",
      "Google Gemini API",
      "GitHub Actions CI/CD",
    ],
    features: {
      en: [
        "Cryptocurrency market tracking",
        "Market filtering and search",
        "Personalized watchlists",
        "JWT authentication",
        "Microservices-style architecture",
        "Kong API Gateway",
        "Real-time WebSocket market updates",
        "Gemini AI Copilot",
        "Dockerized services",
        "CI/CD workflow",
      ],
      vi: [
        "Theo dõi thị trường crypto",
        "Lọc và tìm kiếm thị trường",
        "Watchlist cá nhân",
        "Xác thực JWT",
        "Kiến trúc microservices-style",
        "Kong API Gateway",
        "Cập nhật thị trường thời gian thực bằng WebSocket",
        "Gemini AI Copilot",
        "Container hóa bằng Docker",
        "Quy trình CI/CD",
      ],
    },
    links: {
      github: "https://github.com/DylanNquyen/coinmarketcap-microservices.git",
    },
  },
  {
    slug: "corporate-website",
    title: {
      en: "Nhien Viet Inspired - Corporate Website",
      vi: "Nhiên Việt Inspired - Website Doanh nghiệp",
    },
    role: {
      en: "Solo Frontend Developer",
      vi: "Lập trình viên Front-end",
    },
    period: "Jun 2025 - Aug 2025",
    summary: {
      en: "High-performance corporate website built and deployed for a real business using Vanilla JavaScript, reusable OOP components, and Core Web Vitals optimization.",
      vi: "Website doanh nghiệp hiệu suất cao được xây dựng và triển khai thực tế bằng Vanilla JavaScript, component OOP tái sử dụng và tối ưu Core Web Vitals.",
    },
    description: {
      en: "Developed and deployed a fully responsive corporate website for a real business, covering travel, F&B, and visa services.",
      vi: "Phát triển và triển khai website responsive cho doanh nghiệp thực tế trong lĩnh vực du lịch, F&B và dịch vụ visa.",
    },
    challenges: {
      en: [
        "Building a high-performance corporate site without framework overhead.",
        "Optimizing loading performance and Core Web Vitals for real business traffic.",
        "Creating reusable and maintainable UI modules in vanilla JavaScript.",
        "Implementing reliable validation and contact form flows.",
      ],
      vi: [
        "Xây dựng website doanh nghiệp hiệu suất cao mà không cần framework quá nặng.",
        "Tối ưu thời gian tải và Core Web Vitals cho lưu lượng doanh nghiệp thực tế.",
        "Tạo UI modules tái sử dụng và dễ bảo trì bằng vanilla JavaScript.",
        "Triển khai validation và form liên hệ đáng tin cậy.",
      ],
    },
    solutions: {
      en: [
        "Built reusable UI modules using ES6+ Classes and OOP patterns.",
        "Optimized loading performance using native lazy loading, fixed image dimensions, aspect-ratio, and Intersection Observer.",
        "Consolidated scroll, parallax, and header behavior into a requestAnimationFrame scheduler.",
        "Implemented real-time form validation with Regex and EmailJS with PHP fallback.",
        "Added accessibility support including keyboard focus management, skip links, and ARIA live regions.",
      ],
      vi: [
        "Xây dựng UI modules tái sử dụng bằng ES6+ Classes và OOP.",
        "Tối ưu loading bằng native lazy loading, kích thước ảnh cố định, aspect-ratio và Intersection Observer.",
        "Gom logic scroll, parallax và header vào requestAnimationFrame scheduler.",
        "Triển khai validation form thời gian thực bằng Regex và EmailJS với PHP fallback.",
        "Bổ sung accessibility với keyboard focus management, skip link và ARIA live regions.",
      ],
    },
    results: {
      en: [
        "Successfully deployed to production at nvgo.org.",
        "Improved loading performance and Core Web Vitals.",
        "Maintained responsive behavior across desktop and mobile devices.",
      ],
      vi: [
        "Đã triển khai production tại nvgo.org.",
        "Cải thiện hiệu suất tải trang và Core Web Vitals.",
        "Duy trì responsive trên desktop và mobile.",
      ],
    },
    techStack: ["Vanilla JavaScript (ES6+)", "HTML5", "CSS3", "EmailJS", "PHP fallback", "Intersection Observer API"],
    features: {
      en: [
        "Real business production deployment",
        "Responsive corporate landing pages",
        "Performance-first UI architecture",
        "Form validation and email integration",
        "Accessibility enhancements",
      ],
      vi: [
        "Triển khai production cho doanh nghiệp thực tế",
        "Landing page doanh nghiệp responsive",
        "Kiến trúc UI ưu tiên hiệu năng",
        "Validation form và tích hợp email",
        "Nâng cấp accessibility",
      ],
    },
    links: {
      live: "https://nvgo.org",
      github: "https://github.com/DylanNquyen/Nhi-n-Vi-t-Inspired.git",
    },
  },
  {
    slug: "bus-station-management",
    title: {
      en: "Eastern Bus Station Management Website",
      vi: "Website Quản lý Bến xe Miền Đông",
    },
    role: {
      en: "Frontend Developer",
      vi: "Lập trình viên Front-end",
    },
    period: "Apr 2025 - May 2025",
    summary: {
      en: "High-performance Vue 3 SPA for bus schedules, ticket booking, and operational management with JWT authentication and strict RBAC.",
      vi: "SPA Vue 3 hiệu suất cao cho quản lý lịch trình, đặt vé và vận hành bến xe với xác thực JWT và RBAC chặt chẽ.",
    },
    description: {
      en: "Built a bus station management SPA for customers and operational staff, covering schedules, trips, and ticket booking.",
      vi: "Xây dựng SPA quản lý bến xe cho khách hàng và nhân sự vận hành, bao gồm lịch trình, chuyến xe và đặt vé.",
    },
    challenges: {
      en: [
        "Organizing complex ticket and schedule flows across customer and staff workflows.",
        "Enforcing RBAC and route control across workflows and role-based pages.",
        "Handling API contracts and response normalization consistently.",
        "Preventing duplicate seat booking under concurrent interactions.",
      ],
      vi: [
        "Tổ chức luồng đặt vé và lịch trình phức tạp giữa workflow khách hàng và nhân sự.",
        "Thực thi RBAC và kiểm soát route theo vai trò trên các trang khác nhau.",
        "Quản lý API contract và chuẩn hóa response nhất quán.",
        "Ngăn chặn đặt chỗ trùng ghế khi có tương tác đồng thời.",
      ],
    },
    solutions: {
      en: [
        "Modularized domain views and components using Vue 3.",
        "Managed business state with Pinia stores for auth, trips, tickets, and customers.",
        "Implemented Vue Router 4 navigation guards with RBAC for Customer, Staff, and Admin.",
        "Standardized Axios request/response handling according to API_CONTRACT.md.",
        "Added JWT Bearer token interceptors and centralized handling for 401, 403, 404, and 500 responses.",
        "Used pessimistic UI for ticket and seat booking to rely on server-side confirmation and prevent duplicate seat booking.",
      ],
      vi: [
        "Module hóa domain views và components bằng Vue 3.",
        "Quản lý business state bằng Pinia cho auth, chuyến xe, vé xe và khách hàng.",
        "Triển khai Vue Router 4 navigation guards với RBAC cho Customer, Staff và Admin.",
        "Chuẩn hóa request/response theo API_CONTRACT.md.",
        "Sử dụng Axios interceptors để đính kèm JWT Bearer token và xử lý tập trung lỗi 401, 403, 404 và 500.",
        "Áp dụng pessimistic UI cho đặt vé/chọn ghế, dựa trên server-side confirmation để hạn chế race condition đặt trùng ghế.",
      ],
    },
    results: {
      en: [
        "Delivered a high-performance SPA for booking and station operations.",
        "Improved authorization consistency and route separation across user roles.",
        "Reduced booking conflicts through server-confirmed seat handling.",
      ],
      vi: [
        "Bàn giao SPA hiệu suất cao cho đặt vé và vận hành bến xe.",
        "Nâng cao tính nhất quán phân quyền và tách route theo vai trò người dùng.",
        "Giảm xung đột đặt chỗ nhờ cơ chế xác nhận ghế từ phía server.",
      ],
    },
    techStack: ["Vue 3", "Vite", "Pinia 3", "Vue Router 4", "Axios", "Bootstrap 5", "Vue Toastification"],
    features: {
      en: [
        "Bus schedule management",
        "Ticket booking flow",
        "JWT authentication",
        "RBAC authorization",
        "Responsive operational dashboard",
      ],
      vi: [
        "Quản lý lịch trình xe",
        "Luồng đặt vé",
        "Xác thực JWT",
        "Phân quyền RBAC",
        "Dashboard vận hành responsive",
      ],
    },
    links: {
      github: "https://github.com/ntqnhu0105/CNPM-22DTHC2-NPKHTech.git",
    },
  },
  {
    slug: "ai-recruitment-tool",
    title: {
      en: "AI & Machine Learning Recruitment Support Tool for HR",
      vi: "Công cụ Hỗ trợ Tuyển dụng AI & Machine Learning cho HR",
    },
    role: {
      en: "Frontend Developer",
      vi: "Lập trình viên Frontend",
    },
    period: "Oct 2025 - Dec 2025",
    summary: {
      en: "A multi-role SPA with AI-powered CV matching features for HR recruitment processes.",
      vi: "SPA đa vai trò tích hợp AI để khớp CV tự động trong quy trình tuyển dụng HR.",
    },
    description: {
      en: "Architected and developed a comprehensive recruitment platform that leverages AI to streamline the hiring process. The application serves three distinct user roles (Admin, Recruiter, Candidate) with role-based access control across 15+ pages.",
      vi: "Thiết kế và phát triển nền tảng tuyển dụng toàn diện ứng dụng AI để tối ưu hóa quy trình tuyển dụng. Ứng dụng phục vụ ba vai trò người dùng (Admin, Nhà tuyển dụng, Ứng viên) với kiểm soát truy cập theo vai trò trên 15+ trang.",
    },
    challenges: {
      en: [
        "Implementing strict role-based access control (RBAC) across a complex multi-page application",
        "Integrating real-time AI recommendation APIs while maintaining responsive UI",
        "Managing complex state across multiple user roles with different permissions",
        "Ensuring consistent UI patterns while accommodating different user workflows",
      ],
      vi: [
        "Triển khai kiểm soát truy cập theo vai trò (RBAC) chặt chẽ trên ứng dụng đa trang phức tạp",
        "Tích hợp API gợi ý AI thời gian thực trong khi vẫn duy trì UI phản hồi nhanh",
        "Quản lý state phức tạp cho nhiều vai trò người dùng với các quyền khác nhau",
        "Đảm bảo tính nhất quán UI trong khi đáp ứng các luồng làm việc khác nhau",
      ],
    },
    solutions: {
      en: [
        "Implemented a custom RBAC system using React Router v6 with protected routes and permission guards",
        "Used React Query for efficient API caching and optimistic updates for AI recommendations",
        "Developed a modular design system with Bootstrap 5 and SCSS for consistent, reusable components",
        "Created client-side pagination with React Paginate to reduce API calls and improve performance",
      ],
      vi: [
        "Xây dựng hệ thống RBAC tùy chỉnh dùng React Router v6 với protected routes và permission guards",
        "Dùng React Query để cache API hiệu quả và cập nhật lạc quan cho gợi ý AI",
        "Phát triển design system module hóa với Bootstrap 5 và SCSS cho các component tái sử dụng",
        "Tạo phân trang phía client với React Paginate để giảm API calls và cải thiện hiệu suất",
      ],
    },
    results: {
      en: [
        "Delivered a fully functional SPA with 15+ pages and 100% responsive design",
        "Reduced redundant API calls by 40% through optimized pagination and caching",
        "Achieved seamless role-based navigation with zero unauthorized access issues",
      ],
      vi: [
        "Bàn giao SPA hoàn chỉnh với 15+ trang và thiết kế responsive 100%",
        "Giảm 40% API calls dư thừa nhờ phân trang và cache tối ưu",
        "Điều hướng theo vai trò mượt mà, không có sự cố truy cập trái phép",
      ],
    },
    techStack: ["React.js", "React Router v6", "Bootstrap 5", "SCSS", "React Paginate", "REST APIs"],
    features: {
      en: [
        "AI-powered CV matching",
        "Real-time job suggestions",
        "Multi-role authentication (Admin/Recruiter/Candidate)",
        "Dynamic filtering and search",
        "Client-side pagination",
      ],
      vi: [
        "Khớp CV bằng AI",
        "Gợi ý việc làm thời gian thực",
        "Xác thực đa vai trò (Admin/Nhà tuyển dụng/Ứng viên)",
        "Lọc và tìm kiếm động",
        "Phân trang phía client",
      ],
    },
    links: {
      github: "https://github.com/dpminhtri-dev-swe/React-frontend.git",
    },
  },
  {
    slug: "personal-finance",
    title: {
      en: "Personal Finance Management Website",
      vi: "Website Quản lý Tài chính Cá nhân",
    },
    role: {
      en: "Frontend Developer",
      vi: "Lập trình viên Frontend",
    },
    period: "Mar 2025 - May 2025",
    summary: {
      en: "React SPA with interactive dashboards, real-time chatbot, and optimized data fetching.",
      vi: "React SPA với dashboard tương tác, chatbot thời gian thực và tối ưu hóa data fetching.",
    },
    description: {
      en: "Architected a personal finance tracking application with interactive data visualizations, secure route management, and a real-time AI chatbot assistant. Focused on performance optimization and user engagement.",
      vi: "Thiết kế ứng dụng theo dõi tài chính cá nhân với trực quan hóa dữ liệu tương tác, quản lý route bảo mật và trợ lý chatbot AI thời gian thực. Tập trung vào tối ưu hiệu suất và trải nghiệm người dùng.",
    },
    challenges: {
      en: [
        "Creating interactive, performant data visualizations for financial trends",
        "Implementing real-time chatbot functionality without impacting app performance",
        "Reducing unnecessary server requests during rapid user interactions",
        "Ensuring secure route protection for sensitive financial data",
      ],
      vi: [
        "Tạo trực quan hóa dữ liệu tương tác, hiệu suất cao cho xu hướng tài chính",
        "Triển khai chatbot thời gian thực mà không ảnh hưởng đến hiệu suất ứng dụng",
        "Giảm các request server không cần thiết trong quá trình tương tác nhanh",
        "Đảm bảo bảo vệ route cho dữ liệu tài chính nhạy cảm",
      ],
    },
    solutions: {
      en: [
        "Integrated Chart.js with custom React components for responsive, interactive dashboards",
        "Used Socket.IO client for real-time bidirectional chatbot communication",
        "Implemented Lodash debounce for optimized data fetching, reducing server requests by 30%",
        "Built secure routing with React Router v7 and Context API for auth state management",
      ],
      vi: [
        "Tích hợp Chart.js với React components tùy chỉnh cho dashboard responsive, tương tác",
        "Dùng Socket.IO client cho giao tiếp chatbot hai chiều thời gian thực",
        "Triển khai Lodash debounce để tối ưu data fetching, giảm 30% server requests",
        "Xây dựng routing bảo mật với React Router v7 và Context API để quản lý auth state",
      ],
    },
    results: {
      en: [
        "Reduced server requests by 30% through debounced data fetching",
        "Delivered interactive dashboards with sub-100ms render times",
        "Achieved real-time chatbot responses with enhanced user engagement",
      ],
      vi: [
        "Giảm 30% server requests nhờ debounced data fetching",
        "Dashboard tương tác với thời gian render dưới 100ms",
        "Phản hồi chatbot thời gian thực, tăng cường tương tác người dùng",
      ],
    },
    techStack: ["React.js", "React Router v7", "Context API", "Tailwind CSS", "MUI", "Chart.js", "Socket.IO", "Axios", "Lodash"],
    features: {
      en: [
        "Interactive financial dashboards",
        "Real-time AI chatbot assistant",
        "Secure protected routes",
        "Responsive data visualizations",
        "Debounced API calls",
      ],
      vi: [
        "Dashboard tài chính tương tác",
        "Trợ lý chatbot AI thời gian thực",
        "Route được bảo vệ bảo mật",
        "Trực quan hóa dữ liệu responsive",
        "API calls với debounce",
      ],
    },
    links: {
      github: "https://github.com/ntqnhu0105/DoAn-CoSo.git",
    },
  },
  {
    slug: "science-tech-management",
    title: {
      en: "Science and Technology Management System",
      vi: "Hệ thống Quản lý Khoa học và Công nghệ",
    },
    role: {
      en: "Full-stack Developer",
      vi: "Lập trình viên Full-stack",
    },
    period: "Oct 2025 - Dec 2025",
    summary: {
      en: "Collaborative project with dynamic dashboards and optimized SQL queries for research workflow management.",
      vi: "Dự án cộng tác với dashboard động và truy vấn SQL tối ưu để quản lý quy trình nghiên cứu.",
    },
    description: {
      en: "Collaborated in a 5-member team to build a comprehensive science and technology management system. Contributed to both frontend development with TypeScript and backend optimization with .NET and Node.js.",
      vi: "Cộng tác trong nhóm 5 thành viên để xây dựng hệ thống quản lý khoa học và công nghệ toàn diện. Đóng góp cả phát triển frontend với TypeScript và tối ưu backend với .NET và Node.js.",
    },
    challenges: {
      en: [
        "Coordinating development across a 5-member team with different expertise",
        "Optimizing complex SQL queries for large research datasets",
        "Building dynamic dashboards that handle real-time data updates",
        "Ensuring data accuracy across multiple interconnected modules",
      ],
      vi: [
        "Phối hợp phát triển trong nhóm 5 thành viên với chuyên môn khác nhau",
        "Tối ưu các truy vấn SQL phức tạp cho tập dữ liệu nghiên cứu lớn",
        "Xây dựng dashboard động xử lý cập nhật dữ liệu thời gian thực",
        "Đảm bảo độ chính xác dữ liệu trên nhiều module liên kết",
      ],
    },
    solutions: {
      en: [
        "Established clear module boundaries and API contracts for team coordination",
        "Designed and optimized SQL Server queries for improved data retrieval performance",
        "Built responsive frontend components with TypeScript for type-safe development",
        "Implemented validation layers to ensure data integrity across workflows",
      ],
      vi: [
        "Thiết lập ranh giới module rõ ràng và API contracts để phối hợp nhóm",
        "Thiết kế và tối ưu truy vấn SQL Server để cải thiện hiệu suất truy xuất dữ liệu",
        "Xây dựng frontend component responsive với TypeScript để phát triển type-safe",
        "Triển khai các lớp xác thực để đảm bảo tính toàn vẹn dữ liệu trong các quy trình",
      ],
    },
    results: {
      en: [
        "Significantly reduced data errors through improved validation workflows",
        "Enhanced system efficiency with optimized database queries",
        "Successfully delivered collaborative project on schedule",
      ],
      vi: [
        "Giảm đáng kể lỗi dữ liệu nhờ cải thiện quy trình xác thực",
        "Nâng cao hiệu quả hệ thống với truy vấn database tối ưu",
        "Bàn giao dự án cộng tác thành công đúng tiến độ",
      ],
    },
    techStack: ["TypeScript", "C# (.NET)", "Node.js", "SQL Server"],
    features: {
      en: [
        "Dynamic research dashboards",
        "Optimized SQL queries",
        "Multi-module workflow system",
        "Team collaboration features",
      ],
      vi: [
        "Dashboard nghiên cứu động",
        "Truy vấn SQL tối ưu",
        "Hệ thống quy trình đa module",
        "Tính năng cộng tác nhóm",
      ],
    },
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}
