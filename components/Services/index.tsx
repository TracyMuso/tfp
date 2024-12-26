import Link from "next/link";

const serviceData: string[] = [
  "Website redesign",
  "Website debugging",
  "Website maintenance",
  "Domain Setup and integration",
  "Search Engine Optimisation",
  "Website Copywriting",
];

const Services = () => {
  return (
    <section
      id="services"
      className="w-full flex flex-col gap-9 items-center py-16 px-22"
    >
      <div className="flex flex-col items-center text-center">
        <h2 className="xl:text-5xl lg:text-4xl text-center">My Services</h2>
        <span className="py-5 xl:text-xl">
          Primarily, I create custom websites for my clients, but I also offer
          the following services:
        </span>
      </div>
      <div className="xl:w-1/2 mx-auto">
        <ul className="grid grid-cols-2 gap-4 w-full">
          {serviceData.map((item, idx) => (
            <li key={idx} className="inline-flex items-center gap-1">
              <svg
                className="w-3.5 h-3.5 me-2 text-orange-500 dark:text-orange-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col mx-auto py-3 gap-2">
        <span>
          Hire me on{" "}
          <Link
            className="text-[#ffe1a8] font-bold"
            href={"https://www.peopleperhour.com/site/register?rfrd=11531838.5"}
          >
            People per hour
          </Link>{" "}
          for free
        </span>
      </div>
    </section>
  );
};

export default Services;
