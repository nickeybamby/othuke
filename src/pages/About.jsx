
import { BackgroundLines } from "../components/ui/background-lines";

import aboutImage from '../assets/othuke.jpg'

import Contact from "../components/Contact";
import FastMarquee from "../components/FastMarquee";

const About = ({ theme }) => {
  return (
    <>
      <BackgroundLines className={'relative w-full min-h-screen bg-gradient-to-b from-white to-neutral-100 dark:from-[#131346] dark:to-[#060619] overflow-hidden'}>
        <div className="flex items-center w-[500px] rounded-full lg:pt-12 md:pt-12 m-auto ">
          <img src={aboutImage} alt="" className="rounded-2xl z-10"/>
        </div>
      </BackgroundLines>

      <div className="bg-[#f9fefe] dark:bg-[#060619] text-gray-800 dark:text-gray-200 transition duration-300 py-[80px] px-[5%] w-full z-[5] relative lg:mt-[-150px] md:mt-[-150px] mt-[-150px] pb-[100px] ">
        <div className="w-full p-[40px] lg:p-[100px] bg-white dark:bg-[#0d0d29] rounded-[20px] shadow-2xl relative z-[10]  ">
          <div className="mx-auto">
            <div className="mb-12">
              <span className="text-center text-base sm:text-2xl bg-purple-200 px-5 py-2 rounded-full dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition duration-300 font-medium w-fit m-auto my-12text-gray-600   ">
                About
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-[15px] transition duration-300  ">
              <div>
                <p className="mb-5 text-gray-700 dark:text-white/70">
                  My journey is one of resilience, vision, and a deep love for stories that refuse to be forgotten. Years ago, I found myself at a critical crossroads—lying on a hospital bed, facing a diagnosis that threatened not just my health, but the very voice I hoped to share with the world. In that moment of uncertainty, I made a promise to myself: if I survived, I would build a home for stories that deserved to live.
                </p>

                <p className="mb-5 text-gray-700 dark:text-white/70">
                  Brick by brick, dream by dream, that promise became Masobe Books—a publishing house founded on the belief that African narratives must be seen, heard, and celebrated. What began as a spark of determination has grown into a thriving movement. Since 2018, I have had the privilege of leading Masobe to sign over a hundred authors, publish dozens of titles, and reach tens of thousands of readers across Nigeria and beyond.
                </p>
              </div>

              <div>
                <p className="mb-5 text-gray-700 dark:text-white/70">
                  Today, Masobe is more than a company—it is a community. Every book we publish carries a piece of my own journey: the quiet library visits with my father, the thrill of discovering new worlds on every page, and the conviction that stories can transform lives. This mission is not just professional—it is profoundly personal. And it continues, stronger than ever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FastMarquee theme={theme} />

      <Contact theme={theme} />
    </>
  );
};

export default About;
