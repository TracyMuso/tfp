import Image from "next/image";
import { type Projects } from "@/types";

const ProjectCard = ({
  img,
  name,
  description,
  gitUrl,
  liveUrl,
  technologies,
}: Projects) => {
  return (
    <div className="w-full py-12">
      <div className="w-2/3 mx-auto">
        <div className="col-md-12">
          <div className="flex items-center">
            <div className="col-md-4 offset-md-2 col-sm-6" data-aos="flip-left">
              <Image
                className="my-5"
                src="/Images/sth.png"
                alt="project ui"
                width={500}
                height={450}
              />
            </div>

            <div
              className="col-md-4 offset-md-right-2 col-sm-6"
              data-aos="fade-left"
            >
              <strong>Featured project:</strong>
              <h4 className="mb-4"> Space travellers hub</h4>
              <p>
                This is a website that fetches data from the spaceX API. A user
                can check out the history of dpaceX rocket launches and reserve
                rockets for a space trip.
              </p>
              <div>
                <span>Technologies used</span>
                {technologies.map((item, idx) => {
                  return (
                    <span key={idx} className="inline-block">
                      {item}
                    </span>
                  );
                })}
              </div>
              <div className="my-2 p-2 flex">
                <a href="space-uber.netlify.app">
                  <i className="fa fa-chain text-2xl text-[#ff00cc] p-1"></i>
                </a>
                <a href="https://github.com/TracyMuso/space-travelers-hub-online">
                  <i className="fab fa-github text-2xl text-[#ff00cc] p-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
