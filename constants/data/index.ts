import { type serviceCardProps, type Projects } from "@/types";

interface NavMenu {
  url: string;
  title: string;
}

export const NavMenuData: NavMenu[] = [
  {
    title: "About",
    url: "#about",
  },
  {
    title: "Projects",
    url: "#projects",
  },
  {
    title: "Services",
    url: "#services",
  },
  {
    title: "Contact",
    url: "#contact",
  },
];

export const ServiceCardData: serviceCardProps[] = [
  {
    imgUrl: "/icons/settings-cog-svgrepo-com.svg",
    alt: "settings icon",
    title: "Easy to Maintain",
    text: "Assured long-term maintainability",
  },
  {
    imgUrl: "/icons/frame-alt-svgrepo-com.svg",
    alt: "frame icon",
    title: "Pixel Perfect",
    text: "Engaging and eye-catching designs",
  },
  {
    imgUrl: "/icons/magic-wand-wizard-svgrepo-com.svg",
    alt: "magic-wand-icon",
    title: "Clean Design",
    text: "Professional and functional websites",
  },
  {
    imgUrl: "/icons/alarm-svgrepo-com.svg",
    alt: "alarm-icon",
    title: "On time Project",
    text: "Delivering excellent work in good time",
  },
  {
    imgUrl: "/icons/support-svgrepo-com.svg",
    alt: "support-icon",
    title: "Full Support",
    text: "Need an update? Hit me up",
  },
  {
    imgUrl: "/icons/thumbs-up-svgrepo-com.svg",
    alt: "thumbs-up-icon",
    title: "Built with SASS",
    text: "Modern websites built for scalability",
  },
];

export const ProjectData: Projects[] = [
  {
    img: "/Images/blk.png",
    name: "Blockchain World conference",
    description:
      "This is a responsive website built for a conference where leaders in the blockchain sectors will be speaking",
    gitUrl: "https://github.com/TracyMuso/Capstone-project-1",
    liveUrl: "https://tracymuso.github.io/Capstone-project-1/",
    technologies: ["Javascript", "HTML", "CSS", "Responsive"],
  },
  // {
  //   img: "/Images/mf.png",
  //   name: "Mighty finance",
  //   description:
  //     "This is a modern day loan lending platfrom that allows undeserved markets to quickly and efficiently get financing",
  //   liveUrl: "https://mighty-finance-frontend.vercel.app/",
  //   technologies: ["Typescript", "Nextjs", "Redux", ],
  // },
  {
    img: "/Images/belle-preview.png",
    name: "Belle Beauty Parlor",
    description:
      "This is a modern day website for a beauty parlor. I used a very feminine design scheme and simplified navigation.",
    liveUrl: "https://belle-delta.vercel.app/",
    gitUrl: "https://github.com/TracyMuso/belle",
    technologies: ["Typescript", "Nextjs", "Vercel", "Responsive"],
  },
];

export const SecondaryProjectData: Projects[] = [
  {
    img: "/icons/arrow-up-right-from-square-svgrepo-com.svg",
    name: "Space travellers hub",
    description:
      "This is a website that displays history of dpaceX rocket launches and users can reserve rockets for a space trip",
    gitUrl: "https://github.com/TracyMuso/space-travelers-hub-online",
    liveUrl: "https://space-uber.netlify.app",
    technologies: ["Javascript", "React", "Redux"],
  },
  {
    img: "/icons/arrow-up-right-from-square-svgrepo-com.svg",
    name: "Space travellers hub",
    description:
      "This is a website that displays history of dpaceX rocket launches and users can reserve rockets for a space trip",
    gitUrl: "https://github.com/TracyMuso/space-travelers-hub-online",
    liveUrl: "https://space-uber.netlify.app",
    technologies: ["Javascript", "React", "Redux"],
  },
  {
    img: "/icons/arrow-up-right-from-square-svgrepo-com.svg",
    name: "Space travellers hub",
    description:
      "This is a website that displays history of dpaceX rocket launches and users can reserve rockets for a space trip",
    gitUrl: "https://github.com/TracyMuso/space-travelers-hub-online",
    liveUrl: "https://space-uber.netlify.app",
    technologies: ["Javascript", "React", "Redux"],
  },
];
