"use client" ;
import React from "react";
import Image from "next/image";
import TypeIt from "typeit-react";

const Hero = () => {
  return (
    <section >
      <div className="grid grid-cols-1 mb-5 mt-[120px] lg:grid-cols-2 gap-4 lg:mt-[150px]">
        <div className="place-self-center text-center sm:text-left justify-self-start">
            <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            <TypeIt 
               options={{
                  speed: 100,
                  loop: true
               }}
               getBeforeInit={(instance) => {
                  instance.type("Hello I'm Angga", { delay : 1000 })
                  .delete()
                  .type("Hello", { delay : 1000 })
                  .delete()
                  .type("........", { delay : 1000 })
                  .delete()
                  .type("......//", {delay : 1000})

                  return instance
               }}/>
            </h1>
          
          <p className="text-[#ADB7BE] text-lg lg:text-xl">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur dolor vitae fugiat molestias nam fugit aperiam deserunt
            placeat, nihil numquam molestiae ut? Sunt, aut omnis! Ducimus minima
            impedit iusto ratione.
          </p>
          <div className="btn">
            <button className="px-6 py-3 rounded-full mr-4 bg-transparent hover:bg-slate-800 border border-white mt-2">
              For more
            </button>
          </div>
        </div>
        <div className="col-span-1 place-self-center mt-9 lg:mt-6 relative">
          <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] bg-white rounded-full overflow-hidden ">
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
