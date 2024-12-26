import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full flex xl:py-20 md:pt-20 py-16 justify-center sm:px-10 px-6 md:px-20 lg:h-[90vh]">
      <div className="container flex flex-col gap-2">
        <div className="w-full flex flex-col items-center sm:items-start">
          <span className="text-pink-100 sm:pr-5 sm:pb-4 lg:text-xl">
            Hi, I`m
          </span>
          <h1 className="xl:text-[4rem] text-2xl sm:text-left text-center lg:text-4xl sm:text-3xl font-semibold text-white xl:leading-[5rem] lg:leading-[3.5rem] md:w-3/4 w-full">
            Tracy <br />
            <span className="text-orange-600">Software developer</span>
          </h1>
        </div>
        <p className="xl:text-[18px] sm:text-left text-center text-pink-50 leading-7 lg:w-3/4 font-light pt-4 pb-12">
          I have over 2 years of experience building things for the internet.
          <br />
          My specialty is in creating and maintaining websites for different
          establishments and elevating their online presence. I try my best to
          create sustainable and afforadable software solutions.
        </p>
        <Link
          href={"#button"}
          className="primary rounded-xl lg:w-[500px] sm:w-2/3 text-center py-3 px-16 text-white font-semibold text-xl"
        >
          Go to projects
        </Link>
      </div>
    </div>
  );
};

export default Hero;
