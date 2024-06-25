const About = () => {
  return (
    <section className="flex flex-col items-center font-Montserrat">
      <article className="w-[90%] flex flex-col items-center pt-16 pb-6">
        <h2 className="text-4xl font-bold text-gray-100">About me</h2>
        <p className="text-gray-200 leading-7 py-4">
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
        <strong className="py-5 text-xl">
          Here are a couple of technologies I work with
        </strong>
        <div className="flex items-center justify-around w-2/5">
          <ul className="inline-block">
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Tailwindcss</li>
          </ul>
          <ul className="inline-block">
            <li>Reactjs</li>
            <li>Nextjs</li>
            <li>Redux</li>
          </ul>
        </div>
      </article>
      <div className="py-8">
        <h2 className="text-2xl text-center font-bold py-4">
          Where I`ve worked
        </h2>
        <div className="flex justify-between w-full gap-6">
          <div className="w-[450px] border border-[#cc0e74] rounded-lg p-6 shadow ">
            <div className="flex justify-between">
              <h4 className="font-bold">The hot platform</h4>
              <span className="italic ">May 2023 - present</span>
            </div>
            <p>Responsibilities</p>
            <ul className="pl-4 py-2">
              <li>sumn</li>
              <li>Sumn</li>
              <li>Sumn</li>
            </ul>
          </div>
          <div className="w-[450px] border border-[#cc0e74] rounded-lg p-6 shadow ">
            <div className="flex justify-between">
              <h4 className="font-bold">The hot platform</h4>
              <span className="italic ">May 2023 - present</span>
            </div>
            <p>Responsibilities</p>
            <ul className="pl-4 py-2">
              <li>sumn</li>
              <li>Sumn</li>
              <li>Sumn</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
