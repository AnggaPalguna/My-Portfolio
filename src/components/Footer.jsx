import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

  

const Footer = () => {
  const email = "anggakadek253@gmail.com";
  return (
    <footer id='contact' className=" top-0 left-0 right-0 z-10 py-3 bg-slate-400 dark:bg-[#3c3c3c] bg-opacity-[40%]">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li className="text-2xl me-4 md:me-6">
          <a href={`mailto:${email}`} className="flex items-center hover:text-black dark:hover:text-white">
            Contact me <IoMdMail className="w-6 h-6 ml-2 mt-1" />
          </a>
        </li>
        <li> 
        <a href="https://github.com/AnggaPalguna" target='_blank'>
          <IoLogoGithub className="h-10 w-10 hover:text-black dark:hover:text-white me-4 md:me-6" />
        </a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/kadek-palguna-30b009218/?trk=public-profile-join-page">
          <FaLinkedin  className="h-10 w-10 hover:text-black dark:hover:text-white me-4 md:me-6" />
        </a>
        </li>
    </ul>
    </div>
</footer>
  )
}

export default Footer