import Image from "next/image";
import Link from "next/link";

// const technologies = [
//   {
//     section: 1,
//     tech: [
//     'Javascript',
//     'Typescript',
//     'Tailwindcss'
//     ]
//   },
//   {
//     section: 2,
//     tech: [
//     'Reactjs',
//     'Nextjs',
//     'Redux',
//     ]
//   },
//   {
//     section: 3,
//       tech: [
//         'Ethersjs',
//         'Docker',
//         'Figma'
//         ]
//   }
// ]

const About = () => {
  return (
    <section className="flex flex-col items-center py-12">
      <div className="w-[90%] flex gap-5 items-center justify-between pt-16">
        <div className="relative">
          <div id="overlay" />
          <Image
            src={"/Images/pexels-cottonbro-5054212.jpg"}
            alt="abstract-purple-background-picture"
            width={380}
            height={500}
          />
        </div>
        <article className="flex flex-col justify-between text-right w-[60%]">
          <h2 className="text-4xl">About me</h2>
          <p className="leading-7 py-4">
            Hello, my name is Tracy Musongole. I`m a software developer based in
            Zambia. My time spent living in Moscow, Russia taught me how life
            can be made so much smoother with cutting edge technology right at
            your finger tips. I decided to give it a go and learn to develop
            software that would also make my life in Zambia much smoother.
            <br />
            Fast forward to now, I have already had the priveledge of working
            with a few local startups and built my own full fledged API`s
            websites and web-apps. I do take on freelance projects too, so if
            you got an idea you wanna bring to life, don`t hesitate to reach
            out.
          </p>
          <div className="pt-4">
            <h4 className="pt-5 text-2xl">
              Here are a couple of technologies I work with
            </h4>
            <div className="ml-auto flex items-center justify-between w-2/3">
              <ul className="flex flex-col gap-2 text-m items-start p-5 tech">
                <li>Javascript</li>
                <li>Typescript</li>
                <li>Tailwindcss</li>
              </ul>
              <ul className="flex flex-col gap-2 text-m items-start p-5 tech">
                <li>Reactjs</li>
                <li>Nextjs</li>
                <li>Redux</li>
              </ul>
              <ul className="flex flex-col gap-2 text-m items-start p-5 tech">
                <li>Ethersjs</li>
                <li>Docker</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
      <div className="pb-6 pt-16 w-full px-12">
        <h2 className="text-3xl font-semibold text-center py-8">
          Where I`ve worked
        </h2>
        <div className="w-[85%] mx-auto gap-6">
          <div className="w-[500px] mr-auto border-l-[#f78ca2] border-s p-3 flex flex-col gap-4 ">
            <div className="flex justify-between">
              <Link
                href={"https://www.linkedin.com/company/hotplatform"}
                className="font-bold underline text-white"
              >
                The hot platform
              </Link>
              <span className="italic">May 2023 - present</span>
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
          <div className="w-[500px] ml-auto p-3 flex flex-col gap-4 border-s border-l-[#f78ca2]">
            <div className="flex justify-between">
              <Link
                href={"https://linkedin.com/company/ipahive"}
                className="font-bold underline text-white"
              >
                Ipahive
              </Link>
              <span className="italic ">May 2023 - present</span>
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
