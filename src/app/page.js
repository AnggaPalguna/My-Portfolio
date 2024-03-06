"use client";
import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Project from "@/components/Project";
import Footer from "@/components/Footer";
import ThemeBtn from "@/components/ThemeBtn";





export default function Home() {

  return (
    <main className="flex min-h-screen flex-col background-about dark:background-about" >
      <Navbar/>
      <ThemeBtn/>
      <div className="container px-12 py-4 mx-auto">
        <Hero/>
        <About/>
        <Project/>
      </div>
      <Footer/>
    </main>
  );
}
