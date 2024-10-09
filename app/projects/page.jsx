import ProjectCard from '@/components/Projects/ProjectCard';
import Container from '@/components/ui/Container';
import projects from '@/data/projects';
const Projects = () => {
	return (
		<Container className="w-full md:min-h-[82vh] flex flex-col gap-8 pt-5 md:pt-0 select-none lg:flex-row-reverse items-center justify-between md:mt-5">
			<div className="grid md:grid-cols-2 md:w-full gap-8 md:px-12">
				{projects.map((project, i) => (
					<ProjectCard
						key={i}
						index={i}
						title={project.name}
						description={project.description}
						icon={project.icon}
						category={project.category}
						githubLink={project.links.github}
						liveLink={project.links.live}
						techs={project.techs || []}
					/>
				))}
			</div>
		</Container>
	);
};

export default Projects;
