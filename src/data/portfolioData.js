export const portfolioData = {
  personalInfo: {
    name: "Polimetla Sam Babu",
    titles: ["Software Product Engineer", "Full Stack Developer", "Problem Solver"],
    bio: "Aspiring software engineer with a strong foundation in full-stack development and problem-solving. Experienced in building scalable, secure web applications using modern frontend and backend technologies. Seeking an internship to apply engineering skills, ship real-world features, and grow as a product-focused developer.",
    email: "sambabupolimetla@gmail.com",
    phone: "+91 9398890257",
    github: "https://github.com/SamBabu123456789",
    linkedin: "https://www.linkedin.com/in/sam-babu-b95288378/",
    leetcode: "https://leetcode.com/u/___sam17/",
    resumeUrl: "#", // User can replace with actual uploaded resume link
  },
  education: [
    {
      institution: "Kalvium's UG program in CS",
      degree: "B.Tech – Software Product Engineering (Kalvium × KARE)",
      cgpa: "8.0 CGPA",
      period: "2024 - 2028",
      description: "Focusing on hands-on project-based learning, software engineering principles, full-stack architecture, and production-grade product development at Kalvium x KARE, Srivilliputhur.",
    }
  ],
  skills: [
    {
      category: "Languages",
      items: ["C++ [Intermediate]", "Java [Intermediate]", "Python [Basic]"]
    },
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js"]
    },
    {
      category: "API Technologies",
      items: ["Rest APIs", "JWT Authentication", "Gemini API"]
    },
    {
      category: "Databases",
      items: ["MongoDB", "SQL", "Firebase"]
    },
    {
      category: "Version Control",
      items: ["Git", "GitHub"]
    },
    {
      category: "Containerization",
      items: ["Docker"]
    },
    {
      category: "Deployment and Cloud",
      items: ["Vercel", "Netlify", "Render"]
    },
    {
      category: "Development Tools",
      items: ["Visual Studio Code", "Antigravity", "Postman", "Bruno"]
    },
    {
      category: "Operating Systems",
      items: ["Windows 11"]
    }
  ],
  projects: [
    {
      id: "smart-notes",
      title: "Smart Notes",
      description: "A full-stack, AI-powered note-taking application designed to elevate productivity. Featuring dynamic workspace tools and smart cognitive assistants.",
      features: [
        "Built a full-stack note-taking application with JWT authentication and CRUD operations.",
        "Implemented search, categories, pinning, archive, and reminder features.",
        "Integrated AI-powered note summarization and quiz generation using the Gemini API.",
        "Designed a responsive UI and deployed the application using Vercel and Render."
      ],
      techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Gemini API", "Render", "Vercel"],
      liveDemo: "https://smart-notes-navy.vercel.app/login",
      github: "https://github.com/SamBabu123456789/Smart_Notes"
    },
    {
      id: "web-calculator",
      title: "Web Calculator",
      description: "A highly responsive scientific calculator built on React 19, enabling advanced algebraic and trigonometric computations with high visual fidelity.",
      features: [
        "Built using React 19, Vite, Tailwind CSS v4, and the mathjs library for high-precision computations.",
        "Provides a keyboard-friendly, responsive scientific calculator on the web featuring local-storage-backed history and memory state persistence.",
        "Shared with classmates for math homework, earning positive feedback on its fluid theme toggle and keyboard shortcut integrations.",
        "Built robust trig evaluation logic in calculatorHelpers.js and custom key listeners."
      ],
      techStack: ["React 19", "Vite", "Tailwind", "MathJS"],
      liveDemo: "https://web-calculator-coral.vercel.app/",
      github: "https://github.com/SamBabu123456789/Web_Calculator"
    }
  ]
};
