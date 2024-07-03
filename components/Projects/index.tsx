import ProjectCard from "../Cards/projectsCard";
import { ProjectData } from "@/constants/data";

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
      </div>
    </section>
  );
};

export default Projects;
