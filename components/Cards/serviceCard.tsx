import { type serviceCardProps } from "@/types";
import Image from "next/image";

const ServiceCard = ({ imgUrl, text, title, alt }: serviceCardProps) => {
  return (
    <div
      className="card shadow border-none rounded-xl flex flex-col items-center feature-item p-4 w-[350px]"
      data-aos="fade-up"
    >
      <div className="py-4 text-center">
        <Image src={imgUrl} alt={alt} width={50} height={50} />
      </div>
      <h4 className="font-bold py-1 text-xl text-white">{title}</h4>
      <p className="text-center">{text}</p>
    </div>
  );
};

export default ServiceCard;
