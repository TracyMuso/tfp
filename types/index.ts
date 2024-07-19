import type { Url } from "next/dist/shared/lib/router/router";

export type serviceCardProps = {
  imgUrl: string;
  title: string;
  text: string;
  alt: string;
};

export type Projects = {
  img: string;
  name: string;
  description: string;
  gitUrl?: Url;
  liveUrl: string;
  technologies: string[] | undefined;
};
