"use client";
import React from "react";
import Link from "next/link";
import { CodeBracketIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div className="w-full px-1 md:px-4 ">
      <div
        className="h-32 md:h-52 rounded-t-xl items-center justify-center relative group mt-5 border-2 dark:border-[#1d4739] border-[#51f0b8] dark:border-b-transparent border-b-transparent"
        style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
      <div className="overlay flex items-center rounded-t-xl justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 opacity-0 group-hover:opacity-100  ">
          <Link href={gitUrl} className="h-14 w-14 relative rounded-full border border-[#adb7be] hover:border-white group link">
            <CodeBracketIcon className="h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover:text-white"/>
          </Link>
        </div>
      </div>
      <div className="rounded-b-xl bg-slate-200 dark:bg-[#181818]  py-6 px-4 border-2 dark:border-[#1d4739] border-[#51f0b8] dark:border-t-transparent border-t-transparent">
        <h5 className="text-l md:text-xl font-semibold mb-2">{title}</h5>
        <p className="text-xs md:text-base dark:text-[#adb7be] ">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
