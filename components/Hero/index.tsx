import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full flex py-28 justify-center py-18 h-[90vh]">
      <div className="container text-center">
        <h1 className="text-[5rem] font-extrabold text-white leading-[6rem]">
          Hey!
          <br />
          I`m Tracy
        </h1>
        <p className="text-xl leading-8 font-light py-6">
          I am a software developer with over 2 years of experience who loves to
          build things for the internet.
          <br />
          Ready to level up your online presence with an awesome website? Check
          out some of my best work!
        </p>
        <Link
          href={"#button"}
          className="bg-[#ff7f51] rounded-xl py-3 px-16 text-white text-xl"
        >
          Go to projects
        </Link>
      </div>
    </div>
  );
};

export default Hero;
