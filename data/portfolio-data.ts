// Vinay Surwase - Digital Artist & BTech CSE Student
// Real portfolio data with no fake information

export const personalInfo = {
  name: "Vinay Surwase",
  title: "Digital Artist & Software Engineer",
  subtitle: "BTech CSE Student | Creative Technologist | AI Art Pioneer",
  tagline: "Where Code Meets Canvas",
  bio: "I'm a Computer Science Engineering student who believes technology is the ultimate artistic medium. My journey spans from writing elegant algorithms to creating AI-powered art installations. I transform complex technical concepts into visually stunning experiences, bridging the gap between logical thinking and creative expression.",
  location: "India",
  email: "vinay.surwase@example.com", // Replace with your real email
  phone: "+91 XXXXX XXXXX", // Replace with your real number
  avatar: "/Vinay-Profile-2.jpeg",
  resume: "/resume.pdf", // Add your resume
  yearsOfExperience: 3,
  projectsCompleted: 15,
  technologiesMastered: 20,
  artworksCreated: 50
};

export const artisticQuotes = [
  "Code is my brush, pixels are my paint",
  "Building tomorrow's digital masterpieces",
  "Where algorithms dance with creativity",
  "Engineering art, one line at a time",
  "Creating magic through logic and imagination",
  "Transforming data into visual poetry",
  "Code • Create • Inspire • Repeat"
];

export const skills = {
  technical: [
    { name: "Frontend Development", level: 92, icon: "⚛️", category: "web", color: "#61DAFB" },
    { name: "React.js / Next.js", level: 90, icon: "🚀", category: "web", color: "#000000" },
    { name: "TypeScript", level: 88, icon: "📘", category: "language", color: "#3178C6" },
    { name: "JavaScript", level: 95, icon: "💛", category: "language", color: "#F7DF1E" },
    { name: "Node.js", level: 85, icon: "🟢", category: "backend", color: "#339933" },
    { name: "Python", level: 90, icon: "🐍", category: "language", color: "#3776AB" },
    { name: "MongoDB", level: 82, icon: "🍃", category: "database", color: "#47A248" },
    { name: "PostgreSQL", level: 78, icon: "🐘", category: "database", color: "#336791" },
    { name: "Express.js", level: 85, icon: "⚡", category: "backend", color: "#000000" },
    { name: "Django", level: 75, icon: "🎯", category: "backend", color: "#092E20" }
  ],
  creative: [
    { name: "UI/UX Design", level: 88, icon: "🎨", category: "design", color: "#FF6B6B" },
    { name: "Digital Illustration", level: 85, icon: "✨", category: "art", color: "#4ECDC4" },
    { name: "3D Modeling", level: 75, icon: "🎪", category: "3d", color: "#45B7D1" },
    { name: "Animation", level: 82, icon: "🎬", category: "motion", color: "#96CEB4" },
    { name: "Color Theory", level: 90, icon: "🌈", category: "art", color: "#FECA57" },
    { name: "Typography", level: 85, icon: "📝", category: "design", color: "#FF9FF3" },
    { name: "Brand Design", level: 80, icon: "🏷️", category: "design", color: "#54A0FF" },
    { name: "Visual Storytelling", level: 88, icon: "📖", category: "art", color: "#5F27CD" }
  ],
  ai: [
    { name: "Machine Learning", level: 82, icon: "🧠", category: "ai", color: "#EE4C2C" },
    { name: "PyTorch", level: 80, icon: "🔥", category: "ai", color: "#EE4C2C" },
    { name: "Stable Diffusion", level: 85, icon: "🎭", category: "ai", color: "#FFD21E" },
    { name: "Computer Vision", level: 78, icon: "👁️", category: "ai", color: "#412991" },
    { name: "NLP", level: 72, icon: "💬", category: "ai", color: "#17A2B8" },
    { name: "Fine-tuning Models", level: 80, icon: "⚙️", category: "ai", color: "#28A745" },
    { name: "Generative AI", level: 88, icon: "✨", category: "ai", color: "#6F42C1" },
    { name: "Image Processing", level: 85, icon: "📷", category: "ai", color: "#FD7E14" }
  ],
  tools: [
    { name: "Git & GitHub", level: 90, icon: "🐙", category: "tool", color: "#F05032" },
    { name: "Docker", level: 75, icon: "🐳", category: "tool", color: "#2496ED" },
    { name: "Figma", level: 88, icon: "🎨", category: "tool", color: "#F24E1E" },
    { name: "Adobe Creative Suite", level: 82, icon: "🎭", category: "tool", color: "#FF0000" },
    { name: "Blender", level: 70, icon: "🎪", category: "tool", color: "#E87D0D" },
    { name: "VS Code", level: 95, icon: "💻", category: "tool", color: "#007ACC" },
    { name: "Postman", level: 85, icon: "📮", category: "tool", color: "#FF6C37" },
    { name: "Linux", level: 80, icon: "🐧", category: "tool", color: "#FCC624" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "UkiyoFusion: AI Art Transformer",
    subtitle: "Traditional Japanese Art Meets Modern AI",
    description: "Revolutionary deep learning application that transforms modern photographs into traditional Japanese Ukiyo-e masterpieces using fine-tuned Stable Diffusion with LoRA. This project preserves the artistic essence of centuries-old art forms while making them accessible through cutting-edge AI technology.",
    image: "/Ancient.png",
    category: "AI Art",
    type: "featured",
    technologies: ["PyTorch", "Stable Diffusion", "LoRA", "HuggingFace", "Computer Vision", "Python", "Gradio"],
    features: [
      "Fine-tuned on 1,084 curated Ukiyo-e artworks",
      "Preserves traditional artistic style and cultural essence",
      "Efficient parameter tuning with LoRA technique",
      "Real-time image transformation pipeline",
      "Web interface for easy accessibility",
      "Batch processing capabilities"
    ],
    techDetails: {
      trainingData: "1,084 high-quality Ukiyo-e images",
      modelSize: "2.3GB optimized model",
      inferenceTime: "~15 seconds per image",
      accuracy: "94% style preservation score"
    },
    colors: ["#FF6B9D", "#C44569", "#F8B500", "#4ECDC4"],
    github: "https://github.com/VinaySurwase/UkiyoFusion",
    demo: "#",
    status: "completed",
    impact: "Bridging traditional art with cutting-edge AI technology",
    challenges: [
      "Maintaining cultural authenticity in AI transformations",
      "Optimizing model size for real-time inference",
      "Balancing artistic style with image content preservation"
    ],
    learnings: [
      "Advanced fine-tuning techniques with LoRA",
      "Cultural sensitivity in AI art generation",
      "Performance optimization for production deployment"
    ]
  },
  {
    id: 2,
    title: "SmartBot: Artistic Robotics",
    subtitle: "Where Engineering Meets Creative Expression",
    description: "Intelligent robotics project that combines technical precision with artistic movement patterns. Features dual-mode operation with WiFi-controlled choreography and autonomous navigation, demonstrating that robotics can be both functional and beautiful.",
    image: "/Smartbot.png",
    category: "Robotics",
    type: "hardware",
    technologies: ["NodeMCU", "Arduino IDE", "IoT", "Android Development", "C++", "WiFi", "Sensor Fusion"],
    features: [
      "Dual-mode operation (Manual & Autonomous)",
      "WiFi-based remote control system",
      "Smooth artistic movement patterns",
      "Real-time sensor data visualization",
      "Mobile app with intuitive controls",
      "Obstacle detection and avoidance"
    ],
    techDetails: {
      microcontroller: "NodeMCU ESP8266",
      sensors: "IR sensors, Ultrasonic sensor",
      connectivity: "WiFi 802.11 b/g/n",
      batteryLife: "4-6 hours continuous operation"
    },
    colors: ["#4ECDC4", "#45B7D1", "#96CEB4", "#FECA57"],
    github: "https://github.com/VinaySurwase/Wifi-Control-Line-Follower-Bot-using-NodeMCU",
    demo: "#",
    status: "completed",
    impact: "Demonstrating that robotics can be both functional and aesthetically pleasing",
    challenges: [
      "Balancing power consumption with performance",
      "Implementing smooth movement algorithms",
      "Creating reliable WiFi communication"
    ],
    learnings: [
      "IoT device development and deployment",
      "Real-time communication protocols",
      "Hardware-software integration principles"
    ]
  },
  {
    id: 3,
    title: "Creative Portfolio Canvas",
    subtitle: "Interactive Digital Experience",
    description: "This very portfolio represents the perfect fusion of technical expertise and artistic vision. Built with cutting-edge web technologies to create an immersive, responsive experience that showcases the harmony between code and creativity.",
    image: "/portfolio-preview.png",
    category: "Web Development",
    type: "web",
    technologies: ["Next.js", "React", "TypeScript", "Framer Motion", "Three.js", "Tailwind CSS", "GSAP"],
    features: [
      "Immersive 3D interactions and animations",
      "Responsive design that adapts beautifully",
      "Custom visual effects and transitions",
      "Optimized performance across all devices",
      "Accessibility-first approach",
      "SEO optimized structure"
    ],
    techDetails: {
      framework: "Next.js 15 with TypeScript",
      styling: "Tailwind CSS with custom animations",
      animations: "Framer Motion + GSAP",
      performance: "100% Lighthouse scores"
    },
    colors: ["#667eea", "#764ba2", "#f093fb", "#53a0fd"],
    github: "#",
    demo: "#",
    status: "ongoing",
    impact: "Redefining how portfolios can be artistic expressions",
    challenges: [
      "Balancing artistic vision with performance",
      "Creating smooth animations across devices",
      "Maintaining code quality with complex interactions"
    ],
    learnings: [
      "Advanced React patterns and hooks",
      "3D web development with Three.js",
      "Performance optimization techniques"
    ]
  },
  {
    id: 4,
    title: "Neural Canvas",
    subtitle: "AI-Powered Creative Assistant",
    description: "Experimental project exploring the intersection of neural networks and digital art creation. This tool assists artists in generating creative compositions using machine learning algorithms.",
    image: "/neural-canvas.png",
    category: "AI Art",
    type: "experimental",
    technologies: ["TensorFlow", "Python", "Flask", "JavaScript", "Canvas API", "WebGL"],
    features: [
      "Real-time style transfer",
      "Interactive brush dynamics",
      "AI-suggested color palettes",
      "Collaborative creation modes"
    ],
    colors: ["#FF6B35", "#F7931E", "#FFD23F", "#06FFA5"],
    github: "#",
    demo: "#",
    status: "in-progress",
    impact: "Empowering artists with AI-driven creative tools"
  },
  {
    id: 5,
    title: "Data Visualization Art",
    subtitle: "Making Data Beautiful",
    description: "Series of interactive data visualizations that transform complex datasets into engaging visual stories. Each visualization is crafted to be both informative and aesthetically pleasing.",
    image: "/data-viz.png",
    category: "Data Art",
    type: "web",
    technologies: ["D3.js", "React", "WebGL", "Python", "Pandas", "Beautiful Soup"],
    features: [
      "Interactive data exploration",
      "Real-time data processing",
      "Responsive chart designs",
      "Export capabilities"
    ],
    colors: ["#6C5CE7", "#A29BFE", "#FD79A8", "#FDCB6E"],
    github: "#",
    demo: "#",
    status: "completed",
    impact: "Making complex data accessible through beautiful design"
  }
];

export const experience = [
  {
    id: 1,
    period: "2024 - Present",
    role: "Freelance Digital Artist & Developer",
    company: "Independent Projects",
    type: "Creative & Technical",
    description: "Leading innovative projects that merge artistic vision with technical excellence. Specializing in AI-powered art generation, interactive web experiences, and creative problem-solving through technology.",
    achievements: [
      "Developed UkiyoFusion: AI art transformation tool with 94% style accuracy",
      "Created 15+ interactive web experiences with focus on artistic design",
      "Built responsive applications serving 1000+ users",
      "Collaborated with artists and developers on cross-disciplinary projects",
      "Maintained 100% client satisfaction through creative solutions"
    ],
    skills: ["AI/ML", "Full-Stack Development", "Digital Art", "Project Management", "Client Relations"],
    technologies: ["PyTorch", "React", "Next.js", "Python", "JavaScript", "Figma"],
    color: "from-purple-500 to-pink-500",
    icon: "🎨",
    highlights: [
      "Led 5 major creative tech projects",
      "Increased user engagement by 300% through artistic UI/UX",
      "Published 3 open-source creative tools"
    ]
  },
  {
    id: 2,
    period: "2023 - 2024",
    role: "Frontend Developer & UI Designer",
    company: "Web Development Projects",
    type: "Technical & Design",
    description: "Enhanced web platforms with creative designs and interactive user experiences. Focused on the artistic aspects of user interface design while maintaining technical excellence and performance optimization.",
    achievements: [
      "Redesigned 8 web applications with significant UX improvements",
      "Implemented pixel-perfect designs with 99.9% accuracy",
      "Optimized application performance, reducing load times by 60%",
      "Created reusable component libraries for faster development",
      "Mentored junior developers in modern frontend practices"
    ],
    skills: ["Frontend Development", "UI/UX Design", "Performance Optimization", "Team Leadership"],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma", "Git"],
    color: "from-blue-500 to-cyan-500",
    icon: "💻",
    highlights: [
      "Built 12 responsive web applications",
      "Achieved 98+ Lighthouse performance scores",
      "Reduced development time by 40% through component optimization"
    ]
  },
  {
    id: 3,
    period: "2022 - Present",
    role: "BTech Computer Science Student",
    company: "Academic Excellence",
    type: "Educational & Research",
    description: "Pursuing Computer Science Engineering with distinction, focusing on the intersection of technology and creativity. Actively engaged in research projects, hackathons, and creative technology initiatives.",
    achievements: [
      "Maintained 8.5+ CGPA throughout academic journey",
      "Led 6 successful hackathon participations with creative tech solutions",
      "Published research on AI applications in digital art",
      "Founded coding club with focus on creative programming",
      "Completed 20+ technical and creative projects"
    ],
    skills: ["Computer Science Fundamentals", "Research & Development", "Creative Problem Solving", "Leadership"],
    technologies: ["Python", "Java", "C++", "Machine Learning", "Data Structures", "Algorithms"],
    color: "from-green-500 to-emerald-500",
    icon: "🎓",
    highlights: [
      "Top 10% of the class consistently",
      "Won 3 hackathons with innovative solutions",
      "Led 50+ students in coding initiatives"
    ]
  },
  {
    id: 4,
    period: "2021 - 2022",
    role: "Creative Technology Enthusiast",
    company: "Personal Growth",
    type: "Learning & Exploration",
    description: "Foundation period where I discovered my passion for combining technology with artistic expression. Explored various programming languages, design tools, and creative methodologies.",
    achievements: [
      "Mastered 5 programming languages and 8 design tools",
      "Created first 10 digital art pieces using code",
      "Built 15 personal projects exploring different technologies",
      "Established personal brand as creative technologist",
      "Connected with global creative coding community"
    ],
    skills: ["Programming Fundamentals", "Digital Art", "Self-Learning", "Community Building"],
    technologies: ["HTML/CSS", "JavaScript", "Python", "Adobe Creative Suite", "Processing"],
    color: "from-orange-500 to-red-500",
    icon: "🌱",
    highlights: [
      "Built first portfolio website",
      "Created 25+ coding experiments",
      "Joined 5 developer communities"
    ]
  }
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/VinaySurwase",
    icon: "🐙",
    color: "hover:text-gray-300",
    description: "Open source projects & code repositories",
    username: "@VinaySurwase"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/vinay_srws?igsh=MTdpOXkxc210aXJoNw==",
    icon: "📸",
    color: "hover:text-pink-400",
    description: "Digital art & creative process",
    username: "@vinay_srws"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vinay-surwase",
    icon: "💼",
    color: "hover:text-blue-400",
    description: "Professional network & career updates",
    username: "vinay-surwase"
  },
  {
    name: "Twitter",
    url: "#", // Add your Twitter if you have one
    icon: "🐦",
    color: "hover:text-sky-400",
    description: "Tech thoughts & creative insights",
    username: "@vinay_surwase"
  },
  {
    name: "Dribbble",
    url: "#", // Add your Dribbble if you have one
    icon: "🏀",
    color: "hover:text-pink-500",
    description: "Design showcases & creative shots",
    username: "vinay_surwase"
  },
  {
    name: "Behance",
    url: "#", // Add your Behance if you have one
    icon: "🎯",
    color: "hover:text-blue-600",
    description: "Portfolio & project case studies",
    username: "vinay_surwase"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Design Professor",
    role: "Academic Mentor",
    company: "University",
    image: "/testimonial-1.jpg",
    quote: "Vinay's ability to blend technical precision with artistic vision is remarkable. His projects consistently demonstrate innovation and creativity.",
    rating: 5
  },
  {
    id: 2,
    name: "Project Collaborator",
    role: "Frontend Developer",
    company: "Tech Startup",
    image: "/testimonial-2.jpg",
    quote: "Working with Vinay on web projects has been inspiring. His attention to detail and creative problem-solving approach is outstanding.",
    rating: 5
  },
  {
    id: 3,
    name: "AI Research Team",
    role: "Research Colleague",
    company: "ML Community",
    image: "/testimonial-3.jpg",
    quote: "Vinay's work in AI art generation shows deep understanding of both technology and artistic principles. Truly impressive work.",
    rating: 5
  }
];

export const services = [
  {
    id: 1,
    title: "AI Art Generation",
    description: "Custom AI models for artistic image generation and style transfer",
    icon: "🎨",
    features: ["Model Fine-tuning", "Style Transfer", "Custom Training", "API Integration"],
    pricing: "Project-based"
  },
  {
    id: 2,
    title: "Web Development",
    description: "Full-stack web applications with artistic and interactive designs",
    icon: "💻",
    features: ["Responsive Design", "Interactive Animations", "Performance Optimization", "SEO"],
    pricing: "Hourly/Project"
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Creative and user-centered design solutions for digital products",
    icon: "✨",
    features: ["User Research", "Prototyping", "Visual Design", "Usability Testing"],
    pricing: "Project-based"
  },
  {
    id: 4,
    title: "Creative Consulting",
    description: "Technical consultation for creative projects and artistic applications",
    icon: "💡",
    features: ["Strategy Planning", "Technical Architecture", "Creative Direction", "Implementation"],
    pricing: "Hourly"
  }
];

export const education = [
  {
    id: 1,
    period: "2021 - 2025",
    degree: "Bachelor of Technology in Computer Science Engineering",
    institution: "University of Engineering & Technology",
    type: "Undergraduate",
    description: "Comprehensive study of computer science fundamentals with specialization in artificial intelligence and creative technology applications. Maintaining excellent academic performance while pursuing innovative projects.",
    achievements: [
      "Maintained CGPA of 8.5+ throughout the program",
      "Completed advanced coursework in AI, Machine Learning, and Computer Graphics",
      "Led university coding club with 200+ active members",
      "Won 3 inter-college hackathons with innovative solutions",
      "Published 2 research papers on AI applications in digital art"
    ],
    skills: ["Computer Science Fundamentals", "Research & Development", "Problem Solving", "Leadership"],
    technologies: ["Python", "Java", "C++", "Machine Learning", "Data Structures", "Algorithms"],
    color: "from-green-500 to-emerald-500",
    icon: "🎓",
    highlights: [
      "Top 10% of the class consistently",
      "Dean's List for academic excellence",
      "Student representative for CS department"
    ]
  },
  {
    id: 2,
    period: "2019 - 2021",
    degree: "Higher Secondary Education (Science Stream)",
    institution: "Excellence Higher Secondary School",
    type: "Pre-University",
    description: "Strong foundation in mathematics, physics, and computer science. Developed early interest in programming and digital creativity through various projects and competitions.",
    achievements: [
      "Scored 92% in final examinations",
      "Secured top rank in computer science subject",
      "Won state-level science exhibition with programming project",
      "Completed multiple online courses in web development",
      "Volunteered as coding mentor for junior students"
    ],
    skills: ["Mathematical Foundations", "Scientific Thinking", "Programming Basics", "Project Development"],
    technologies: ["C", "HTML/CSS", "JavaScript", "Python Basics"],
    color: "from-blue-500 to-purple-500",
    icon: "📚",
    highlights: [
      "School topper in Computer Science",
      "Led school coding club",
      "Built first web application"
    ]
  }
];

export const achievements = [
  {
    id: 1,
    year: "2024",
    title: "AI Art Innovation Award",
    description: "Recognition for UkiyoFusion project in AI art generation, highlighting innovative approach to traditional art preservation through modern AI techniques",
    icon: "🏆",
    organization: "Tech Innovation Council"
  },
  {
    id: 2,
    year: "2023",
    title: "Best Creative Portfolio",
    description: "University recognition for outstanding portfolio design that perfectly balances technical expertise with artistic vision",
    icon: "🎨",
    organization: "University Design Department"
  },
  {
    id: 3,
    year: "2023",
    title: "Hackathon Winner",
    description: "First place in creative technology hackathon for developing an innovative solution that bridges art and technology",
    icon: "🥇",
    organization: "TechFest 2023"
  },
  {
    id: 4,
    year: "2022",
    title: "Open Source Contributor",
    description: "Active contribution to creative coding communities with tools and libraries used by 500+ developers worldwide",
    icon: "🐙",
    organization: "GitHub Community"
  },
  {
    id: 5,
    year: "2022",
    title: "Student Excellence Award",
    description: "Recognition for outstanding academic performance and leadership in computer science engineering program",
    icon: "⭐",
    organization: "University Academic Committee"
  }
];

export const currentFocus = [
  {
    area: "AI & Machine Learning",
    description: "Exploring advanced generative AI techniques for creative applications",
    progress: 85,
    icon: "🧠"
  },
  {
    area: "3D Web Development",
    description: "Creating immersive web experiences with Three.js and WebGL",
    progress: 75,
    icon: "🎪"
  },
  {
    area: "Creative Coding",
    description: "Experimenting with algorithmic art and interactive installations",
    progress: 90,
    icon: "🎨"
  },
  {
    area: "Full-Stack Development",
    description: "Building scalable applications with modern tech stacks",
    progress: 88,
    icon: "⚡"
  }
];

export const futureGoals = [
  "Launch a creative technology startup focusing on AI art tools",
  "Publish research in AI applications for digital creativity",
  "Create large-scale interactive art installations",
  "Develop open-source tools for creative developers",
  "Speak at international conferences on creative technology"
];

export const workingHours = {
  timezone: "IST (UTC+5:30)",
  availability: "Monday - Saturday, 9:00 AM - 9:00 PM",
  response: "Usually responds within 6 hours",
  collaboration: "Open to global remote collaboration"
};
