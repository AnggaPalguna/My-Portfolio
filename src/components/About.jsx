"use client";
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const TAB_DATA = [
    {
        title: "skills",
        id: "skills",
        content: (
            <ul>
                <li>Java</li>
                <li>C++</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>PHP</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "Education",
        content: (
            <ul>
                <li>Primkara University</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "Experience",
        content: (
            <ul>
                <li>None</li>
            </ul>
        )
    },
]

const About = () => {
    useEffect(() =>{
        AOS.init({duration:2200})
      })

    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() =>{
            setTab(id);
        });
    }
  return (
    <section id='about' className="min-h-screen" >
        <div className="lg:h-[50px]"></div>
        <div className='mt-[120px] lg:mt-[50px] md:grid md:grid-cols-2 gap-8 items-center py-8 px-16 xl:gap-16 sm:py-16 xl:py-16 ' data-aos='fade-up'>
            <Image src="/images/About.png"
            className='rounded-l-lg'
            width={500}
            height={500}
            />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='dark:text-white text-4xl font-bold mb-4'>About Me</h2>
                <p className='dark:text-white text-base md:text-lg'>An informatics engineering student that's interested in the IT Industry, with a disciplined and responsible personality. Has a high motivation to learn things and develop hard skills as well as soft skills.                </p>
                <div className="dark:text-white flex flex-row justufy-start mt-8">
                    <TabButton selectTab={() => handleTabChange("skills")} 
                    active={tab === "skills"}>Skill</TabButton>
                    <TabButton selectTab={() => handleTabChange("Education")} 
                    active={tab === "Education"}>Education</TabButton>
                    <TabButton selectTab={() => handleTabChange("Experience")} 
                    active={tab === "Experience"}>Experience</TabButton>
                </div>
                <div className='dark:text-white mt-8'>
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default About