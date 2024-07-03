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
    title: "Experience",
    url: "#experience",
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
    img: "/Images/sth.png",
    name: "Space travellers hub",
    description:
      "This is a website that fetches data from the spaceX API. A user can check out the history of dpaceX rocket launches and reserve rockets for a space trip",
    gitUrl: "https://github.com/TracyMuso/space-travelers-hub-online",
    liveUrl: "https:space-uber.netlify.app",
    technologies: ["Javascript", "React", "Redux"],
  },
  {
    img: "/Images/sth.png",
    name: "Space travellers hub",
    description:
      "This is a website that fetches data from the spaceX API. A user can check out the history of dpaceX rocket launches and reserve rockets for a space trip",
    gitUrl: "https://github.com/TracyMuso/space-travelers-hub-online",
    liveUrl: "https:space-uber.netlify.app",
    technologies: ["Javascript", "React", "Redux"],
  },
];

export const SecondaryProjectData: Projects[] = [
  {
    img: "/icons/arrow-up-right-from-square-svgrepo-com.svg",
    name: "Space travellers hub",
    description:
      "This is a website that displays history of dpaceX rocket launches and users can reserve rockets for a space trip",
    gitUrl: "https://github.com/TracyMuso/space-travelers-hub-online",
    liveUrl: "https:space-uber.netlify.app",
    technologies: ["Javascript", "React", "Redux"],
  },
  {
    img: "/icons/arrow-up-right-from-square-svgrepo-com.svg",
    name: "Space travellers hub",
    description:
      "This is a website that displays history of dpaceX rocket launches and users can reserve rockets for a space trip",
    gitUrl: "https://github.com/TracyMuso/space-travelers-hub-online",
    liveUrl: "https:space-uber.netlify.app",
    technologies: ["Javascript", "React", "Redux"],
  },
];
