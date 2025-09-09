import React from "react";
import { BackgroundLines } from "../components/ui/background-lines";
import Contact from "../components/Contact";
import FastMarquee from "../components/FastMarquee";

const About = ({ theme }) => {
  return (
    <>
      <BackgroundLines>
        <div>
          <img src="" alt="" />
        </div>
      </BackgroundLines>

      <div className="bg-[#f9fefe] py-[80px] px-[5%] w-full pb-0 z-[5] relative  ">
        <div className="w-full p-[40px] lg:p-[100px] bg-white rounded-[20px] shadow-2xl relative z-[10]  ">
          <div className="mx-auto">
            <div className="mb-12">
              <span className="bg-[#d5f1f1] text-xs px-4 py-2 rounded-full uppercase tracking-widest text-gray-600 ">
                About
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-[15px] ">
              <div>
                <p className="mb-5 text-gray-700">
                  My journey is one of resilience, vision, and a deep love for stories that refuse to be forgotten. Years ago, I found myself at a critical crossroads—lying on a hospital bed, facing a diagnosis that threatened not just my health, but the very voice I hoped to share with the world. In that moment of uncertainty, I made a promise to myself: if I survived, I would build a home for stories that deserved to live.
                </p>

                <p className="mb-5 text-gray-700">
                  Brick by brick, dream by dream, that promise became Masobe Books—a publishing house founded on the belief that African narratives must be seen, heard, and celebrated. What began as a spark of determination has grown into a thriving movement. Since 2018, I have had the privilege of leading Masobe to sign over a hundred authors, publish dozens of titles, and reach tens of thousands of readers across Nigeria and beyond.
                </p>
              </div>

              <div>
                <p className="mb-5 text-gray-700">
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
