import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../public/icons/github-mark-white.svg";
import { NavMenuData } from "@/constants/data";

const NavMenu = () => {
  return (
    <nav className="flex justify-between w-full items-center px-6 py-3 m-0 text-white border-b-[#f78ca2] border font-Libre_Baskerville h-[15vh]">
      <div className="logo text-2xl font-bold cursor-pointer">TM</div>
      <div className="flex justify-around gap-6 items-center">
        {NavMenuData.map((item, idx) => {
          return (
            <Link
              key={idx}
              className="hover:underline hover:decoration-1"
              href={item.url}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center justify-between gap-4">
        <Link href={"https://github.com/TracyMuso"}>
          <Image
            alt="git-icon"
            width={30}
            height={30}
            objectFit=""
            src={GithubIcon}
          />
        </Link>
        <button className="border-none secondary py-2 px-3">Resume</button>
      </div>
    </nav>
  );
};

export default NavMenu;
