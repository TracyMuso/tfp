import Image from "next/image";
import Link from "next/link";
import { type Projects } from "@/types";

const SecondaryProjectCard = ({
  img,
  name,
  description,
  gitUrl,
  liveUrl,
  technologies,
}: Projects) => {
  return (
    <div className="w-[300px] p-5 m-0 h-[250px] rounded-md border border-black mx-auto">
      <div className="flex flex-col gap-2">
        <h4 className="font-bold text-xl">{name}</h4>
        <p className="leading-6 text-m">{description}</p>
        <hr />
        <div className="block">
          {technologies?.map((item, idx) => {
            return (
              <span key={idx} className="inline-block px-2">
                {item}
              </span>
            );
          })}
        </div>
        <div className="flex justify-between w-2/5 pl-3 ">
          <Link href={liveUrl} className="block">
            <Image
              className="inline"
              src={img}
              height={20}
              width={20}
              alt="github icon"
            />
          </Link>
          <Link href={gitUrl}>
            <Image
              className="inline"
              src={"/icons/github-mark-white.svg"}
              height={20}
              width={20}
              alt="github icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SecondaryProjectCard;
