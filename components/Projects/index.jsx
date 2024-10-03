'use client';
import projectsData from '@/data/projects';
import { useEffect, useState } from 'react';
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
				{projects.slice(0, visibleProjects).map((project, index) => (
					<ProjectCard
						key={index}
						index={index}
						title={project.name}
						description={project.description}
						icon={project.icon}
						category={project.category}
						githubLink={project.links.github}
						liveLink={project.links.live}
					/>
				))}
			</div>
			{visibleProjects < projects.length && (
				<div className="flex justify-center mt-8">
					<button
						className="bg-gradient-to-r from-green-500 to-yellow-300 text-black hover:bg-gradient-to-r hover:from-yellow-300 hover:to-green-500 font-medium py-2 px-4 rounded-full transition-all duration-500 ease-in-out bg-[length:200%_200%] hover:bg-[length:300%_300%] bg-left hover:bg-right"
						onClick={showMoreProjects}
					>
						Show More
					</button>
				</div>
			)}
		</div>
	);
};

export default Projects;
