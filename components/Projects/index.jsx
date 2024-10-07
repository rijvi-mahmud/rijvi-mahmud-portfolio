'use client';
import projectsData from '@/data/projects';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import SectionTitle from '../ui/sectionTitle';
import ProjectCard from './ProjectCard';

const Projects = () => {
	const [projects, setProjects] = useState([]);
	const [visibleProjects, setVisibleProjects] = useState(4);

	useEffect(() => {
		setProjects([...projectsData]);
	}, []);

	const showMoreProjects = () => {
		setVisibleProjects(prev => prev + 4);
	};

	return (
		<div className="w-full lg:px-24 px-10 min-h-screen py-16 relative">
			<div className="pb-28 pt-10">
				<SectionTitle backgroundText="featured">Featured Projects</SectionTitle>
			</div>
			<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 md:px-12">
				{projects.slice(0, visibleProjects).map(project => (
					<ProjectCard
						key={project.name}
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
			{visibleProjects < projects.length && (
				<div className="flex justify-center mt-8">
					<Button variant="gradient-fill" onClick={showMoreProjects}>
						Show More
					</Button>
				</div>
			)}
		</div>
	);
};

export default Projects;
