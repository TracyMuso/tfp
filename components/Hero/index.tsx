const Hero = () => {
  return (
    <div className="w-full flex py-28 justify-center py-18 h-[85vh]">
      <div className="container text-center">
        <h1 className="text-[5rem] font-extrabold text-white leading-[6rem]">
          Hey!
          <br />
          I`m Tracy
        </h1>
        <p className="text-xl leading-8 text-[#11010c] font-light py-6">
          I am a software developer with 3 years of experience who loves to
          build things for the internet.
          <br />
          Ready to level up your online presence with an awesome website? Check
          out some of my best work!
        </p>
        <button className="border-none rounded py-3 px-5 w-1/3 font-bold text-white text-xl">
          Go to projects
        </button>
      </div>
    </div>
  );
};

export default Hero;
