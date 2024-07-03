import Link from "next/link";
import ProjectCard from "../Cards/projectsCard";
import SecondaryProjectCard from "../Cards/secondaryProjectCard";
import { ProjectData, SecondaryProjectData } from "@/constants/data";

const Projects = () => {
  return (
    <section className="py-12 bg-[#cc0e74]">
      <div className="flex flex-col gap-6">
        <h2 className="text-center font-bold text-3xl py-4">
          Some things I`ve worked on
        </h2>
        <div className="flex flex-col gap-12 w-4/5 mx-auto">
          {ProjectData.map((item, idx) => (
            <ProjectCard key={idx} {...item} />
          ))}
        </div>
        <div className="noteworthy-projects flex flex-col gap-12 py-12">
          <h2 className="text-center text-3xl">Other Noteworthy projects</h2>
          <div className="flex w-4/5 mx-auto item-center">
            {SecondaryProjectData.map((item, idx) => (
              <SecondaryProjectCard key={idx} {...item} />
            ))}
          </div>
        </div>
        <div className="mx-auto">
          <Link href={"/project-archive"}>View archive</Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
