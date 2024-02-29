"use client";
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

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

    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() =>{
            setTab(id);
        });
    }
  return (
    <section id='about' className='min-h-screen'>
        <div className='mt-[120px] lg:mt-[200px] md:grid md:grid-cols-2 gap-8 items-center py-8 px-16 xl:gap-16 sm:py-16 xl:py-16 '>
            <Image src="/images/About.png"
            className='rounded-l-lg'
            width={500}
            height={500}
            />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold mb-4'>About Me</h2>
                <p className='text-base md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eveniet a aspernatur omnis placeat pariatur asperiores illo corrupti voluptates eius!
                </p>
                <div className="flex flex-row justufy-start mt-8">
                    <TabButton selectTab={() => handleTabChange("skills")} 
                    active={tab === "skills"}>Skill</TabButton>
                    <TabButton selectTab={() => handleTabChange("Education")} 
                    active={tab === "Education"}>Education</TabButton>
                    <TabButton selectTab={() => handleTabChange("Experience")} 
                    active={tab === "Experience"}>Experience</TabButton>
                </div>
                <div className='mt-8'>
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default About