import { ServiceCardData } from "@/constants/data";
import ServiceCard from "../Cards/serviceCard";

const Services = () => {
  return (
    <section className="h-[100vh] w-full flex flex-col gap-6 items-center px-22">
      <div className="p-4 text-center pt-12">
        <h2 className="text-4xl font-bold">My Services</h2>
        <p className="p-2">
          {" "}
          I specialize in building and improving web applications and websites
          for my various customers. Below are a few outcomes of my goods and
          services.
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
