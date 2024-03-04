"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
  useEffect(() =>{
    AOS.init({duration:2200})
  })
  return (
    <section id="project" className="min-h-screen" data-aos='fade-up'>
      <div className="lg:h-[50px]"></div>
      <h2 className="my-20 text-center text-4xl font-bold dark:text-white lg:mt-[50px] mb-8 md:mb-12 ">My Projects</h2>
      <div className="dark:text-white lg:flex lg:justify-between mb-20">
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
