import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Project from "@/components/Project";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Navbar/>
      <div className="container mx-auto px-12 py-4 ">
        <Hero/>
        <About/>
        <Project/>
      </div>

      <Footer/>
    </main>
  );
}
