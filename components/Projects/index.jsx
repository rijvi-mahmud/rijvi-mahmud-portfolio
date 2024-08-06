"use client"
import React, { useEffect, useState } from 'react'
import SectionTitle from '../ui/sectionTitle'

import projects from '@/data/projects'
import ProjectCard from './ProjectCard'
const Projects = () => {
const [featured, setFeatured] = useState([]);

    useEffect(() => {
        setFeatured(projects.filter(project => project.type === 'Featured').slice(0, 4).map((project, i) => ({...project, index: i})));
    }, []);

  return (
    <div className='w-full lg:px-24 px-10 min-h-screen py-16 relative'>
        <div className='pb-28 pt-10'>
            <SectionTitle backgroundText='featured'>featured projects</SectionTitle>
        </div>
        <div className='grid md:grid-cols-2 w-full gap-8 md:px-12'>
            {featured.map((project, i) => (
                <ProjectCard key={i} index={i} title={project.name} description={project.description} icon={project.icon} category={project.category} githubLink={project.links.github} liveLink={project.links.live}/>
            ))}
        </div>
    </div>
  )
}

export default Projects