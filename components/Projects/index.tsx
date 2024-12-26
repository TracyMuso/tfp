import Link from "next/link";
import ProjectCard from "../Cards/projectsCard";
import SecondaryProjectCard from "../Cards/secondaryProjectCard";
import { ProjectData, SecondaryProjectData } from "@/constants/data";

const Projects = () => {
  return (
    <section id="projects" className="py-12">
      <div className="flex flex-col gap-6">
        <h2 className="text-center text-4xl py-4">
          Some things I`ve worked on
        </h2>
        <div className="flex flex-col gap-12 2xl:w-4/5 w-full pt-6 pb-12 mx-auto">
          {ProjectData.map((item, idx) => (
            <ProjectCard key={idx} {...item} />
          ))}
        </div>
        <div className="noteworthy-projects hidden flex-col gap-12 py-12">
          <h2 className="text-center text-3xl">Other Noteworthy projects</h2>
          <div className="flex w-4/5 pb-3 mx-auto item-center">
            {SecondaryProjectData.map((item, idx) => (
              <SecondaryProjectCard key={idx} {...item} />
            ))}
            <Link
              className="text-xl text-center text-white"
              href={"/project-archive"}
            >
              View archive
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
