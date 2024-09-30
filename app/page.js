import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  
  return (
    <>
    <section className="md:px-20 w-full space-y-7">
        <Hero />
        <Projects/>
        <Skills/>
        <Services />
    </section>
    </>
  );
}
