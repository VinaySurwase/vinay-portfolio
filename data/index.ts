import { color } from "framer-motion";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    {name:"TechStack",link:"#tech"},
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
   
  ];


  
  export const gridItems = [
    // {
    //   id: 1,
    //   title: " I prioritize getting the work done by fostering <span class='text-orange-300'>open communication</span>"
    //    ,
    //   description: "",
    //   className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    //   imgClassName: "w-full h-full",
    //   titleClassName: "justify-end",
    //   img: "/2112.i301.031.S.m004.c13.UI and UX designers concepts isometric composition.jpg",
    //   spareImg: "",
    // },
    // {
    //   id: 2,
    //   title: "Building my linguistic skills for <span class='text-emerald-300'>global communication</span>",
    //   description: "",
    //   className: "lg:col-span-3 md:col-span-6 md:row-span-3 ",
    //   imgClassName: "",
    //   titleClassName: "justify-start",
    //   img: "",
    //   spareImg: "",
    // },
    {
      id: 4,
      title: " I am a <span class='text-sky-400'>Tech enthusiast</span> with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "w-full h-full",
      titleClassName: " flex flex-col justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
    {
      id: 3,
      title: "My <span class='text-violet-400'>tech stack</span>",
      description: "I constantly try to improve",
      className: "lg:col-span-3 md:col-span-2 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 5,
      title: "Currently working on Learning <span class='text-rose-400'>image generation, fine-tuning, basically DevOPS</span>",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 opacity-70",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/grid.svg",
      spareImg: "/bg.png",
    },
    {
      id: 6,
      title: "Do you want to start a <span class='text-fuchsia-400'>project</span> together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "UkiyoFusion: AI-Powered Image to Ukiyo-e Converter",
      des: "A deep learning-based application that fine-tunes Stable Diffusion using LoRA to convert modern images into traditional Japanese Ukiyo-e artwork. Trained on 1,084 curated images, this model preserves artistic essence with efficient parameter tuning.",
      img: "/Ancient.png",
      iconLists: ["/pytorch.svg", "/diffusers.svg", "/peft.svg", "/huggingface.svg", "/colab.svg"],
      link: "https://github.com/VinaySurwase/UkiyoFusion",
      color:"text-rose-200"
    },
    {
      id: 2,
      title: "SmartBot: WiFi + Line-Following NodeMCU Robot",
      des: "A dual-mode robot that combines manual WiFi-based control using an Android app with autonomous line-following via IR sensors. Built on NodeMCU, it’s fully customizable and ideal for robotics enthusiasts.",
      img: "/Smartbot.png",
      iconLists: ["/esp8266.svg", "/arduino.svg", "/android.svg", "/wifi.svg", "/ir-sensor.svg"],
      link: "https://github.com/VinaySurwase/Wifi-Control-Line-Follower-Bot-using-NodeMCU",
      color: "text-green-200"
    },
    // {
    //   id: 3,
    //   title: "Alive Docs - An realtime docs.",
    //   des: "An web application which allows users to work with each other on docs on realtime , its very useful for jotting down notes to coming up with workflows , with features to be able to comment on particular parts of lines , or even words. Making an immersive experience overall.",
    //   img: "/Alivedocs.png",
    //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    //   link: "https://alive-docs.vercel.app/",
    //   color:"text-red-200"  
    // },
    // {
    //   id: 4,
    //   title: "A location tracking App using Leaflet and Socket.io",
    //   des: "By using the Socket.io connection port and Leaflet API, I have created a location tracking app",
    //   img: "/locationtrack.png",
    //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/ejs-svgrepo-com.svg", "/gsap.svg"],
    //   link: "https://github.com/VinaySurwase/Live-Location-Tracker",
    //   color:"text-purple-200"
    // },
  ];
  
 
  
  
  export const workExperience = [
    {
      id: 1,
      title: "<span class='text-purple'>Frontend</span> Enhancements",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity and responsiveness .",
      className: "md:col-span-2",
      thumbnail: "/frontend.png",
    },
    // {
    //   id: 2,
    //   title: "<span class='text-amber-300'>Backend</span> Developement",
    //   desc: "Developed and maintained server-side logic using Node.js, Express.js, and MongoDB.",
    //   className: "md:col-span-2", 
    //   thumbnail: "/backend.jpg",
    // },
    {
      id: 3,
      title: "<span class='text-blue-500'>Personal</span> OnGoing projects",
      desc: "Working on some mega projects and a couple of mini projects ",
      className: "md:col-span-2", 
      thumbnail: "/exp3.svg",
    },
    // {
    //   id: 4,
    //   title: "<span class='text-red-300'>Hackathon</span> Participation",
    //   desc: "Participated in a 48-hour hackathon with my teammates and succesfull presented our project.",
    //   className: "md:col-span-2",
    //   thumbnail: "/hackbyte.png",
    // },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      navigate:"https://github.com/VinaySurwase"
    },
    {
      id: 2,
      img: "/instagram.svg",
      navigate:"https://www.instagram.com/vinay_srws?igsh=MTdpOXkxc210aXJoNw=="
    },
    {
      id: 3,
      img: "/link.svg",
      navigate:"https://www.linkedin.com/in/vinay-surwase"
    },
  ];
  
  export  const  stack = [
    "/React.png",
    "/Mongod.png",
    "/Express1.png",
    "/Nest.png",
    "/Typescript.png",
    "/Javascript.png",,
    "/Django.png",
    "/Vite.png",
    "/Tailwindcs.png",
    "/framer.png",
    "/Django.png",
    "/github.png",
    "/React.png",
    "/Mongod.png",
    "/mongoose.png",
    "/framer.png",
  ];
  
