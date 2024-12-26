import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../public/icons/github-mark-white.svg";
import { NavMenuData } from "@/constants/data";

const MobileNav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="lg:hidden">
      <span onClick={handleDrawerToggle} className="block cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </span>
      <div
        className={`fixed top-0 right-0 z-20 bg-gray-300 h-full w-[75%] max-w-sm transition-transform duration-300 ease-in-out transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <span
          onClick={handleDrawerToggle}
          className="block fixed top-8 right-8 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </span>
        <div className="pt-20 flex flex-col gap-5 items-center">
          {NavMenuData.map((item, idx) => (
            <Link
              key={idx}
              className="text-pink-50 text-[17px] hover:text-pink-100 hover:underline"
              href={item.url}
            >
              {item.title}
            </Link>
          ))}
          <Link href={"https://github.com/TracyMuso"}>
            <Image
              alt="git-icon"
              width={30}
              height={30}
              objectFit=""
              src={GithubIcon}
            />
          </Link>
          <button className="border-none primary rounded-lg py-2 px-3">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
