import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id='contact' className=" top-0 left-0 right-0 z-10 py-3 bg-[#3c3c3c] bg-opacity-[40%]">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a className="text-xl me-4 md:me-6">Contact :</a>
        </li>
        <li>
        <IoLogoGithub  href="#" className="h-10 w-10 hover:text-white me-4 md:me-6" />
        </li>
        <li>
        <FaLinkedin  href="#" className="h-10 w-10 hover:text-white me-4 md:me-6" />
        </li>
    </ul>
    </div>
</footer>
  )
}

export default Footer