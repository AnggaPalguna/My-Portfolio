"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projectData = [
  {
    id: 1,
    title: "LIBRARY APPLICATION GUI",
    description: "A Java GUI based application to store book borrowing data, etc",
    image: "/images/project/project1.png",
    gitUrl:"https://github.com/AnggaPalguna/Sistem-Informasi-Perpustakaan",
  },
  {
    id: 2,
    title: "ABSENCE HISTORY WEB",
    description: "web to display attendance hostory from database and iot device",
    image: "/images/project/project2.png",
    gitUrl:"https://github.com/AnggaPalguna/absenrfid",
  },
  {
    id: 3,
    title: "PORTOGRID WEB",
    description: "A gallery website that can display a collection of photos",
    image: "/images/project/project3.png",
    gitUrl:"https://github.com/AnggaPalguna/gallery-web.git",
  },
];

const Project = () => {
  useEffect(() =>{
    AOS.init({duration:2200})
  })
  return (
    <section id="project" className="min-h-screen" >
      <div className="lg:h-[50px]"></div>
      <h2 className="my-20 text-center text-4xl font-bold dark:text-white lg:mt-[50px] mb-8 md:mb-12 " data-aos='fade-up'>My Projects</h2>
      <div className="dark:text-white lg:flex lg:justify-between mb-20" data-aos='fade-up'>
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
