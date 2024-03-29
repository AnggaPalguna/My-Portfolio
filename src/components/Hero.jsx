"use client" ;
import React from "react";
import Image from "next/image";
import TypeIt from "typeit-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() =>{
    AOS.init({duration:1200})
  })
  return (
    <section>
      <div className="h-[50px] md:h-0"></div>
      <div className="absolute circle dark:circle w-[270px] h-[270px] md:ml-[90px] md:h-[400px] md:w-[400px] justify-end -z-10 md:block  rounded-full mt-[-20px]"></div>
      <div className="grid grid-cols-1 mb-5 mt-[90px] lg:grid-cols-2 gap-4 lg:mt-[150px]" data-aos='fade-up'>
        <div className="place-self-center text-center sm:text-left justify-self-start mx-auto lg:mx-16 ">
          <h1 className=" dark:text-white mb-4 text-2xl lg:text-6xl font-extrabold">
            Hello I am Angga <br />
            <TypeIt 
              options={{
                speed: 100,
                loop: true
              }}
              getBeforeInit={(instance) => {
                instance
                  .type("Programmer", { delay: 1000 })
                  .delete()
                  .type("Web developer", { delay: 1000 })
                  .delete()
                  .type("Backend developer", { delay: 1000 })
                  .delete();
                return instance;
              }}
            />
          </h1>

          <p className="text-slate-600 dark:text-[#ADB7BE] text-lg lg:text-xl">
            {" "}
            Based Bali, Indonesia.
          </p>
          <div className="btn mt-6">
            <a href="https://drive.google.com/uc?export=download&id=18LduNED9dNasUAqtsSpKXhB6wCcaY9rw" className="dark:text-white px-6 py-3 rounded-full mr-4  bg-transparent hover:bg-slate-200 
            dark:hover:bg-slate-800 border border-black dark:border-white mt-2">
              Get my CV
            </a>
          </div>
        </div>
        <div className="col-span-1 place-self-center mt-9 lg:mt-6 relative mx-auto">
          <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] bg-white rounded-full overflow-hidden">
            <Image
              src="/images/prof3.png"
              alt="hero img"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
