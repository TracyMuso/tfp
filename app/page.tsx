import NavMenu from "@/components/nav";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <NavMenu />
      <main className="flex flex-col p-0 m-0">
        <Hero />
      </main>
    </>
  );
}
