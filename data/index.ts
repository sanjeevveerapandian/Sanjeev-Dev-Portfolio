import { link } from "fs";

export const navItems = [
  // {name:"Home",link:"#/"},
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Tech enthusiast with a passion for development.",
    description: "Exploring new technologies.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[70vh]", // Slightly bigger size
    imgClassName: "w-full h-full object-cover", // Maintain the full height and width, but ensure the aspect ratio is kept
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
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
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently learning Data Structures in Java to strengthen my problem-solving skills.",
    description: "Understanding the Core of Algorithms",
    className: "md:col-span-3 md:row-span-2 p-4 overflow-hidden", // Add padding and hide overflow
    imgClassName:
      "absolute right-0 md:left-[65%] bottom-0 md:w-[500px] w-[400px] max-w-full", // Ensure the image fits inside the card
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
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
    id: 1,
    title: "Kanini Assessment and Workspace-Frontend",
    des: "As a trainee in the Product Development Engineering Department at KANINI Software Solutions, I developed a responsive Assessment and Workspace Frontend Webpage using React.js and Bootstrap. My work included creating reusable components, implementing real-time data rendering, and designing a user-friendly interface for managing tasks and assessments. This project enhanced my skills in React development and responsive design..",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Kanini Workspace-Frontend",
    des: "As a trainee in the Product Development Engineering Department at KANINI Software Solutions, I developed a responsive Workspace Frontend Webpage using React.js and Bootstrap. My work included creating reusable components, implementing real-time data rendering, and designing a user-friendly interface for managing tasks and assessments. This project enhanced my skills in React development and responsive design..",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Ambulance Connector App",
    des: "I developed an Ambulance Connector App consisting of separate apps for patients and drivers. When activated, the patients location is instantly shared with the nearest driver, who is guided to transport the patient to the closest private or government hospital. This solution ensures swift emergency response and seamless coordinatione",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Finance Management Dashboard",
    des: "A Finance Management Dashboard built with Next.js 14 that integrates multiple bank accounts, providing users with a centralized platform to view real-time transactions. It allows seamless transfer of funds between users, ensuring secure and efficient money management, all within a user-friendly interface. This dashboard makes it easier to track financial activity and manage transactions in one place.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Intern - KANINI Software Solutions",
    desc: "Worked as an Intern at KANINI Software Solutions in Product Engineering Department using ReactJS, Bootstrap",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full-Stack Intern - Ogrelix",
    desc: "I worked on a real-time project using React.js, Laravel, and MySQL for an Electronics Service Company.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web - Dev Project",
    desc: "Did the dev of a web-page for a client, from initial concept to deployment on web.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Developing a Project for myself",
    desc: "Started a project on creating a Portfolio Builder, with using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/sanjeevveerapandian", // Add the GitHub URL here
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/Sanjeev_004?t=5aZEwahq0qxyX35gIGGSIw&s=09", // Add the Twitter URL here
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sanjeev-veerapandian-43692a243/", // Add the LinkedIn URL here
  },
  {
    id: 4,
    img: "leet.svg",
    link: "https://leetcode.com/u/sanjeevveerapandian/",
  },
];
