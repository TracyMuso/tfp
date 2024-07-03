import Image from "next/image";
import Link from "next/link";
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
          <div className="flex justify-between pt-4">
            <Link
              href={liveUrl}
              className="block rounded-md border px-4 py-2 border-[#fd78bf] content-center hover:bg-pink-500"
            >
              <span className="pr-1 inline">See live</span>
              <Image
                className="inline"
                src={"/icons/arrow-up-right-from-square-svgrepo-com.svg"}
                height={20}
                width={20}
                alt="github icon"
              />
            </Link>
            <Link
              className="block rounded-md border px-4 py-2 border-[#fd78bf] content-center hover:bg-pink-500"
              href={gitUrl}
            >
              <span className="inline pr-1">Source code</span>
              <Image
                className="inline"
                src={"/icons/github-mark-white.svg"}
                height={19}
                width={20}
                alt="github icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
