import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full flex xl:py-20 lg:pt-20 justify-center px-20 h-[90vh]">
      <div className="container flex flex-col gap-2">
        <div className="w-full">
          <span className="text-pink-100 pr-5 pb-4 text-xl">Hi, I'm</span>
          <h1 className="xl:text-[4rem] lg:text-4xl font-semibold text-white xl:leading-[5rem] lg:leading-[3.5rem] w-3/4">
            Tracy, <br />
            Software developer
          </h1>
        </div>
        <p className="xl:text-[18px] text-pink-50 leading-7 w-3/4 font-light pt-4 pb-12">
          I have over 2 years of experience building things for the internet.
          <br />
          My specialty is in creating and maintaining websites for different
          establishments and elevating their online presence. I try my best to
          create sustainable and afforadable software solutions.
        </p>
        <Link
          href={"#button"}
          className="primary rounded-xl w-[500px] text-center py-3 px-16 text-white font-semibold text-xl"
        >
          Go to projects
        </Link>
      </div>
    </div>
  );
};

export default Hero;
