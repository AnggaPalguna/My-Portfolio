import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "dummy",
    description: "dummy is dummy it's rill",
    image: "/images/project/project1.png",
    gitUrl:"/",
  },
  {
    id: 2,
    title: "dummy",
    description: "dummy is dummy it's rill",
    image: "/images/project/project1.png",
    gitUrl:"/",
  },
  {
    id: 3,
    title: "dummy",
    description: "dummy is dummy it's rill",
    image: "/images/project/project1.png",
    gitUrl:"/",
  },
];

const Project = () => {
  return (
    <section id="project" className="min-h-screen">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
      <div className="lg:flex lg:justify-between">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
