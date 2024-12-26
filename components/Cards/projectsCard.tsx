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
    <div className="w-11/12 mx-auto rounded-md py-8 xl:px-10 text-white">
      <div className="flex flex-col sm:flex-row items-center lg:gap-8">
        <div className="" data-aos="flip-left">
          <Image
            className="my-5"
            src={img}
            alt="project ui"
            width={800}
            height={550}
          />
        </div>

        <div
          className="details flex flex-col items-center sm:pt-0 pt-5 sm:items-end xl:w-2/5 lg:w-1/2"
          data-aos="fade-left"
        >
          <h4 className="pb-4 italic font-semibold text-right xl:text-xl">
            {name}
          </h4>
          <p className="p-1 text-pink-50 sm:text-right text-center">
            {description}
          </p>
          <div className="py-2">
            {technologies?.map((item, idx) => {
              return (
                <span
                  key={idx}
                  className="inline-block px-2 text-sm text-[#ffe1a8]"
                >
                  #{item}
                </span>
              );
            })}
          </div>
          <div className="flex gap-6 pt-4 ">
            <Link
              href={liveUrl}
              className="block rounded-md px-4 py-2 primary content-center"
            >
              <span className="pr-1 inline-flex items-center gap-1">
                See live
              </span>
              <Image
                className="inline"
                src={"/icons/arrow-up-right-from-square-svgrepo-com.svg"}
                height={20}
                width={20}
                alt="github icon"
              />
            </Link>
            {gitUrl && (
              <Link
                className="block rounded-md px-4 py-2 content-center secondary"
                href={gitUrl}
              >
                <span className="inline-flex items-center pr-1">
                  Source code
                </span>
                <Image
                  className="inline "
                  src={"/icons/github-mark-white.svg"}
                  height={19}
                  width={20}
                  alt="github icon"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
