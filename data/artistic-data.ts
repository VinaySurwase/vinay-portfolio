// Artist & Engineer - BTech CSE Student
export const personalInfo = {
  name: "Vinay Surwase",
  title: "Digital Artist & Software Engineer",
  subtitle: "BTech CSE Student | Creative Technologist",
  bio: "Bridging the gap between technology and art, I craft digital experiences that tell stories. As a Computer Science Engineering student with a passion for visual arts, I create immersive digital worlds and innovative software solutions.",
  location: "India",
  email: "vinaysurwase@example.com", // Update with real email
  avatar: "/Vinay-Profile-2.jpeg"
};

export const artisticQuotes = [
  "Code is poetry in motion",
  "Pixels paint digital dreams", 
  "Where art meets algorithms",
  "Creating magic through technology",
  "Digital canvas, infinite possibilities"
];

export const skillCategories = [
  {
    category: "Digital Art & Design",
    color: "from-pink-500 to-purple-600",
    skills: [
      { name: "Digital Illustration", level: 85, icon: "🎨" },
      { name: "UI/UX Design", level: 90, icon: "✨" },
      { name: "3D Modeling", level: 75, icon: "🎪" },
      { name: "Animation", level: 80, icon: "🎬" },
      { name: "Color Theory", level: 85, icon: "🌈" }
    ]
  },
  {
    category: "Frontend Magic",
    color: "from-cyan-500 to-blue-600",
    skills: [
      { name: "React.js", level: 90, icon: "⚛️" },
      { name: "Next.js", level: 85, icon: "▲" },
      { name: "TypeScript", level: 85, icon: "📘" },
      { name: "Tailwind CSS", level: 90, icon: "🎭" },
      { name: "Framer Motion", level: 80, icon: "🌊" }
    ]
  },
  {
    category: "Backend Wizardry",
    color: "from-green-500 to-emerald-600",
    skills: [
      { name: "Node.js", level: 80, icon: "🟢" },
      { name: "Express.js", level: 75, icon: "🚀" },
      { name: "MongoDB", level: 80, icon: "🍃" },
      { name: "Python", level: 85, icon: "🐍" },
      { name: "Django", level: 70, icon: "🎯" }
    ]
  },
  {
    category: "AI & Machine Learning",
    color: "from-orange-500 to-red-600",
    skills: [
      { name: "PyTorch", level: 75, icon: "🔥" },
      { name: "Stable Diffusion", level: 80, icon: "🎭" },
      { name: "Computer Vision", level: 70, icon: "👁️" },
      { name: "NLP", level: 65, icon: "💬" },
      { name: "Fine-tuning", level: 75, icon: "⚙️" }
    ]
  }
];

export const artworkProjects = [
  {
    id: 1,
    title: "UkiyoFusion: AI Art Transformer",
    subtitle: "When Ancient Art Meets Modern AI",
    description: "A revolutionary deep learning application that transforms modern photographs into traditional Japanese Ukiyo-e masterpieces. Using fine-tuned Stable Diffusion with LoRA, this project preserves the artistic essence while bringing centuries-old art forms into the digital age.",
    image: "/Ancient.png",
    category: "AI Art",
    technologies: ["PyTorch", "Stable Diffusion", "LoRA", "HuggingFace", "Computer Vision"],
    colors: ["#FF6B9D", "#C44569", "#F8B500"],
    features: [
      "Fine-tuned on 1,084 curated Ukiyo-e artworks",
      "Preserves artistic style and cultural essence",
      "Efficient parameter tuning with LoRA",
      "Real-time image transformation"
    ],
    github: "https://github.com/VinaySurwase/UkiyoFusion",
    demo: "#",
    impact: "Bridging traditional art with cutting-edge AI technology"
  },
  {
    id: 2,
    title: "SmartBot: Artistic Robotics",
    subtitle: "Where Engineering Meets Creative Expression",
    description: "An intelligent robot that combines technical precision with artistic movement. Features dual-mode operation: WiFi-controlled artistic choreography and autonomous line-following with graceful motion patterns.",
    image: "/Smartbot.png",
    category: "Robotics Art",
    technologies: ["NodeMCU", "Arduino", "IoT", "Android", "Sensor Fusion"],
    colors: ["#4ECDC4", "#45B7D1", "#96CEB4"],
    features: [
      "Artistic movement patterns programmed",
      "WiFi-based remote choreography control",
      "Autonomous navigation with smooth transitions",
      "Mobile app with gesture-based controls"
    ],
    github: "https://github.com/VinaySurwase/Wifi-Control-Line-Follower-Bot-using-NodeMCU",
    demo: "#",
    impact: "Demonstrating that robotics can be both functional and beautiful"
  },
  {
    id: 3,
    title: "Portfolio Canvas",
    subtitle: "Interactive Digital Experience",
    description: "This very portfolio - a canvas where code becomes art. Built with cutting-edge web technologies to create an immersive, responsive experience that showcases the harmony between technical skills and creative vision.",
    image: "/portfolio-art.png", // You can add this image later
    category: "Web Art",
    technologies: ["Next.js", "React", "Framer Motion", "Three.js", "GSAP"],
    colors: ["#667eea", "#764ba2", "#f093fb"],
    features: [
      "Immersive 3D interactions",
      "Artistic animations and transitions",
      "Responsive design that adapts like art",
      "Custom visual effects and shaders"
    ],
    github: "#",
    demo: "#",
    impact: "Redefining how portfolios can be artistic expressions"
  }
];

export const experiences = [
  {
    id: 1,
    period: "2024 - Present",
    role: "Digital Artist & Developer",
    company: "Personal Projects",
    type: "Creative",
    description: "Exploring the intersection of art and technology through innovative projects that push the boundaries of digital creativity.",
    achievements: [
      "Created AI-powered art transformation tools",
      "Developed interactive web experiences",
      "Built responsive artistic interfaces",
      "Experimented with generative art algorithms"
    ],
    skills: ["Digital Art", "AI/ML", "Creative Coding", "Visual Design"],
    color: "from-purple-500 to-pink-500",
    icon: "🎨"
  },
  {
    id: 2,
    period: "2023 - 2024",
    role: "Frontend Engineer",
    company: "Web Development",
    type: "Technical",
    description: "Enhanced web platforms with creative designs and interactive user experiences, focusing on the artistic aspects of user interface design.",
    achievements: [
      "Improved user engagement through artistic UI/UX",
      "Implemented creative animations and transitions",
      "Optimized for mobile responsiveness",
      "Collaborated on design-focused projects"
    ],
    skills: ["React.js", "UI/UX Design", "Animation", "Responsive Design"],
    color: "from-blue-500 to-cyan-500",
    icon: "💻"
  },
  {
    id: 3,
    period: "2022 - Present",
    role: "BTech CSE Student",
    company: "Academic Journey",
    type: "Educational",
    description: "Pursuing Computer Science Engineering with a focus on creative applications of technology and artistic problem-solving approaches.",
    achievements: [
      "Maintained strong academic performance",
      "Led creative tech projects",
      "Participated in hackathons with artistic themes",
      "Balanced technical learning with creative pursuits"
    ],
    skills: ["Computer Science", "Software Engineering", "Project Management", "Creative Thinking"],
    color: "from-green-500 to-emerald-500",
    icon: "🎓"
  }
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/VinaySurwase",
    icon: "🐙",
    color: "hover:text-gray-400",
    description: "Code repositories & open source contributions"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/vinay_srws?igsh=MTdpOXkxc210aXJoNw==",
    icon: "📸",
    color: "hover:text-pink-400",
    description: "Artistic creations & behind-the-scenes"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vinay-surwase",
    icon: "💼",
    color: "hover:text-blue-400",
    description: "Professional network & career updates"
  }
];

export const techStack = {
  frontend: [
    { name: "React", icon: "/react.svg", color: "#61DAFB" },
    { name: "Next.js", icon: "/next.svg", color: "#000000" },
    { name: "TypeScript", icon: "/ts.svg", color: "#3178C6" },
    { name: "Tailwind", icon: "/tail.svg", color: "#06B6D4" }
  ],
  backend: [
    { name: "Node.js", icon: "/node-js-seeklogo.svg", color: "#339933" },
    { name: "Express", icon: "/Express.svg", color: "#000000" },
    { name: "MongoDB", icon: "/mongodb.svg", color: "#47A248" },
    { name: "Python", icon: "/python.svg", color: "#3776AB" }
  ],
  ai: [
    { name: "PyTorch", icon: "/pytorch.svg", color: "#EE4C2C" },
    { name: "HuggingFace", icon: "/huggingface.svg", color: "#FFD21E" },
    { name: "OpenAI", icon: "/openai.svg", color: "#412991" }
  ],
  tools: [
    { name: "Git", icon: "/git.svg", color: "#F05032" },
    { name: "Docker", icon: "/docker.png", color: "#2496ED" },
    { name: "Figma", icon: "/fm.svg", color: "#F24E1E" }
  ]
};
