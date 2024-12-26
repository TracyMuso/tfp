import Link from "next/link";

const techStack: string[] = [
  "Javascript",
  "Typescript",
  "Tailwindcss",
  "Reactjs",
  "Nextjs",
  "Redux",
  "Docker",
  "Vercel",
];

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center py-12 lg:px-20 sm:px-10 px-6"
    >
      <div className=" flex gap-5 items-center justify-between md:pt-16 md:px-12">
        <article className="flex flex-col justify-between lg:items-end items-center lg:text-right">
          <h2 className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl">
            About me
          </h2>
          <p className="leading-7 py-4 lg:w-4/5 w-full lg:text-right text-sm sm:text-[16px] text-center text-pink-50">
            Hello, my name is Tracy. I`m a software developer based in Zambia. I
            love bringing my ideas to life on my laptop. I am sure that part was
            obvious :) I have had the priveledge of working with a few local
            companies and businesses. Outside of work, I`ll be at home watching
            series or taking a stroll with friends. I am open to more
            collaborations and opportunities! If you got an idea you wanna bring
            to life, don`t hesitate to reach out.
          </p>
          <div className="pt-4 w-full md:w-3/5 lg:w-2/5">
            <h4 className="pt-5 xl:text-2xl text-center lg:text-right text-xl">
              Technologies I work with
            </h4>
            <div className="xl:ml-auto pl-8 md:pl-0">
              <ul className="sm:grid sm:grid-cols-2 text-m list-disc mx-auto sm:mx-0 text-left py-5 px-5">
                {techStack.map((item, idx) => (
                  <li className="p-1" key={idx}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
      <div className="pb-6 pt-16 flex flex-col sm:items-start items-center gap-9 w-full sm:px-12">
        <h2 className="lg:text-3xl text-left text-2xl py-8">
          Where I`ve worked
        </h2>
        <div className="w-full flex flex-col gap-12">
          <div className="sm:w-[500px] sm:mr-auto border-l-[#f78ca2] border-s p-3 flex flex-col gap-4 ">
            <div className="flex justify-between">
              <Link
                href={"https://www.linkedin.com/company/hotplatform"}
                className="font-bold underline text-white"
              >
                The hot platform
              </Link>
              <span className="italic">May 2023 - May 2024</span>
            </div>
            <p className="italic text-[#ff9b54]">
              Building and optimizing core components of the web-app
            </p>
            <ul className="pl-4 py-2 text-sm flex flex-col items-start gap-1">
              <li>Successfully migrated website from React to nextjs</li>
              <li>Worked as frontend lead developer for a month</li>
              <li>Evaluate user feedback and optimize website accordingly</li>
            </ul>
          </div>
          <div className="sm:w-[500px] sm:ml-auto self-end p-3 flex flex-col gap-4 border-s border-l-[#f78ca2]">
            <div className="flex justify-between">
              <Link
                href={"https://linkedin.com/company/ipahive"}
                className="font-bold underline text-white"
              >
                Ipahive
              </Link>
              <span className="italic ">Dec 2023 - May-2024</span>
            </div>
            <span className="italic text-[#ff9b54]">
              Worked as a solo frontend engineer building the growth capital
              web-app from scratch
            </span>
            <ul className="pl-4 py-2 text-sm flex flex-col items-start gap-1">
              <li>
                Built and maintained a robust micro-loan platform for users with
                even minimal technical know-how.
              </li>
              <li>Managed the project with tools like vercel and git</li>
              <li>Worked closely with CEO and developed roadmap for product</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
