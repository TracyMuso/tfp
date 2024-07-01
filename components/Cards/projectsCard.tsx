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
    <div className="w-2/3 mx-auto">
      <div className="flex items-center">
        <div className="w-2/3" data-aos="flip-left">
          <Image
            className="my-5"
            src={img}
            alt="project ui"
            width={500}
            height={450}
          />
        </div>

        <div className="description" data-aos="fade-left">
          <strong>Featured project:</strong>
          <h4 className="mb-4">{name}</h4>
          <p>{description}</p>
          <div>
            <span>Technologies used</span>
            {technologies?.map((item, idx) => {
              return (
                <span key={idx} className="inline-block">
                  {item}
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
