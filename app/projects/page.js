import ProjectCard from '@/components/Projects/ProjectCard'
import projects from '@/data/projects'
const Projects = () => {
  return (
    <section className='w-full md:min-h-[82vh] px-10 flex flex-col gap-8 pt-5 md:pt-0 select-none lg:flex-row-reverse md:px-24 items-center justify-between md:mt-5'>
      <div className='grid md:grid-cols-2 md:w-full gap-8 md:px-12'>
      {projects.map((project, i) => (
        <ProjectCard key={i} index={i} title={project.name} description={project.description} icon={project.icon} category={project.category} githubLink={project.links.github} liveLink={project.links.live} techs={project.techs || []}/>
      ))}
      </div>
    </section>
  )
}

export default Projects