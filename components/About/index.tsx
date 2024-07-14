const About = () => {
  return (
    <section className="flex flex-col items-center">
      <article className="w-[90%] flex flex-col items-center pt-16 pb-6">
        <h2 className="text-4xl font-bold">About me</h2>
        <p className="leading-7 py-4">
          Hello, my name is Tracy Musongole. I`m a software developer based in
          Zambia. My interest in software development started back in 2021 after
          I returned home from Russia(I studied in Moscow for a little while). I
          was amazed by how life can be made so much smoother with cutting edge
          technology right at your finger tips. I decided to give it a go and
          learn to develop software that would also make my life in Zambia much
          smoother.
          <br />
          Fast forward to now, I have already had the priveledge of working with
          a few local startups and built my own full fledged API`s websites and
          web-apps. I do take on freelance projects too, so if you got an idea
          you wanna bring to life, don`t hesitate to reach out.
        </p>
        <h4 className="py-5 text-2xl">
          Here are a couple of technologies I work with
        </h4>
        <div className="flex items-center justify-between w-2/3">
          <ul className="p-5">
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Tailwindcss</li>
          </ul>
          <ul className="p-5">
            <li>Reactjs</li>
            <li>Nextjs</li>
            <li>Redux</li>
          </ul>
          <ul className="p-5">
            <li>Ethersjs</li>
            <li>Docker</li>
            <li>Figma</li>
          </ul>
        </div>
      </article>
      <div className="py-8">
        <h2 className="text-2xl text-center font-bold py-4">
          Where I`ve worked
        </h2>
        <div className="flex justify-between w-full gap-6">
          <div className="w-[500px] border border-[#cc0e74] rounded-lg p-6 shadow flex flex-col gap-5 ">
            <div className="flex justify-between">
              <h4 className="font-bold">The hot platform</h4>
              <span className="italic ">May 2023 - present</span>
            </div>
            <p className="italic">
              Building and optimizing core components of the web-app
            </p>
            <ul className="pl-4 py-2">
              <li>Successfully migrated website from React to nextjs</li>
              <li>Worked as frontend lead developer for a month</li>
              <li>Evaluate user feedback and optimize website accordingly</li>
            </ul>
          </div>
          <div className="w-[500px] border border-[#cc0e74] rounded-lg p-6 shadow ">
            <div className="flex justify-between">
              <h4 className="font-bold">Ipahive</h4>
              <span className="italic ">May 2023 - present</span>
            </div>
            <p>
              Worked as a solo frontend engineer building the growth capital
              web-app from scratch
            </p>
            <ul className="pl-4 py-2">
              <li>
                Built and maintained a robust micro-loan platform for users with
                even minimal technical know-how.
              </li>
              <li>Managed the project with tools like vercel and git</li>
              <li>
                DWorked closely with CEO and developed roadmap for product
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
