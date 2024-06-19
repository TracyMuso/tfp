import { type serviceCardProps } from "@/types";
import Image from "next/image";

const ServiceCard = ({ imgUrl, text, title, alt }: serviceCardProps) => {
  return (
    <div
      className="shadow border rounded feature-item p-4 mb-4"
      data-aos="fade-up"
    >
      <div className="py-4">
        <Image src={imgUrl} alt={alt} width={50} height={50} />
      </div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default ServiceCard;
