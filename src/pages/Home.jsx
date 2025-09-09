import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Books from "../components/Books";
import Marquee from "../components/FastMarquee";
import Contact from "../components/Contact";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";

const Home = ({ theme }) => {
  return (
    <>
      <BackgroundBeamsWithCollision className='flex flex-col gap-20'>
        <Hero />
      </BackgroundBeamsWithCollision>
         <Skills />
        <Books />
        <Marquee />
        <Contact /> 
    </>
  );
};

export default Home;
