import { type serviceCardProps } from "@/types";

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
    imgUrl: "/icons/settings-svgrepo-com.svg",
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
    text: "Very professional and highly functional websites",
  },
  {
    imgUrl: "/icons/alarm-svgrepo-com.svg",
    alt: "alarm-icon",
    title: "On time Project",
    text: "Delivering excellent quality work in good time",
  },
  {
    imgUrl: "/icons/support-services-svgrepo-com.svg",
    alt: "support-icon",
    title: "Full Support",
    text: "Need to tweak your website a bit, hit me up",
  },
  {
    imgUrl: "/icons/thumbs-up-svgrepo-com.svg",
    alt: "thumbs-up-icon",
    title: "Built with SASS",
    text: "Modern Websites built for scalability and efficiency",
  },
];
