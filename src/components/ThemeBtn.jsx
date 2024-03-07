"use client";
import React, { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa6';
import { BsSunFill } from 'react-icons/bs'

function ThemeBtn() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div>
      <button
        className='fixed h-10 w-10 top-[23px] right-[75px] z-20 lg:h-10 lg:w-10 md:top-[19px] md:right-[500px] dark:text-[#ADB7BE] dark:hover:text-white text-slate-600 hover:text-black rounded-full border border-black dark:border-slate-200 flex items-center justify-center'
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <FaMoon className='h-6 w-6'/> : <BsSunFill className='h-6 w-6'/>}
      </button>
    </div>
  );
}

export default ThemeBtn;
