"use client";
import Link from "next/link";
import React, {useState} from "react";
import NavLink from "./Navlink";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLink = [
  { title:'Home',
    path:'#home',
  },
  { title:'About',
    path:'#about',
  },
  { title:'Project',
    path:'#project',
  },
  { title:'Contact',
    path:'#contact',
  },
]

const Navbar = () => {
  const  [navbarOpen, setNavbarOpen] = useState(false) ;
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-slate-600 bg-opacity-30 dark:bg-[#3c3c3c] dark:bg-opacity-85 backdrop-blur-sm">
      <div className="flex flex-warp item-center justify-between mx-auto px-4 p-4">
        <Link href="/" className="dark:text-white text-5xl font-semibold">
          AP
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button onClick ={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 mt-1 border rounded dark:text-[#ADB7BE] dark:hover:text-white text-slate-600 hover:text-black  border-black dark:border-slate-200">
              <Bars3Icon  className="h-5 w-5"/>
            </button>
          ):(
            <button onClick ={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 mt-1 border rounded dark:text-[#ADB7BE] dark:hover:text-white text-slate-600 hover:text-black  border-black dark:border-slate-200">
              <XMarkIcon  className="h-5 w-5"/>
            </button>
          )
          }
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex space-x-8 mt-3">
            {navLink.map((link, index) => (
              
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            
          </ul>
        </div>
      </div>
      
      {navbarOpen ? <MenuOverlay links={navLink}/> :null}
    </nav>
  );
};

export default Navbar;
