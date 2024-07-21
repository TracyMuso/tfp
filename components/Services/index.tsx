import Link from "next/link";
import { ServiceCardData } from "@/constants/data";
import ServiceCard from "../Cards/serviceCard";

const Services = () => {
  return (
    <section
      id="services"
      className="w-full flex flex-col gap-6 items-center px-22"
    >
      <div className="flex flex-col items-center text-center pt-12">
        <h2 className="text-4xl text-center ">My Services</h2>
        <p className="p-2 italic w-[90%] text-ce text-xl text-[#ff9b54]">
          {" "}
          I specialize in building and improving some of the finest web
          applications and websites for my various customers. Here are a few
          highlights of my goods and services.
        </p>
      </div>
      <div className="grid grid-cols-3 w-[75%] mx-auto gap-8 items-center justify-center pb-3">
        {ServiceCardData.map((item, idx) => {
          return <ServiceCard {...item} key={idx} />;
        })}
      </div>
      <div className="flex flex-col max-auto gap-2">
        <span>
          Hire me on{" "}
          <Link
            className="text-[#ffe1a8] font-bold"
            href={"https://www.peopleperhour.com/site/register?rfrd=11531838.5"}
          >
            People per hour
          </Link>{" "}
          for free
        </span>
      </div>
    </section>
  );
};

export default Services;
