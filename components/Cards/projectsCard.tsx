import Image from "next/image";
import { type Projects } from "@/types";

const ProjectCard = ({
  img,
  name,
  description,
  gitUrl,
  liveUrl,
  technologies,
}: Projects) => {
  return (
    <div className="w-11/12 mx-auto border border-[#fd78bf] rounded-md py-6 px-10 text-white">
      <div className="flex items-center gap-8">
        <div className="" data-aos="flip-left">
          <Image
            className="my-5"
            src={img}
            alt="project ui"
            width={700}
            height={550}
          />
        </div>

        <div className="details text-right w-2/5" data-aos="fade-left">
          <h4 className="pb-4 italic font-bold text-2xl">{name}</h4>
          <p className="text-gray-800">{description}</p>
          <div className="py-2">
            {technologies?.map((item, idx) => {
              return (
                <span key={idx} className="inline-block px-2">
                  #{item}
                </span>
              );
            })}
          </div>
          <div className="my-2 p-2 flex">
            <a href={liveUrl}>
              <i className="fa fa-chain text-2xl text-[#ff00cc] p-1"></i>
            </a>
            <a href={gitUrl}>
              <i className="fab fa-github text-2xl text-[#ff00cc] p-1"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
