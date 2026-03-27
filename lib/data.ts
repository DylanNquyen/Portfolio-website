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
  },
  {
    slug: "bus-station-management",
    title: {
      en: "Eastern Bus Station Management Website",
      vi: "Website Quản lý Bến xe Miền Đông",
    },
    role: {
      en: "Frontend Developer",
      vi: "Lập trình viên Frontend",
    },
    period: "Apr 2025 - May 2025",
    summary: {
      en: "High-performance SPA for ticket booking with JWT authentication and real-time notifications.",
      vi: "SPA hiệu suất cao cho đặt vé xe với xác thực JWT và thông báo thời gian thực.",
    },
    description: {
      en: "Built a comprehensive bus station management system using Vue 3 and the modern Vue ecosystem. The application handles complex ticket booking states, user authentication, and real-time updates across 20+ dynamic views.",
      vi: "Xây dựng hệ thống quản lý bến xe toàn diện dùng Vue 3 và hệ sinh thái Vue hiện đại. Ứng dụng xử lý trạng thái đặt vé phức tạp, xác thực người dùng và cập nhật thời gian thực trên 20+ view động.",
    },
    challenges: {
      en: [
        "Managing complex state for ticket booking flows with multiple interdependent steps",
        "Implementing secure JWT-based authentication with seamless token refresh",
        "Building real-time notification system for booking updates",
        "Handling 20+ dynamic views while maintaining fast load times",
      ],
      vi: [
        "Quản lý state phức tạp cho luồng đặt vé với nhiều bước phụ thuộc lẫn nhau",
        "Triển khai xác thực JWT bảo mật với tự động làm mới token",
        "Xây dựng hệ thống thông báo thời gian thực cho cập nhật đặt vé",
        "Xử lý 20+ view động trong khi vẫn duy trì tốc độ tải nhanh",
      ],
    },
    solutions: {
      en: [
        "Leveraged Pinia for centralized state management with modular stores for each domain",
        "Implemented Axios interceptors for automatic JWT refresh and session management",
        "Built custom Vue composables for real-time notification handling",
        "Used Vue Router 4 navigation guards for strict RBAC and route protection",
      ],
      vi: [
        "Dùng Pinia để quản lý state tập trung với các store module hóa cho từng domain",
        "Triển khai Axios interceptors để tự động làm mới JWT và quản lý phiên",
        "Xây dựng Vue composables tùy chỉnh để xử lý thông báo thời gian thực",
        "Dùng Vue Router 4 navigation guards cho RBAC chặt chẽ và bảo vệ route",
      ],
    },
    results: {
      en: [
        "Successfully managed 20+ dynamic views with complex state interactions",
        "Achieved seamless session management with zero authentication failures",
        "Delivered real-time booking notifications with sub-second latency",
      ],
      vi: [
        "Quản lý thành công 20+ view động với các tương tác state phức tạp",
        "Quản lý phiên mượt mà, không có lỗi xác thực",
        "Thông báo đặt vé thời gian thực với độ trễ dưới 1 giây",
      ],
    },
    techStack: ["Vue 3", "Vite", "Pinia", "Vue Router 4", "Axios", "JWT"],
    features: {
      en: [
        "Dynamic ticket booking system",
        "JWT authentication with auto-refresh",
        "Role-based access control",
        "Real-time notifications",
        "20+ responsive views",
      ],
      vi: [
        "Hệ thống đặt vé động",
        "Xác thực JWT với tự động làm mới",
        "Kiểm soát truy cập theo vai trò",
        "Thông báo thời gian thực",
        "20+ view responsive",
      ],
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
  },
  {
    slug: "corporate-website",
    title: {
      en: "Nhien Viet Inspired - Corporate Website",
      vi: "Nhiên Việt Inspired - Website Doanh nghiệp",
    },
    role: {
      en: "Frontend Developer",
      vi: "Lập trình viên Frontend",
    },
    period: "Jun 2025 - Aug 2025",
    summary: {
      en: "High-performance corporate website with Vanilla JS, optimized Core Web Vitals, and reusable OOP components.",
      vi: "Website doanh nghiệp hiệu suất cao với Vanilla JS, tối ưu Core Web Vitals và component OOP tái sử dụng.",
    },
    description: {
      en: "Developed a fully responsive corporate website using modern Vanilla JavaScript with a focus on performance optimization and code architecture. Implemented custom reusable UI components using OOP patterns.",
      vi: "Phát triển website doanh nghiệp responsive hoàn toàn dùng Vanilla JavaScript hiện đại, tập trung vào tối ưu hiệu suất và kiến trúc code. Triển khai các UI component tái sử dụng tùy chỉnh theo mẫu OOP.",
    },
    challenges: {
      en: [
        "Building responsive UI without framework overhead while maintaining developer experience",
        "Optimizing page load speed and Core Web Vitals scores",
        "Creating reusable, maintainable components in vanilla JavaScript",
        "Implementing reliable form validation with API integration",
      ],
      vi: [
        "Xây dựng UI responsive không dùng framework trong khi vẫn duy trì trải nghiệm phát triển tốt",
        "Tối ưu tốc độ tải trang và điểm Core Web Vitals",
        "Tạo các component tái sử dụng, dễ bảo trì bằng vanilla JavaScript",
        "Triển khai xác thực form đáng tin cậy với tích hợp API",
      ],
    },
    solutions: {
      en: [
        "Engineered OOP-style JavaScript classes for reusable UI components (Toast system, Mobile Menu)",
        "Used Intersection Observer for lazy loading and critical resource preloading",
        "Integrated EmailJS API with async/await error handling and real-time Regex validation",
        "Implemented responsive design ensuring seamless UI across all devices down to 480px",
      ],
      vi: [
        "Xây dựng các class JavaScript theo phong cách OOP cho UI component tái sử dụng (Toast, Mobile Menu)",
        "Dùng Intersection Observer để lazy loading và preload tài nguyên quan trọng",
        "Tích hợp EmailJS API với xử lý lỗi async/await và xác thực Regex thời gian thực",
        "Triển khai responsive design đảm bảo UI mượt mà trên mọi thiết bị xuống đến 480px",
      ],
    },
    results: {
      en: [
        "Achieved excellent Core Web Vitals scores through lazy loading optimization",
        "Delivered seamless responsive experience across all device sizes",
        "Created maintainable codebase with reusable component architecture",
      ],
      vi: [
        "Đạt điểm Core Web Vitals xuất sắc nhờ tối ưu lazy loading",
        "Trải nghiệm responsive mượt mà trên mọi kích thước thiết bị",
        "Codebase dễ bảo trì với kiến trúc component tái sử dụng",
      ],
    },
    techStack: ["JavaScript (ES6+)", "HTML5", "CSS3", "EmailJS API", "Intersection Observer"],
    features: {
      en: [
        "Responsive down to 480px",
        "OOP-based component system",
        "Lazy loading with Intersection Observer",
        "Real-time form validation",
        "EmailJS integration",
      ],
      vi: [
        "Responsive xuống đến 480px",
        "Hệ thống component theo OOP",
        "Lazy loading với Intersection Observer",
        "Xác thực form thời gian thực",
        "Tích hợp EmailJS",
      ],
    },
    links: {
      live: "https://nvgo.org",
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
