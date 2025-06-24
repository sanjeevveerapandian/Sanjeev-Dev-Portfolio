import { AiFillHome } from "react-icons/ai";
import { FaUser, FaProjectDiagram } from "react-icons/fa";
import { RiCodeSSlashFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

// Instead of putting JSX like <AiFillHome />, assign the component reference
export const navItems = [
  { name: "", link: "#/", icon: AiFillHome },
  { name: "", link: "#about", icon: FaUser },
  { name: "", link: "#projects", icon: FaProjectDiagram },
  { name: "", link: "#skills", icon: RiCodeSSlashFill },
  { name: "", link: "#contact", icon: MdEmail },
];

export const gridItems = [
  {
    id: 1,
    title: "Tech enthusiast with a passion for development.",
    description: "Exploring new technologies.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[70vh]", // Slightly bigger size
    imgClassName: "w-full h-full object-cover", // Maintain the full height and width, but ensure the aspect ratio is kept
    titleClassName: "justify-end",
    img: "./b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start text-violet-400",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center text-orange-400",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: " ",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "./grid.svg",
    spareImg: "./b4.svg",
  },

  {
    id: 5,
    title:
      "Currently learning Data Structures in Java to strengthen my problem-solving skills.",
    description: "Understanding the Core of Algorithms",
    className: "md:col-span-3 md:row-span-2 p-4 overflow-hidden", // Add padding and hide overflow
    imgClassName:
      "absolute right-0 md:left-[65%] bottom-0 md:w-[500px] w-[100%] max-w-full hidden sm:block", // Hide SVG on mobile view (sm and below)
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "./b5.svg",
    spareImg: "./grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
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
    id: 5,
    title: "AI Interview Prep Platform",
    des: "Developed an AI-powered interview preparation app using Next.js, Firebase, and Vapi SDK. It simulates voice/video interviews with real-time question flow, feedback storage, and performance tracking.",
    img: "./p5.png", // Ensure you place an appropriate image at public/p5.svg
    iconLists: [
      "./next.svg",
      "./tail.svg",
      "./svg/skills/firebase.svg",
      "./git.svg",
      // "./vapi.svg", // Optional: Add if you have a logo for Vapi SDK
    ],
    link: "./ui.interviewai.com", // Placeholder, update with your hosted link
    github: "https://github.com/sanjeevveerapandian/AI-Interview-Prep", // Update this
  },
  {
    id: 4,
    title: "MSS-Chennai Web Platform",
    des: "Developed a complete Frontend platform using ReactJS, Tailwind CSS, Laravel, and MySQL for service-based operations of MSS Chennai.",
    img: "./p4.svg",
    iconLists: [
      "./re.svg",
      "./tail.svg",
      "./laravel.svg",
      "./svg/skills/mysql.svg",
      "./git.svg",
    ],
    // link: "./ui.apple.com",
    github: "https://msschennai.in/team",
  },
  {
    id: 3,
    title: "Ambulance Connector App",
    des: "Built a dual-interface app connecting patients to drivers instantly, with location sharing and hospital guidance. Aimed at emergency response optimization.",
    img: "./p3.svg",
    iconLists: [
      "./js.svg",
      "./re.svg",
      "./tail.svg",
      "./svg/skills/firebase.svg",
      "./git.svg",
    ],
    // link: "./ui.aiimg.com",
    github: "https://github.com/sanjeevveerapandian/MedRush",
  },
  {
    id: 1,
    title: "Kanini Assessment - Frontend",
    des: "Developed responsive assessment and workspace frontend using React.js and Bootstrap at Kanini. Created reusable components and a user-friendly interface for managing tasks and assessments.",
    img: "./p1.png",
    iconLists: ["./js.svg", "./re.svg", "./tail.svg", "./git.svg"],
    // link: "/ui.earth.com",
    github:
      "https://github.com/sanjeevveerapandian/Kanini-Intern-Project-1-KaniniAssessment",
  },
  {
    id: 2,
    title: "Kanini Workspace - Frontend",
    des: "Built a responsive workspace interface using React and Bootstrap. Enhanced user interaction with real-time data and reusable components.",
    img: "./p2.svg",
    iconLists: ["./js.svg", "./re.svg", "./bstrap.svg", "./git.svg"],
    link: "./ui.yoom.com",
    github:"https://github.com/sanjeevveerapandian/Kanini-Intern-Project-2-Kanini-Workspace"
  },
];

// export const workExperience = [
//   {
//     id: 1,
//     title: "Frontend Intern – KANINI Software Solutions",
//     desc: "Completed a 1-month internship in July 2024 under the Product Engineering Department. Developed responsive UI components using React.js and Bootstrap, collaborating with senior developers on building real-time dashboards.",
//     period: "July 2024",
//     thumbnail: "./exp1.svg",
//   },
//   {
//     id: 2,
//     title: "Full-Stack Intern – Ogrelix",
//     desc: "Worked on a full-stack electronics service application using React.js, Laravel, and MySQL. Focused on backend optimization and frontend dashboard development during the internship in June 2024.",
//     period: "June 2024",
//     thumbnail: "./exp2.svg",
//   },
//   {
//     id: 3,
//     title: "Part-time Developer – Ogrelix (Current)",
//     desc: "Since September 2024, contributing to production-level feature updates, bug fixes, UI/UX refinements, and API integrations as a part-time developer at Ogrelix. Collaborating with the team to improve overall platform performance.",
//     period: "Sep 2024 – Present",
//     thumbnail: "./exp2.svg",
//   },
// ];


export const socialMedia = [
  {
    id: 1,
    img: "./git.svg",
    link: "https://github.com/sanjeevveerapandian", // Add the GitHub URL here
  },
  {
    id: 2,
    img: "./twit.svg",
    link: "https://x.com/Sanjeev_004?t=5aZEwahq0qxyX35gIGGSIw&s=09", // Add the Twitter URL here
  },
  {
    id: 3,
    img: "./link.svg",
    link: "https://www.linkedin.com/in/sanjeev-veerapandian-43692a243/", // Add the LinkedIn URL here
  },
  {
    id: 4,
    img: "./leet.svg",
    link: "https://leetcode.com/u/sanjeevveerapandian/",
  },
];
