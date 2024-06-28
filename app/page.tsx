import NavMenu from "@/components/nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import ProjectCard from "@/components/Cards/projectsCard";

export default function Home() {
  return (
    <>
      <NavMenu />
      <main className=" p-0 m-0">
        <Hero />
        <Services />
        <About />
        <ProjectCard />
      </main>
    </>
  );
}
