import { ServiceCardData } from "@/constants/data";
import ServiceCard from "../Cards/serviceCard";

const Services = () => {
  return (
    <section className="h-[100v] w-full flex flex-col gap-6 items-center py-12 px-22">
      <div className="p-4 text-center">
        <h2 className="text-4xl font-bold text-white">My Services</h2>
        <p className="text-xl text-gray-200 ">
          {" "}
          Here are a few reasons for you to hire me
        </p>
      </div>
      <div className="grid grid-cols-3 w-4/5 mx-auto gap-3 flex-wrap">
        {ServiceCardData.map((item, idx) => {
          return <ServiceCard {...item} key={idx} />;
        })}
      </div>
    </section>
  );
};

export default Services;
